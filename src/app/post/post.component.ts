import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GraceComponent } from '../feed/grace/grace.component';
import { Grace, GraceForm, Opening } from '../grace';
import { GracenoteApiService } from '../gracenote-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  graceForm = GraceForm.DEFAULT_GRACE_FORM; //set with the default graceForm

  openings:Opening[];

  constructor(private graceNoteApi:GracenoteApiService){ 
  
  }

  ngOnInit(): void {
    this.graceNoteApi.getOpenings().subscribe(
      (data: Opening[]) => this.openings = data
    );
  }

  createGrace(): void {
    console.log("entered create grace");
    //TODO: add another card to the feed component

    //get value from gracenote API
    let grace:Grace; 
    
    this.graceNoteApi.postGrace(this.graceForm).subscribe(
      (data: Grace) => {
        // TODO: success, use some sort of modal instead of alert
        // also create a fail implementation while at it
        alert("Success! " + environment.apiDomain 
        + "/10001"
        + "/graces"
        + "/" + data.id);

        // set data to new GraceComponent. something like:
        // let graceComponent = new GraceComponent();
        // graceComponent.grace = data;
        
        // then add to top of FeedComponent, like this:
        // getFeedComponent().addGrace(graceComponent);//or data

        window.location.reload();//reload for now
      }
    );
  }

}
