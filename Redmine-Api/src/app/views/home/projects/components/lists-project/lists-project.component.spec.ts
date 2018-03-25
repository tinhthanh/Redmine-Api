import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsProjectComponent } from './lists-project.component';

describe('ListsProjectComponent', () => {
  let component: ListsProjectComponent;
  let fixture: ComponentFixture<ListsProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
