import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';
import { GracenoteApiService } from '../gracenote-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  mOpenings:any;

  mFormGroup = new FormGroup({
    "displayText": new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    "opening": new FormControl('', [
      Validators.required
    ])
  });

  constructor(private graceNoteApi:GracenoteApiService){ 
  
  }

  ngOnInit(): void {
    this.graceNoteApi.getOpenings().subscribe(data => this.mOpenings = data);
  }

  createGrace(): void {
    console.log("entered create grace");
    this.graceNoteApi.postGrace(this.mFormGroup.value);
  }

}
