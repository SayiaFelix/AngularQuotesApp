import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-up-vote-down-vote',
  templateUrl: './up-vote-down-vote.component.html',
  styleUrls: ['./up-vote-down-vote.component.css']
})
export class UpVoteDownVoteComponent implements OnInit {
 
  numberOfUpvotesAndDownVotes: number = 0;

  upVoteButtonClick() {
    this.numberOfUpvotesAndDownVotes++;
    if(Quotes.upVote>0){


    }
  }
  downVoteButtonClick(){
    this.numberOfUpvotesAndDownVotes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
