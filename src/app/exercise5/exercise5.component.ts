import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise5',
  templateUrl: './exercise5.component.html',
  styleUrls: ['./exercise5.component.css']
})
export class Exercise5Component implements OnInit {
  filterResults: string= "" ;

  petThoughts: string[] = [
  'Cats are awesome', 'Cats are sneaky', 'Cats and dogs are both amazing!', 'Dogs are great', 'Dogs are hyper' ]
  constructor() { }

  ngOnInit(): void {
  }

}
