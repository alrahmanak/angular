import { Injectable } from '@angular/core';
import { GanttTask } from '../models/gantttask';

@Injectable({
  providedIn: 'root'
})
export class GantttaskService {

  get(): Promise<any[]>{
    return Promise.resolve([
      {id: 1, rigCd: "ABCD-1",start_date: "03/01/2017",render:'split',parent:0},
      {id: 2, rigCd: "HMYY-4",start_date: "04/21/2017",render:'split',parent:0},
      {id: 3, rigCd: "FEFE-14",start_date: "05/24/2017",render:'split',parent:0},
      {id: 14, rigCd: "ABCD-2",start_date: "05/24/2017",render:'split',parent:0},
      {id: 15, rigCd: "ABCD-3",start_date: "05/24/2017",render:'split',parent:0},
      {id: 16, rigCd: "ABCD-4",start_date: "05/24/2017",render:'split',parent:0},
      {id: 17, rigCd: "ABCD-5",start_date: "05/24/2017",render:'split',parent:0},
      {id: 18, rigCd: "ABCD-6",start_date: "05/24/2017",render:'split',parent:0},
      {id: 19, rigCd: "ABCD-7",start_date: "05/24/2017",render:'split',parent:0},
      {id: 20, rigCd: "ABCD-8",start_date: "05/24/2017",render:'split',parent:0},
      {id: 21, rigCd: "ABCD-9",start_date: "05/24/2017",render:'split',parent:0},
      {id: 22, rigCd: "ABCD-10",start_date: "05/24/2017",render:'split',parent:0},
      {id: 23, rigCd: "ABCD-11",start_date: "05/24/2017",render:'split',parent:0},
      {id: 24, rigCd: "ABCD-12",start_date: "05/24/2017",render:'split',parent:0},


        {id: 4, rigCd: "ABCD-1",parent:1,well_name:'SOM-2', start_date: "03/01/2017", end_date: "03/04/2017", duration: 1, progress: '0.6',waterSupply1Name:'WSWS-1',waterSupply2Name:'WSWS-1',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 5, rigCd: "HMYY-4",parent:2,well_name:'ZZZ-33', start_date: "03/01/2018", end_date: "06/30/2018", duration: 1, progress: '0.4',waterSupply1Name:'WSWS-1',waterSupply2Name:'WSWS-1',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 6, rigCd: "ABCD-1",parent:1,well_name:'DDW-4', start_date: "03/06/2017", end_date: "03/10/2017", duration: 1, progress: '0.6',waterSupply1Name:'WSWS-1',waterSupply2Name:'WSWS-1',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 7, rigCd: "HMYY-4",parent:2,well_name:'ZZE-8', start_date: "08/01/2018", end_date: "10/31/2018", duration: 1, progress: '0.4',waterSupply1Name:'',waterSupply2Name:'',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 8, rigCd: "FEFE-14",parent:3,well_name:'WSW-45', start_date: "09/01/2017", end_date: "03/31/2018", duration: 1, progress: '0.6',waterSupply1Name:'WSWS-1',waterSupply2Name:null,waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 9, rigCd: "FEFE-14",parent:3,well_name:'ABBG-4', start_date: "01/01/2017", end_date: "07/31/2017", duration: 1, progress: '0.4',waterSupply1Name:'WSWS-1',waterSupply2Name:null,waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 10, rigCd: "ABCD-1",parent:1,well_name:'GRGR-2', start_date: "03/12/2017", end_date: "03/17/2017", duration: 1, progress: '0.6',waterSupply1Name:null,waterSupply2Name:null,waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 11, rigCd: "HMYY-4",parent:2,well_name:'DFDF-53', start_date: "11/01/2017", end_date: "01/31/2018", duration: 1, progress: '0.4',waterSupply1Name:'WSWS-1',waterSupply2Name:null,waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 12, rigCd: "ABCD-1",parent:1,well_name:'SOM-14', start_date: "03/22/2017", end_date: "03/31/2017", duration: 1, progress: '0.6',waterSupply1Name:null,waterSupply2Name:null,waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 13, rigCd: "HMYY-4",parent:2,well_name:'ZZR-36', start_date: "02/01/2017", end_date: "08/31/2017", duration: 1, progress: '0.4',waterSupply1Name:null,waterSupply2Name:'WSWS-1',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 100, rigCd: "HMYY-6",parent:19,well_name:'ZZR-37', start_date: "02/01/2017", end_date: "08/31/2017", duration: 1, progress: '0.4',waterSupply1Name:null,waterSupply2Name:'WSWS-1',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 101, rigCd: "HMYY-7",parent:20,well_name:'ZZR-38', start_date: "02/01/2017", end_date: "08/31/2017", duration: 1, progress: '0.4',waterSupply1Name:null,waterSupply2Name:'WSWS-1',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 103, rigCd: "HMYY-8",parent:21,well_name:'ZZR-40', start_date: "02/01/2017", end_date: "08/31/2017", duration: 1, progress: '0.4',waterSupply1Name:null,waterSupply2Name:'WSWS-1',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 104, rigCd: "HMYY-9",parent:22,well_name:'ZZR-41', start_date: "02/01/2017", end_date: "08/31/2017", duration: 1, progress: '0.4',waterSupply1Name:null,waterSupply2Name:'WSWS-1',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 105, rigCd: "HMYY-10",parent:23,well_name:'ZZR-42', start_date: "02/01/2017", end_date: "08/31/2017", duration: 1, progress: '0.4',waterSupply1Name:null,waterSupply2Name:'WSWS-1',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 106, rigCd: "HMYY-11",parent:24,well_name:'ZZR-43', start_date: "02/01/2017", end_date: "08/31/2017", duration: 1, progress: '0.4',waterSupply1Name:null,waterSupply2Name:'WSWS-1',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''},
        {id: 102, rigCd: "HMYY-8",parent:18,well_name:'ZZR-39', start_date: "02/01/2017", end_date: "08/31/2017", duration: 1, progress: '0.4',waterSupply1Name:null,waterSupply2Name:'WSWS-1',waterSupply1Status:'',waterSupply2Status:'',color:'',textColor:''}

    ]);
}

}
