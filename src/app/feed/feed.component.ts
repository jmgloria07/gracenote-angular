import { Component, Input, OnInit } from '@angular/core';
import { Grace, GraceForm } from '../grace';
import { GracenoteApiService } from '../gracenote-api.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  @Input() graces:Grace[];

  constructor(){ 
  }

  ngOnInit() : void {
    
  }

}
