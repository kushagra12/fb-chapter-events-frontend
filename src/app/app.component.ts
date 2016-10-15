import { Component, OnInit} from '@angular/core';
import {EventService} from './event/event.service';
import {IEvent} from './shared/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  events: IEvent[] = [];

  constructor(private _eventService: EventService){}

  ngOnInit() {
    this._eventService.getClubEvents().subscribe((data: IEvent[]) => this.events = data);
  }

}
