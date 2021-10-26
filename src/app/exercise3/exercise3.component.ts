import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {
sentence: string = "I went to go watch Spiderman movie with my aunt May." ;

  constructor() { }

  ngOnInit(): void {
  }

}
