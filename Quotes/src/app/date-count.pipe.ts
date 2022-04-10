import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(dateInput: any){

let seconds:any = Math.floor((new Date() as any - dateInput)/1000)


let interval=Math.floor(seconds/31536000)
if(interval>1){
 return interval +' year'

}

interval= Math.floor(seconds/2592000)
if(interval>1){
  return interval +' month'
 };

interval= Math.floor(seconds/86480)
 if(interval>1){
   return interval +' days'
  }  

interval= Math.floor(seconds/3600)
  if(interval>1){
    return interval +' hours'
   }

interval= Math.floor(seconds/60)
   if(interval>1){
     return interval +' minutes'
    }else
    {
      return Math.floor(seconds) +' seconds'
    }
  }

}
