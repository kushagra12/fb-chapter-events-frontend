import { Injectable } from '@angular/core';
import {IEvent} from '../shared/event';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class EventService {

  private url: string = 'http://localhost:3000/api';

  constructor(private _http: Http) { }

  getClubEvents(): Observable<IEvent[]> {
    return this._http.get(this.url)
    .map((resp: Response) => resp.json())
    .catch(this.handleError);
  }
  handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
  }

}
