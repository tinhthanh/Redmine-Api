import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-lists-project',
  templateUrl: './lists-project.component.html',
  styleUrls: ['./lists-project.component.css']
})
export class ListsProjectComponent implements OnInit {
 @Input() projectList: any[];
 dataView: any[];
  constructor() {
  }
  ngOnInit() {
    const date = new Date('2018-03-21T06:59:27Z');
    console.log(date);
    console.log(date.getDay());
    const local = new Date();
    console.log(local);
    console.log(local.getDate());
    console.log(local.getDay());
    console.log(local.getFullYear());
    console.log(local.getHours());
    console.log(local.getMonth());
    console.log(this.projectList);

    const array =
    [{ group: '2018-03-21T07:02:53Z', color: "red" },
     { group: 'two', color: "blue" },
     { group: '2018-03-21T07:02:53Z', color: "green" },
     { group: '2018-03-21T07:02:53Z', color: "black" },
     { group: '2018-03-21T07:02:53Z', color: "red1" }],
    groups = Object.create(null),
    grouped = [];

array.forEach(function (o) {
    if (!groups[o.group]) {
        groups[o.group] = [];
        grouped.push({ group: o.group, color: groups[o.group] });
    }
    groups[o.group].push(o.color);
});

console.log(grouped);
  }
  public handlingData(data: any[] ) {

  }
}
