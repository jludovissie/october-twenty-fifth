import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent implements OnInit {
  wallet: number= 50.04;
  constructor() { }

  ngOnInit(): void {
  }

}
