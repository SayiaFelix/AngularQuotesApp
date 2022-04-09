import { Data } from "@angular/router"

export class Quotes {
    upVote:number
    downVote:number
    name:string
    author:string
    detail:string
    date:Date

    constructor( upVote: number,downVote: number,name: string,author:string,detail:string,date:Date){
      this.upVote=upVote
      this.downVote=downVote
      this.name=name
      this.author=author
      this.detail=detail
      this.date=date
    }

}
