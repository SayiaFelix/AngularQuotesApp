export class Quotes {
    upVote:number
    downVote:number
    name:string
    detail:string

    constructor( upVote: number,downVote: number,name: string,detail:string){
      this.upVote=upVote
      this.downVote=downVote
      this.name=name
      this.detail=detail
    }

}
