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
    opts: any;
    @ViewChild("gantt_here", {static: true}) ganttContainer: ElementRef;


    constructor(private taskService: TaskService, private linkService: LinkService){}

    ngOnInit(){
        gantt.config.xml_date = "%Y-%m-%d %H:%i";

        gantt.init(this.ganttContainer.nativeElement);

        Promise.all([this.taskService.get(), this.linkService.get()])
            .then(([data, links]) => {
                gantt.parse({data, links});
            });
    }
}