export class Quotes {
    upVote:number | undefined;
    downVote:number | undefined
    name:string| undefined
    description:string

    constructor( upVote: number,downVote: number,name: string,description:string){
      this.upVote=upVote
      this.downVote=downVote
      this.name=name
      this.description=description
    }

}
