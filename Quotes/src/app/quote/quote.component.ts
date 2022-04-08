
// import { Quote } from '@angular/compiler';
// import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


 quotes: Quotes[] = [
    new Quotes(0,0,'No man is an Island','Find an online version and watch merlin find his son' ),
    new Quotes(0,0,'Enjoy life when you still young','Find an online version and watch merlin find his son'),
    new Quotes(0,0,'Learn untill you earn','Find an online version and watch merlin find his son'),
   
  ];

  quote:Quotes | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
