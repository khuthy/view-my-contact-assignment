import { Pipe, PipeTransform } from '@angular/core';
/* 
This pipe is for filtering the Contacts on the list

  It filters by :
                  -First 
                  -Last Name
                  -Cell Phone Number
*/
@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
 /* The search filter can search using first name, last name, and cell phone number */
    transform(items: any[], field: string, field2: string, field3: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value || !field2 || !field3) {
      return items;
    }

    return items.filter((singleItem) =>
      singleItem[field].toLowerCase().includes(value.toLowerCase()) || singleItem[field2].toLowerCase().includes(value.toLowerCase())  || singleItem[field3].toLowerCase().includes(value.toLowerCase()) 
    );
  }

}