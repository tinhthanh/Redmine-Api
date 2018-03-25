import { Component, OnInit, HostListener } from '@angular/core';
import { fakeProjects } from './../../../_helpers/mocktest/fake-data/fake-projects';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isShowListSelect = false ;
  public dataFake = [...fakeProjects];
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 999) {
     this.isShowListSelect = false;
    }
  }

  constructor() { }

  ngOnInit() {
    console.log(this.dataFake);
  }
  viewProjectsSelect() {
  this.isShowListSelect = false ;
  }
  viewProjects() {
  this.isShowListSelect = true;
  }
}
