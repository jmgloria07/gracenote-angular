import { Component, Input } from '@angular/core';
import { Grace } from '../../../model/grace';

@Component({
  selector: 'app-grace',
  templateUrl: './grace.component.html',
  styleUrls: ['./grace.component.scss']
})
export class GraceComponent {
  // the following field renders a no-graces card
  // whether grace object field is truthy or not
  // there must be a better implementation here
  // but I'm hungry and can't think
  @Input('blank') isBlank:boolean; 
  
  
  @Input() grace:Grace;

}
