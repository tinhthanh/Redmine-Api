import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isShowListSelect = false ;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 999) {
     this.isShowListSelect = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }
  viewProjectsSelect() {
  this.isShowListSelect = false ;
  }
  viewProjects() {
  this.isShowListSelect = true;
  }
}
