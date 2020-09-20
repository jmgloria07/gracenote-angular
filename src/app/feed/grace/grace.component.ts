import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Grace } from '../../grace';
import { GracenoteApiService } from '../../gracenote-api.service'

@Component({
  selector: 'app-grace',
  templateUrl: './grace.component.html',
  styleUrls: ['./grace.component.scss']
})
export class GraceComponent implements OnInit {

  constructor() { //private _id?: number, private _grace?: Grace) {
  
  }

  ngOnInit(): void {
    // this.graceNoteApi.getSingleGrace(this.id)
    //   //.subscribe(data => this.grace = data)
    //   ;
  }

  // get id() {
  //   return this._id;
  // }

  // set id(value) {
  //   this._id = value;
  // }

  // public get grace(): Grace {
  //   return this._grace;
  // }
  // public set grace(value: Grace) {
  //   this._grace = value;
  // }

}
