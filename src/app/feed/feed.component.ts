import { Component, OnInit } from '@angular/core';
import { Grace, GraceForm } from '../grace';
import { GracenoteApiService } from '../gracenote-api.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  graces:Grace[];

  constructor(private graceNoteApi:GracenoteApiService){ 
  }

  ngOnInit() : void {
    this.graceNoteApi.getGraces().subscribe(
      (data: Grace[]) => this.graces = data
    );
  }

}
