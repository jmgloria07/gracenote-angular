import { Component, Input, OnInit } from '@angular/core';
import { Grace } from '../grace';

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

  trackGrace(index:number, grace:Grace) {
    return grace ? grace.id : undefined;
  } 

}
