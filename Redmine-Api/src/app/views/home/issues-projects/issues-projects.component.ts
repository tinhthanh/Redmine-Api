import { ManagerSearch } from './../../../_models/search-engine/ManagerSreach';
import { issues } from './../../../_helpers/mocktest/fake-data/fake-issues';
import { fakeProjects} from './../../../_helpers/mocktest/fake-data/fake-projects';
import { Component, OnInit, HostListener } from '@angular/core';
import { SelectItem } from 'ng2-select';
@Component({
  selector: 'app-issues-projects',
  templateUrl: './issues-projects.component.html',
  styleUrls: ['./issues-projects.component.css']
})
export class IssuesProjectsComponent implements OnInit {
  public itemsSelect: SelectItem[] = [];
  public items = new ManagerSearch().items ;
 value: any = ['Athens'];
 _disabledV  = '0';
 disabled = false;
  isShowListSelect = false;
  searchName  = 'HUynh tinh thanh';
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 999) {
      this.isShowListSelect = false;
    }
  }
  constructor() {
    // this.items = new AdapterSearch(this.dataSearch).convert();
    console.log(issues);
    console.log(fakeProjects);
    const d = new Date('2018-03-25T12:04:45Z');
    console.log(d.getUTCHours()); // Hours
    console.log(d.getUTCMinutes());
    console.log(d.getUTCSeconds());
   }

  ngOnInit() {
  }
  twoWayBidingInput($event) {
    console.log($event);
  }
  callBackSearch($event) {
    console.log($event);
  }
  viewProjectsSelect() {
    this.isShowListSelect = false;
  }
  viewProjects() {
    this.isShowListSelect = true;
  }

public selected(value: any): void {
  console.log('Selected value is: ', value);
  this.itemsSelect.push(value);
  console.log(this.itemsSelect);
}

public removed(value: any): void {
  console.log('Removed value is: ', value);
  const index = this.itemsSelect.indexOf(value, 0);
  if (index > -1) {
     this.itemsSelect.splice(index, 1);
  }
  console.log(this.itemsSelect);
}

public refreshValue(value: any): void {
  this.value = value;
}

public itemsToString(value: Array<any> = []): string {
  // console.log(value);
  return value
    .map((item: any) => {
      return item.text;
    }).join(',');
}
callBackListSearch($event) {
  console.log($event);
}
}
