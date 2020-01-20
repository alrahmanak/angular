export interface Video {
    title:string;
    author:string;
    id:string;
    viewDetails : VideoDetail[];
}

interface VideoDetail {
    age: number;
    region : string;
    date: string;
}