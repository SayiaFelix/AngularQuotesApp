
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
    new Quotes(1,0,'No man is an Island' ),
    new Quotes(2,0,'Enjoy life when you still young'),
    new Quotes(3,0,'Learn untill you earn'),
   
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
