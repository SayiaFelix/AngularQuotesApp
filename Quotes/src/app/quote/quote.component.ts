
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
    new Quotes(5,0,'No man is an Island','Find an online version and watch merlin find his son' ),
    new Quotes(1,0,'Enjoy life when you still young','Find an online version and watch merlin find his son'),
    new Quotes(0,0,'Learn untill you earn','Find an online version and watch merlin find his son'),
   
  ];

  quote:Quotes | undefined 

      deleteQuote(isComplete: any, index: number){
         let toDelete = confirm(`Do you want to delete ${this.quotes[index].name}???`)
         if (toDelete) {
         this.quotes.splice(index,1);
       }
  }   
  addNewQuote(quote: any){
    this.quotes.push(quote)
  }

  array: number[]=this.quotes.map(quote=> quote.upVote)
  highest=Math.max(...this.array)

  constructor() { }

  ngOnInit(): void {
  }

}
