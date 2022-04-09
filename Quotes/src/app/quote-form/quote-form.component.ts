import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

 newQuotes = new Quotes(0,0,"","","",new Date());

@Output() addQuote = new EventEmitter<Quotes>();

  submitQuote():void{
  this.addQuote.emit(this.newQuotes);
  }

  constructor() {}
  ngOnInit(): void {
  }

}
