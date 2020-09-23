import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GraceForm, Opening } from '../grace';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  graceForm = GraceForm.DEFAULT_GRACE_FORM; //set with the default graceForm

  @Input() openings:Opening[];

  @Output() submit = new EventEmitter();

  constructor(){ 
  
  }

  ngOnInit(): void {
    
  }

  createGrace(): void {
    this.submit.emit(this.graceForm);
  }

}
