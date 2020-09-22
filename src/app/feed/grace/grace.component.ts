import { Component, Input } from '@angular/core';
import { Grace } from '../../grace';

@Component({
  selector: 'app-grace',
  templateUrl: './grace.component.html',
  styleUrls: ['./grace.component.scss']
})
export class GraceComponent {

  @Input() grace:Grace;


}
