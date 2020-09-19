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

  constructor(private graceNoteApi:GracenoteApiService){ 
  }

  ngOnInit(): void {
    this.graceNoteApi.getOpenings().subscribe(data => this.mOpenings = data);
  }

}
