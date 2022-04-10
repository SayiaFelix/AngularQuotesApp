// import { Data} from "@angular/router"

export class Quotes {
    id:number;
    upVote:number;
    downVote:number;
    name:string;
    author:string;
    detail:string;
    date:Date;
    showDetail: boolean;
  static upVote: any;

    constructor( id:number,upVote: number,downVote: number,name: string,author:string,detail:string,date:Date,){
      this.id=id
      this.upVote=upVote
      this.downVote=downVote
      this.name=name
      this.author=author
      this.detail=detail
      this.date=date 
      this.showDetail=false;
    }

}
