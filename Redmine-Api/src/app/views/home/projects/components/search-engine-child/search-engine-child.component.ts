import { SearchEngine } from './../../../../../_models/search-engine/SearchEngine';
import { SelectItem } from 'ng2-select';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ManagerSearch } from '../../../../../_models/search-engine/ManagerSreach';

@Component({
  selector: 'app-search-engine-child',
  templateUrl: './search-engine-child.component.html',
  styleUrls: ['./search-engine-child.component.css']
})
export class SearchEngineChildComponent implements OnInit {
  manager: ManagerSearch = new ManagerSearch() ;
  searchEngine: SearchEngine = new SearchEngine();
  value: any ;
  optionChild: any ;
  optionChildItem =  [] ;
  optionStatus: number;
  @Input() rootItem: SelectItem ;
  @Output() eventAddChildSearch: EventEmitter<SearchEngine> = new EventEmitter<SearchEngine>();
  constructor() { }
  ngOnInit() {
    this.searchEngine.root = {id: this.rootItem.id, text: this.rootItem.text};
    this.optionChild  =  this.manager.getChild(this.rootItem.id);
  }
  public callBackAddChild() {
    this.eventAddChildSearch.emit(this.searchEngine);
  }
  public optionChildItemSelected(value: any): void {
    this.searchEngine.childrens.push({id: value.id, text: value.text});
    this.callBackAddChild();
  }
  public optionChildItemRemoved(value: any): void {
    this.searchEngine.childrens.forEach( (item, index) => {
      if ( item.id === value.id ) {this.searchEngine.childrens.splice(index, 1); }
    });
    this.callBackAddChild();
  }
  public optionChildItemRefreshValue(value: any): void {
    this.value = value;
  }
  public optionChildSelected(value: any): void {
    this.searchEngine.child = {id: value.id, text: value.text};
    const result =  this.manager.checkView(this.searchEngine);
    this.optionChildItem =  result.data;
    this.optionStatus = result.status;
    console.log(this.optionStatus);
    this.callBackAddChild();
  }
  public optionChildRemoved(value: any): void {
    this.searchEngine.child = null;
    this.callBackAddChild();
  }
  public optionChildRefreshValue(value: any): void {
    this.value = value;
  }
  searchChangeText(text: string) {
    this.searchEngine.childrens = [];
    this.searchEngine.childrens.push({id: 'text', text: text});
    this.callBackAddChild();
  }
  changeDate(date: string) {
    this.searchEngine.childrens = [];
    this.searchEngine.childrens.push({id: 'text', text: date});
    this.callBackAddChild();
  }
  changeDateBetweenFist(date: string) {
    this.searchEngine.childrens[0] = {id: 'text', text: date} ;
    this.callBackAddChild();
  }
  changeDateBetweenLast(date: string) {
    this.searchEngine.childrens[1] = {id: 'text', text: date} ;
    this.callBackAddChild();
  }
}
