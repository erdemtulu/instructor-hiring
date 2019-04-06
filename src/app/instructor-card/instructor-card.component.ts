import { Component, OnInit, Input } from '@angular/core';
import { Instructor } from '../models/instructor';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.css']
})
export class InstructorCardComponent implements OnInit {

  constructor() { }

  @Input()
  private instructor: Instructor;
  ngOnInit() {

  }

}
