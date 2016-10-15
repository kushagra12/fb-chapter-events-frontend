import { Component, OnInit, Input } from '@angular/core';
import {IEvent} from '../shared/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input()
  event: IEvent;
  
  constructor() { }

  ngOnInit() {
  }

}
