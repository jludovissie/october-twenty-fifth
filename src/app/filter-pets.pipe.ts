import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPets'
})
export class FilterPetsPipe implements PipeTransform {

  transform(value: any, filteredList: string ): any {
    for (startsWith(filteredList)) {
    }
    return value;
    }
}
