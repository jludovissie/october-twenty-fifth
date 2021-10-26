import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.css']
})
export class Exercise4Component implements OnInit {
  loremSentence: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  constructor() { }

  ngOnInit(): void {
  }

}
