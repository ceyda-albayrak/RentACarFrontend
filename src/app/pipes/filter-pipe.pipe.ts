import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car'

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filtertText: string): Car[] {
    filtertText = filtertText?filtertText.toLocaleLowerCase():""
    //==-1 eğer varsa demek
    return filtertText?value.filter((p:Car)=>p.carName.toLocaleLowerCase().indexOf(filtertText)!==-1):value;
  }

}
