import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { agifyProp, Contact, User } from './shared.model';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  /* 
  This application will only have 1 service that i will use to provide the Contact lists Data, Agify data, and About Me details data to all the components (About, Contact) accross the application.
  

  
  */

  /* Agify URL End point */
  agifyUrl: string = "https://api.agify.io/?name=";

  constructor(private _http: HttpClient) { }

/* Method that accept first name as a parameter and returns an object consisting of age and other properties */
  getUserAge(name: string | undefined) {
  return  this._http.get<agifyProp>(this.agifyUrl+name);
  }
/* This method gets its data from a Contact.json file that I found on the Git repository 

  The method is using HTTP Client to get data from the file instead.
*/
  getAllContacts() {
    return  this._http.get<Contact[]>('../../assets/contacts.json');
  }

  /* This method is sending data to the About Me component. The method returns an observable (of). and what do we do with observables? We subscribe to it....So fun. */
  getUser() {
    const user: User = {
      FullName: 'Khuthadzo Muenda', 
      EmailAddress: 'muendakhuthadzo@gmail.com'
    };

    return of(user);
  }

  
}
