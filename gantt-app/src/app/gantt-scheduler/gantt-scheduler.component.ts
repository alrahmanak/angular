import {
  Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, Input
} from '@angular/core';

import 'dhtmlx-gantt';
import {GantttaskService} from "../services/gantttask.service";
//import {GanttlinkService} from "../../services/ganttlink.service";
import {SchedulerServiceService} from '../services/scheduler-service.service'
import {GanttTask} from "../models/gantttask";
import {DatePipe} from "@angular/common";

declare let gantt: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'gantt',
  templateUrl: './gantt-scheduler.component.html',
  styleUrls: ['./gantt-scheduler.component.scss']
})
export class GanttSchedulerComponent implements OnInit, AfterViewInit {

  @ViewChild("gantt_here", {static: false}) ganttContainer: ElementRef;

  datePipe = new DatePipe('en-US');
  public taskList: GanttTask[];
  tasklistRawdata:any[] = [];
  screenBlock:boolean = false;
  selectedValue:string = "default"
  _scenarioNum:string;
  @Input('scenarioNum')
  set scenarioNum(value: string) {
    this._scenarioNum = value;
    if(this._scenarioNum !== undefined)
      this.getScenarioActivities();
  }

  constructor(private taskService: GantttaskService, private scheduleService:SchedulerServiceService) { }

  ngOnInit() {
    //gantt.config.xml_date = "%Y-%m-%d %H:%i";

    //gantt.init(this.ganttContainer.nativeElement);
    //this.configureGantt();
    Promise.all([this.taskService.get()])
    .then(([data, links]) => {
      this.tasklistRawdata = data;
       // gantt.parse({data, links});
        this.processChartData();
    });
  }


  public getScenarioActivities() {
    setTimeout(() =>  this.screenBlock = true );
    this.tasklistRawdata = [];
    this.scheduleService.getScenarioActivities(this._scenarioNum)
      .subscribe(
        data => {
          console.log(data);
          this.tasklistRawdata = data;
          if(this.tasklistRawdata != null && this.tasklistRawdata.length > 0 ) {
            this.processChartData();
          }else{
            this.taskList = [];
            gantt.clearAll();
            setTimeout(() =>  this.screenBlock = false );
          }
        },
        error =>  {
          console.log(error);
          this.screenBlock = false;
        });
  }

  public ngAfterViewInit(): void {
   // gantt.init(this.ganttContainer.nativeElement);
    //this.configureGantt();
    this.initializeChart();
  }



  public initializeChart(): void {

    this.configureGantt();
    this.configureScales();
    //this.zoom_tasks();
    gantt.config.open_tree_initially = true;
    gantt.init(this.ganttContainer.nativeElement);
    //this.processChartData();
  }

  public processChartData(): void {
    this.taskList = [];
    gantt.clearAll();
    console.log("value of scale unit" + gantt.config.scale_unit);
    console.log("value of date scale "+gantt.config.date_scale);
    this.tasklistRawdata.forEach((taskData: any) => {
      // console.log(' before value of start_date'+taskData.start_date+'  end_date '+taskData.end_date);
      //if (wellInfo.rigCd !== null && wellInfo.drlgStaDttm != null && wellInfo.drlgEndDttm != null) {
        if(taskData.hasOwnProperty('render')){
          const task: GanttTask = {
            render: "split",
            label: taskData.rigCd,
            id: taskData.id,
            parent:taskData.parent,
            //start_date: this.datePipe.transform(new Date(taskData.start_date.slice(0,10)), 'MM/dd/yyyy').toString(),
            start_date: taskData.start_date,
            end_date: taskData.end_date,
            progress: '1',
            duration:4,
            waterSupply1Status: null,
            waterSupply2Status: null,
            waterSupply1Name: null,
            waterSupply2Name: null,
            text:null,
            color:'#d3d3d3',
            textColor:'white'

          };
          this.taskList.push(task);
        }else {
          const task: GanttTask = {
            text: taskData.well_name,
            label: taskData.rigCd,
            id: taskData.id,
            parent:taskData.parent,
            //start_date: this.datePipe.transform(new Date(taskData.start_date.slice(0,10)), 'MM/dd/yyyy').toString(),
            //end_date: this.datePipe.transform(new Date(taskData.end_date.slice(0,10)), 'MM/dd/yyyy').toString(),
            render:null,
            start_date: taskData.start_date,
            end_date: taskData.end_date,
            progress: '1',
            duration:4,
            waterSupply1Status: taskData.waterSupply1Status,
            waterSupply2Status: taskData.waterSupply2Status,
            waterSupply1Name: taskData.waterSupply1Name,
            waterSupply2Name: taskData.waterSupply2Name,
            color:'#d3d3d3',
            textColor:'black'
          };

          gantt.templates.task_class = function (start, end, task) {
            if (task.$level == 1) return 'purple_color'
            if (task.$level == 2) return 'blue_color'
            if (task.$level == 3) return 'orange_color'
            if (task.$level == 4) return 'green_color'
            if (task.$level == 5) return 'gray_color'
            if (task.$level == 6) return 'brown_color'
            if (task.$level == 7) return 'red_color'
            if (task.$level == 8) return 'green_color'
          }
          gantt.templates.task_text=function(start, end, task){
          
              if(task.hasOwnProperty("waterSupply1Name") && task.hasOwnProperty("waterSupply2Name") && task.waterSupply1Name !=null && task.waterSupply2Name!=null)
               return "<div style='display:inline; '>"+task.text+"</div><div style='display:inline; position:absolute; background:red; left: 0px; top:3px;width:65px;height:10px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>"+
                 "<div style='display:inline; position:absolute; background:brown; left: 0px; top:16px;width:125px;height:10px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
            else if(task.hasOwnProperty("waterSupply1Name") && task.waterSupply1Name !=null) 
                 return "<div style='display:inline; position:absolute; background:red; left: 0px; top:3px;width:65px;height:10px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div style='display:inline; '>"+task.text+"</div>"
              else if(task.hasOwnProperty("waterSupply2Name") && task.waterSupply2Name !=null) 
                  return "<div style='display:inline; position:absolute; background:brown; left: 0px; top:3px;width:125px;height:10px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div style='display:inline; '>"+task.text+"</div>"
               else 
                 return task.text
          };




          // console.log(' after value of start_date'+task.start_date+'  end_date '+task.end_date);
          this.taskList.push(task);
        }

      //this.taskList.push(task);
      // }

    });

    if(this.taskList != null && this.taskList.length > 0) {
      const d =  {'data': this.taskList};
      gantt.parse(JSON.stringify(d));
      gantt.render();
    }

    


    // need to test overlay ext, still not successful
    /*
    gantt.plugins({
      overlay: true
    });

    var overlayControl = gantt.ext.overlay; 
    
    var legendTopOverlay = gantt.ext.overlay.addOverlay(function(container){
      var legendTop = document.createElement("div");
      legendTop.style.zIndex = "2";
      legendTop.style.position = "fixed";
      legendTop.style.top = "0%";
      legendTop.style.left = gantt.$container.offsetWidth - 200 + "px";
      legendTop.style.height = '200px'; 
      legendTop.style.width = '200px';
      legendTop.style.backgroundColor = 'red'; 
      legendTop.innerHTML = 'Legend top';
      container.appendChild(legendTop);
    
    });

    gantt.config.readonly = true;
    overlayControl.showOverlay(legendTopOverlay);
    gantt.$root.classList.add("overlay_visible");



    this.screenBlock = false;
    */
  }



  configureGantt(){

    gantt.config.columns =  [
      {name: 'label',       label: 'Resource Name',  tree: false, align: 'center' , width: '85'},
    ];
    gantt.templates.tooltip_text = function(start,end,task){
      return "<b>Task:</b> "+task.text+"<br/><b>Duration:</b> " + task.duration;
    };
    gantt.templates.grid_header_class = function(columnName, column){
        return "updColor";
    };
    gantt.templates.scale_row_class = function(scale){
      return "updColor";
    }

    gantt.templates.scale_cell_class = function(date){
      return "updColor";
    };

    gantt.templates.timeline_cell_class = function(item,date){

      console.log("Day is :", date.getDay(), " : Month is:", date.getMonth(), ": year is :", date.getFullYear())
      var cell_start = gantt.date.day_start(new Date(date));
      var t_day_start = gantt.date.day_start(new Date());
      console.log("***** Gantt cell date is :", cell_start);
      console.log("***** Today date is :", t_day_start);

      if (+cell_start == +t_day_start){
        console.log("***** Today is matches with gantt date:");
        return "today";
      }

      // for highlighting beginning of year
      if(date.getDay() < 7 && date.getMonth() == 0)
        return "begin_year";

      if(date.getDay() < 7 && date.getMonth() == 6)
        return "middle_year";
        /** **/

      if(date.getMonth() %3==0)
        return "quarter_border";
    };


    // adding baseline display
    /*gantt.addTaskLayer(function draw_planned(task){
      var main_div = document.createElement('div');

      if (gantt.hasChild(task.id) && task.render == 'split') {
        gantt.eachTask(function(child){
          this.generate_elements(child.id, main_div)
        },task.id);
      }
      else this.generate_elements(task.id, main_div);

      return main_div;
    };*/
    gantt.config.row_height = 80;
  }


  private configureScales(): void {

    gantt.date.add_year_quarter = function(date, inc){

      var temp_date = new Date(date)
      gantt.date.year_start(temp_date)
      gantt.date.month_start(temp_date)
      gantt.date.day_start(temp_date)

      var q1 = new Date(temp_date);
      var q2 = gantt.date.add(q1, 3, "month");
      var q3 = gantt.date.add(q2, 3, "month");
      var q4 = gantt.date.add(q3, 3, "month");
      var next_year = gantt.date.add(q4, 3, "month");

      if (+q1 <= +date && +date < +q2) return q2
      if (+q2 <= +date && +date < +q3) return q3
      if (+q3 <= +date && +date < +q4) return q4
      if (+q4 <= +date && +date < +next_year) return next_year

    };


    gantt.config.min_column_width = 50;
    gantt.config.scale_height = 50;
    var quarter_template = function(date){
      //console.log("Year value "+date.getFullYear());
      return "Q" + (Math.floor((date.getMonth() / 3)) + 1)+", "+date.getFullYear();
    }

    gantt.config.scales = [

      {unit: 'year_quarter', step: 1, template: quarter_template},
      {unit: 'month', step: 1, format: "%M"}
    ];


  }

  public ngOnChanges(): void {
    //this.initializeChart();
    console.log("inside ngOnChnages "+this.scenarioNum );
  }

/*byId(list, id){
  for (var i = 0; i < list.length; i++) {
    if (list[i].key == id)
      return list[i].label || "";
  }
  return "";
}*/



   generate_elements(id, main_div){
    var task = gantt.getTask(id);
    var sizes = gantt.getTaskPosition(task, task.start_date,task.end_date);

    if(task.hasOwnProperty("waterSupply1Name")) {
      var el1 = document.createElement('div');
      el1.className = 'WaterWell1';
      el1.style.left = sizes.left + 'px';
      el1.style.width = /*sizes.width + 'px';*/ '50px'
      el1.style.top = sizes.top + 13 + 'px';
      main_div.appendChild(el1)
    }

    if(task.hasOwnProperty("waterSupply2Name")) {

      var el2 = document.createElement('div');
      el2.className = 'WaterWell2';
      el2.style.left = sizes.left + 'px';
      el2.style.width = /*sizes.width + 'px';*/ '50px'
      el2.style.top = sizes.top + 3 + 'px';
      main_div.appendChild(el2)
    }

    return;

  }

  zoom_tasks(){
    switch(this.selectedValue){
      case "week":
        gantt.config.scale_height = 110;
        gantt.config.min_column_width = 40;

        var quarter_template = function(date){
          console.log("Year value "+date.getFullYear());
          return "Q" + (Math.floor((date.getMonth() / 3)) + 1)+", "+date.getFullYear();
        }

        var day_template = function(date){
          return  date.getDate() +" "+ date.toLocaleString('en-US', { month: 'short' }) ;
        }

        gantt.config.scales = [
          /* {unit: 'year', step: 1, format: '%Y'},*/
          {unit: 'year_quarter', step: 1, template: quarter_template},
          {unit: 'month', step: 1, format: "%M"},
          {unit: 'day', step: 1, template: day_template},
          {unit:"hour", step:1, date:"%H"}
        ];
        gantt.templates.timeline_cell_class = function(item,date){
          console.log("value month "+date.getMonth()+" hours "+date.getHours())
          if((date.getMonth() == 3 || date.getMonth() == 6 || date.getMonth() == 9 || date.getMonth() == 0) && date.getDate() == 1  && date.getHours()== 0)
            return "quarter_border";
        };
        break;
      case "trplweek":
        gantt.config.scale_height = 80;
        gantt.config.min_column_width = 50;

        var quarter_template = function(date){
          console.log("Year value "+date.getFullYear());
          return "Q" + (Math.floor((date.getMonth() / 3)) + 1)+", "+date.getFullYear();
        }

        gantt.config.scales = [
          /* {unit: 'year', step: 1, format: '%Y'},*/
          {unit: 'year_quarter', step: 1, template: quarter_template},
          {unit: 'month', step: 1, format: "%M"},
          {unit: 'day', step: 1, format: "%d"}
        ];

        gantt.templates.timeline_cell_class = function(item,date){
          console.log("value month "+date.getMonth()+" hours "+date.getHours())
          if((date.getMonth() == 3 || date.getMonth() == 6 || date.getMonth() == 9 || date.getMonth() == 0) && date.getDate() == 1)
            return "quarter_border";
        };
        break;

      case "year":
        gantt.config.min_column_width = 70;
        gantt.config.scale_height = 80;
        gantt.templates.timeline_cell_class = function(item,date){
          console.log("value day "+date.getDay())
          if((date.getMonth() == 3 || date.getMonth() == 6 || date.getMonth() == 9 || date.getMonth() == 0) && date.getDate()== 1)
            return "quarter_border";
        };

        var quarter_template = function(date){
          console.log("Year value "+date.getFullYear());
          return "Q" + (Math.floor((date.getMonth() / 3)) + 1)+", "+date.getFullYear();
        }

        gantt.config.scales = [
          {unit: 'year_quarter', step: 1, template: quarter_template},
          {unit: "month", step: 1, format: "%F, %Y"},
          {unit: "week", step:1, format: "%W"}
        ];
        break;
      case "default" :
        gantt.templates.timeline_cell_class = function(item,date){
          if(date.getMonth() %3==0)
            return "quarter_border";
        };

        gantt.config.scale_height = 60;
        gantt.config.min_column_width = 60;

        var quarter_template = function(date){
          console.log("Year value "+date.getFullYear());
          return "Q" + (Math.floor((date.getMonth() / 3)) + 1)+", "+date.getFullYear();
        }

        gantt.config.scales = [
          {unit: 'year_quarter', step: 1, template: quarter_template},
          {unit: 'month', step: 1, format: "%M"},
        ];

        break;
    }
    gantt.render();
  }



}

