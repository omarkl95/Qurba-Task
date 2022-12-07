import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchText: any, searchKey:string): any {
    if(searchText == undefined) {
      return value
    }else {
      return value.filter(function (val) {
        return val[searchKey].toLowerCase().includes(searchText.toLowerCase());
      });
    }
  }

}
