import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {TaskService} from "../service/task.service";
import {LinkService} from "../service/link.service";

import "dhtmlx-gantt";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'gantt',
    styleUrls: ['./gantt.component.css'],
    providers: [TaskService, LinkService],
    template: `<div #gantt_here class='gantt-chart'></div>`,
})

export class GanttComponent implements OnInit {
    @ViewChild("gantt_here") ganttContainer: ElementRef;

    ngOnInit(){
        gantt.init(this.ganttContainer.nativeElement);
    }
}