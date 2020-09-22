import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Grace, Opening, GraceForm } from './grace';
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
    this.loadFeed();
    this.loadPostOpenings();
  }

  loadPostOpenings() : void {
    this.graceNoteApi.getOpenings().subscribe(
      (data: Opening[]) => this.openings = data
    );
  }

  loadFeed(): void {
    this.graceNoteApi.getGraces().subscribe(
      (data: Grace[]) => this.graces = data
    );
  }

  createGrace(graceForm:GraceForm) {
    let grace:Grace; 
    
    this.graceNoteApi.postGrace(graceForm).subscribe(
      (data: Grace) => {
        // TODO: success, use some sort of modal instead of alert
        // also create a fail implementation while at it
        alert("Success! " + environment.apiDomain 
        + GracenoteApiService.SINGLE_GRACE_REL
          .replace(GracenoteApiService.USER_PARAM, GracenoteApiService.DEFAULT_USER)
          .replace(GracenoteApiService.GRACE_PARAM, data.id.toString()));

        // add grace to grace list to update feed
        this.graces.unshift(data);
      }
    );
  }
  
}
