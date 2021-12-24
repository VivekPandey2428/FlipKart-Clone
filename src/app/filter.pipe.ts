import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(value: any, searchText: string): any[] {
    if (value.length===0||searchText==='') {
      return value;
    }
    searchText = searchText.toLocaleLowerCase();
    const users=[];
    for(const user of value){
        if(user['Model'].toString().toLocaleLowerCase().includes(searchText)){
            users.push(user);
        }
    }
    return users;
  }
}