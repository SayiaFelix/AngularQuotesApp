export class Quotes {
    upVote:number | undefined;
    downVote:number | undefined
    name:string| undefined
    detail:string | undefined

    constructor( upVote: number,downVote: number,name: string,detail:string){
      this.upVote=upVote
      this.downVote=downVote
      this.name=name
      this.detail=detail
    }

}
