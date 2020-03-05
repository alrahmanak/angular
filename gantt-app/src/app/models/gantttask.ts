export class GanttLink {
    id: number;
    source: number;
    target: number;
    type: string;
  }
  
  export interface GanttTask {
  
    text: string | null;
    label?: string | null;
    start_date: any;
    end_date?: any | null;
    duration: number | null;
    id: any | null;
    progress?: string | null;
    readonly?: boolean | null;
    waterSupply1Name:string | null;
    waterSupply2Name:string | null;
    waterSupply1Status:string | null;
    waterSupply2Status:string | null;
    color:string| null;
    textColor:string| null;
    render:string|null;
    parent:number|null;
  
    // "task" - a regular task (default value).
    // "project" - a task that starts, when its earliest child task starts, and ends, when its latest child ends. The start_date, end_date, duration properties are ignored for such tasks.
    // "milestone" - a zero-duration task that is used to mark out important dates of the project. The duration, progress, end_date properties are ignored for such tasks.
  
  }