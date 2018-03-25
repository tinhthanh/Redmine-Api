
import { DataIssues } from './../../../_helpers/mocktest/redmine/DataIssues';
import { Task } from './../../../_models/Report';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  today: Task[] = [] ;
  tomorrow: Task[] = [];
  dataIssues: any[] = new DataIssues().data;
  constructor() {
    console.log(this.dataIssues);
    this.today = this.convertIssuesToTask();
    this.tomorrow = this.convertIssuesToTask();
  }
  public convertIssuesToTask(): Task[] {
     const result: Task[] = [] ;
     this.dataIssues.forEach(element => {
       const temp = new Task();
       temp.taskName = element.subject;
       console.log(element.category);
       temp.description = element.description;
       temp.targetDate = element.created_on;
       temp.status = true ;
       temp.remark = '';
       result.push(temp);
     });
     return result;
  }
  ngOnInit() {
  }

}
