import { Component, OnInit } from '@angular/core';
import { GracenoteApiService } from '../gracenote-api.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  mGraces:any;

  constructor(private graceNoteApi:GracenoteApiService){ 
  }

  ngOnInit() : void {
    this.graceNoteApi.getGraces().subscribe(data => this.mGraces = data);
  }

}
