import { Project } from './../../../_models/redmine-api/Project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }
  public getAllProject(): Observable<Project[]> {
    const url = 'http://localhost:8080/api/project' ;
    return this.http.get<Project[]>(url);
}
}
