/*
@license

dhtmlxGantt v.6.3.7 Professional Evaluation
This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
Gantt.plugin(function(t){!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ext/dhtmlxgantt_drag_timeline",[],e):"object"==typeof exports?exports["ext/dhtmlxgantt_drag_timeline"]=e():t["ext/dhtmlxgantt_drag_timeline"]=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/codebase/",n(n.s=233)}({2:function(t,e){var n={second:1,minute:60,hour:3600,day:86400,week:604800,month:2592e3,quarter:7776e3,year:31536e3};function o(t){return!(!t||"object"!=typeof t)&&!!(t.getFullYear&&t.getMonth&&t.getDate)}function r(t,e){var n=[];if(t.filter)return t.filter(e);for(var o=0;o<t.length;o++)e(t[o],o)&&(n[n.length]=t[o]);return n}t.exports={getSecondsInUnit:function(t){return n[t]||n.hour},forEach:function(t,e){if(t.forEach)t.forEach(e);else for(var n=t.slice(),o=0;o<n.length;o++)e(n[o],o)},arrayMap:function(t,e){if(t.map)return t.map(e);for(var n=t.slice(),o=[],r=0;r<n.length;r++)o.push(e(n[r],r));return o},arrayFind:function(t,e){if(t.find)return t.find(e);for(var n=0;n<t.length;n++)if(e(t[n],n))return t[n]},arrayFilter:r,arrayDifference:function(t,e){return r(t,function(t,n){return!e(t,n)})},arraySome:function(t,e){if(0===t.length)return!1;for(var n=0;n<t.length;n++)if(e(t[n],n,t))return!0;return!1},hashToArray:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(t[n]);return e},sortArrayOfHash:function(t,e,n){var o=function(t,e){return t<e};t.sort(function(t,r){return t[e]===r[e]?0:n?o(t[e],r[e]):o(r[e],t[e])})},throttle:function(t,e){var n=!1;return function(){n||(t.apply(null,arguments),n=!0,setTimeout(function(){n=!1},e))}},isArray:function(t){return Array.isArray?Array.isArray(t):t&&void 0!==t.length&&t.pop&&t.push},isDate:o,isValidDate:function(t){return o(t)&&!isNaN(t.getTime())},isStringObject:function(t){return t&&"object"==typeof t&&"function String() { [native code] }"===Function.prototype.toString.call(t.constructor)},isNumberObject:function(t){return t&&"object"==typeof t&&"function Number() { [native code] }"===Function.prototype.toString.call(t.constructor)},isBooleanObject:function(t){return t&&"object"==typeof t&&"function Boolean() { [native code] }"===Function.prototype.toString.call(t.constructor)},delay:function(t,e){var n,o=function(){o.$cancelTimeout(),t.$pending=!0;var r=Array.prototype.slice.call(arguments);n=setTimeout(function(){t.apply(this,r),o.$pending=!1},e)};return o.$pending=!1,o.$cancelTimeout=function(){clearTimeout(n),t.$pending=!1},o.$execute=function(){t(),t.$cancelTimeout()},o},objectKeys:function(t){if(Object.keys)return Object.keys(t);var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n},requestAnimationFrame:function(t){var e=window;return(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)})(t)},isEventable:function(t){return t.attachEvent&&t.detachEvent}}},232:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o(2),i=function(){function e(){var e=this;this._mouseDown=!1,this._calculateDirectionVector=function(){if(e._trace.length>=10){for(var t=e._trace.slice(e._trace.length-10),n=[],o=1;o<t.length;o++)n.push({x:t[o].x-t[o-1].x,y:t[o].y-t[o-1].y});var r={x:0,y:0};return n.forEach(function(t){r.x+=t.x,r.y+=t.y}),{magnitude:Math.sqrt(r.x*r.x+r.y*r.y),angleDegrees:180*Math.atan2(Math.abs(r.y),Math.abs(r.x))/Math.PI}}return null},this._applyDndReadyStyles=function(){e._timeline.$task.classList.add("gantt_timeline_move_available")},this._clearDndReadyStyles=function(){e._timeline.$task.classList.remove("gantt_timeline_move_available")},this._getScrollPosition=function(e){return{x:t.$ui.getView(e.$config.scrollX).getScrollState().position,y:t.$ui.getView(e.$config.scrollY).getScrollState().position}},this._countNewScrollPosition=function(t){var n=e._calculateDirectionVector(),o=e._startPoint.x-t.x,r=e._startPoint.y-t.y;return n&&(n.angleDegrees<15?r=0:n.angleDegrees>75&&(o=0)),{x:e._scrollState.x+o,y:e._scrollState.y+r}},this._setScrollPosition=function(e,n){r.requestAnimationFrame(function(){t.$ui.getView(e.$config.scrollX).scroll(n.x),t.$ui.getView(e.$config.scrollY).scroll(n.y)})},this._stopDrag=function(n){if(e._trace=[],t.$root.classList.remove("gantt_noselect"),void 0!==e._originalReadonly&&(t.config.readonly=e._originalReadonly),void 0!==e._originAutoscroll&&(t.config.autoscroll=e._originAutoscroll),t.config.drag_timeline){var o=t.config.drag_timeline.useKey;if(o&&!0!==n[o])return}e._mouseDown=!1},this._startDrag=function(n){e._originAutoscroll=t.config.autoscroll,t.config.autoscroll=!1,t.$root.classList.add("gantt_noselect"),e._originalReadonly=t.config.readonly,t.config.readonly=!0,e._trace=[],e._mouseDown=!0;var o=e._getScrollPosition(e._timeline),r=o.x,i=o.y;e._scrollState={x:r,y:i},e._startPoint={x:n.clientX,y:n.clientY},e._trace.push(e._startPoint)},this._domEvents=t._createDomEventScope(),this._trace=[]}return e.create=function(){return new e},e.prototype.destructor=function(){this._domEvents.detachAll()},e.prototype.attach=function(e){var n=this;this._timeline=e,this._domEvents.attach(e.$task,"mousedown",function(e){if(t.config.drag_timeline){var o=t.config.drag_timeline,r=o.useKey,i=o.ignore;if(!1!==o.enabled){var a=".gantt_task_line, .gantt_task_link";void 0!==i&&(a=i instanceof Array?i.join(", "):i),a&&t.utils.dom.closest(e.target,a)||r&&!0!==e[r]||n._startDrag(e)}}}),this._domEvents.attach(document,"keydown",function(e){if(t.config.drag_timeline){var o=t.config.drag_timeline.useKey;o&&!0===e[o]&&n._applyDndReadyStyles()}}),this._domEvents.attach(document,"keyup",function(e){if(t.config.drag_timeline){var o=t.config.drag_timeline.useKey;o&&!1===e[o]&&(n._clearDndReadyStyles(),n._stopDrag(e))}}),this._domEvents.attach(document,"mouseup",function(t){n._stopDrag(t)}),this._domEvents.attach(t.$root,"mouseup",function(t){n._stopDrag(t)}),this._domEvents.attach(document,"mouseleave",function(t){n._stopDrag(t)}),this._domEvents.attach(t.$root,"mouseleave",function(t){n._stopDrag(t)}),this._domEvents.attach(t.$root,"mousemove",function(o){if(t.config.drag_timeline){var r=t.config.drag_timeline.useKey;if((!r||!0===o[r])&&!0===n._mouseDown){n._trace.push({x:o.clientX,y:o.clientY});var i=n._countNewScrollPosition({x:o.clientX,y:o.clientY});n._setScrollPosition(e,i),n._scrollState=i,n._startPoint={x:o.clientX,y:o.clientY}}}})},e}();n.EventsManager=i},233:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=o(232);t.ext||(t.ext={}),t.ext.dragTimeline={create:function(){return r.EventsManager.create()}},t.config.drag_timeline={enabled:!0}}})})});