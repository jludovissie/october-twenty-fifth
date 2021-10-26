import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mylowercasepipe'
})
export class MylowercasepipePipe implements PipeTransform {

  transform(value: any){
    return value.toLowerCase();
  }

}
