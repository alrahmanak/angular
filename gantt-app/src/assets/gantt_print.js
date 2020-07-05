(function(){

    var apiUrl = "https://export.dhtmlx.com/gantt";
  
    var templates = [
      "leftside_text",
      "rightside_text",
      "task_text",
      "progress_text",
      "task_class"
    ];
  
    function xdr(url, pack, cb){
      if (gantt.env.isIE){
        gantt.env.isIE = false;
        gantt.ajax.post(url, pack, cb);
        gantt.env.isIE = true;
      } else {
        gantt.ajax.post(url, pack, cb);
      }
    }
  
    function defaults(obj, std){
      for (var key in std)
        if (!obj[key])
          obj[key] = std[key];
      return obj;
    }
  
  //compatibility for new versions of gantt
    if(!gantt.ajax){
      if(window.dhtmlxAjax){
        gantt.ajax = window.dhtmlxAjax;
      }else if(window.dhx4){
        gantt.ajax = window.dhx4.ajax;
      }
    }
  
    function mark_columns(base){
      var columns = base.config.columns;
      if (columns)
        for (var i = 0; i < columns.length; i++) {
          if (columns[i].template)
            columns[i].$template = true;
        }
    }
  
    function add_export_methods(gantt){
      var color_box = null;
      var color_hash = {};
  
      function get_styles(css){
        if (!color_box){
          var color_box = document.createElement("DIV");
          color_box.style.cssText = "position:absolute; display:none;";
          document.body.appendChild(color_box);
        }
        if (color_hash[css])
          return color_hash[css];
  
        color_box.className = css;
        return (color_hash[css] = get_color(color_box, "color")+";"+get_color(color_box, "backgroundColor"));
      }
  
      gantt._getWorktimeSettings = function() {
  
        var defaultWorkTimes = {
          hours : [0, 24],
          dates : {0:true, 1:true, 2:true, 3:true, 4:true, 5:true, 6:true}
        };
  
        var time;
        if(!gantt.config.work_time){
          time = defaultWorkTimes;
        }else{
          var wTime = gantt._working_time_helper;
          if (wTime && wTime.get_calendar) {
            time = wTime.get_calendar();
          } else if (wTime) {
            time = {
              hours : wTime.hours,
              dates : wTime.dates
            };
          } else if (gantt.config.worktimes && gantt.config.worktimes.global) {
            time = {
              hours : gantt.config.worktimes.global.hours,
              dates : gantt.config.worktimes.global.dates
            };
          } else {
            time = defaultWorkTimes;
          };
        }
  
        return time;
      };
  
      gantt.exportToPDF = function(config){
        if (config && config.raw){
          config = defaults(config, {
            name:"gantt.pdf", data:this._serialize_html()
          });
        } else {
          config = defaults((config || {}), {
            name:"gantt.pdf",
            data:this._serialize_all(),
            config:this.config
          });
          fix_columns(gantt, config.config.columns);
        }
  
        config.version = this.version;
        this._send_to_export(config, "pdf");
      };
  
      gantt.exportToPNG = function(config){
        if (config && config.raw){
          config = defaults(config, {
            name:"gantt.png", data:this._serialize_html()
          });
        } else {
          config = defaults((config || {}), {
            name:"gantt.png",
            data:this._serialize_all(),
            config:this.config
          });
          fix_columns(gantt, config.config.columns);
        }
  
        config.version = this.version;
        this._send_to_export(config, "png");
      };
  
      gantt.exportToICal = function(config){
        config = defaults((config || {}), {
          name:"gantt.ical",
          data:this._serialize_plain().data,
          version:this.version
        });
        this._send_to_export(config, "ical");
      };
  
      function eachTaskTimed(start, end){
        return function(code, parent, master){
          parent = parent || this.config.root_id;
          master = master || this;
  
          var branch = this.getChildren(parent);
          if (branch)
            for (var i=0; i<branch.length; i++){
              var item = this._pull[branch[i]];
              if ((!start || item.end_date > start) && (!end || item.start_date < end))
                code.call(master, item);
  
              if (this.hasChild(item.id))
                this.eachTask(code, item.id, master);
            }
        };
      }
  
      gantt.exportToExcel = function(config){
        config = config || {};
  
        var tasks, dates;
        var state, scroll;
        if (config.start || config.end){
          state = this.getState();
          dates = [ this.config.start_date, this.config.end_date ];
          scroll = this.getScrollState();
          var convert = this.date.str_to_date(this.config.date_format);
          tasks = this.eachTask;
  
          if (config.start)
            this.config.start_date = convert(config.start);
          if (config.end)
            this.config.end_date = convert(config.end);
  
          this.render();
          this.eachTask = eachTaskTimed(this.config.start_date, this.config.end_date);
        }
  
        this._no_progress_colors =config.visual === "base-colors";
  
        config = defaults(config, {
          name:"gantt.xlsx",
          title:"Tasks",
          data:this._serialize_table(config).data,
          columns:this._serialize_columns({ rawDates: true }),
          version:this.version
        });
  
        if (config.visual)
          config.scales = this._serialize_scales(config);
  
        this._send_to_export(config, "excel");
  
        if (config.start || config.end){
          this.config.start_date = state.min_date;
          this.config.end_date = state.max_date;
          this.eachTask = tasks;
  
          this.render();
          this.scrollTo(scroll.x, scroll.y);
  
          this.config.start_date = dates[0];
          this.config.end_date = dates[1];
        }
      };
  
      gantt.exportToJSON = function(config){
        config = defaults((config || {}), {
          name:"gantt.json",
          data:this._serialize_all(),
          config: this.config,
          columns:this._serialize_columns(),
          worktime : gantt._getWorktimeSettings(),
          version:this.version
        });
        this._send_to_export(config, "json");
      };
  
      function sendImportAjax(config){
        var url = config.server || apiUrl;
        var store = config.store || 0;
        var formData = config.data;
        var callback = config.callback;
  
        formData.append("type", "excel-parse");
        formData.append("data", JSON.stringify({
          sheet: config.sheet || 0
        }));
  
        if(store)
          formData.append("store", store);
  
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (e) {
          if(xhr.readyState == 4 && xhr.status == 0){// network error
            if(callback){
              callback(null);
            }
          }
        };
  
        xhr.onload = function() {
          var fail = xhr.status > 400;
          var info = null;
  
          if (!fail){
            try{
              info = JSON.parse(xhr.responseText);
            }catch(e){}
          }
  
          if(callback){
            callback(info);
          }
        };
  