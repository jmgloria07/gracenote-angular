import { Component, Input, OnInit } from '@angular/core';
import { Grace, Opening } from './grace';
import { GracenoteApiService } from './gracenote-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gracenote';
  openings: Opening[];
  graces: Grace[];
  
  constructor(private graceNoteApi:GracenoteApiService) {

  }

  ngOnInit () {
    this.graceNoteApi.getOpenings().subscribe(
      (data: Opening[]) => this.openings = data
    );
    this.graceNoteApi.getGraces().subscribe(
      (data: Grace[]) => this.graces = data
    );
  }
  
}
