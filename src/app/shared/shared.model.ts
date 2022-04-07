/* 

These are all the interfaces used across the whole application.

All in one place.
*/

/* For contact details */
export interface Contact {
    firstName: string;
    lastName?: string;
    email?:string;
    cellNumber?: string;
    address?: string;
    age?: number;
    bio?: string;
}

 /* For about Me page */
export interface User {
    FullName?: string;
    EmailAddress?: string;
}
/* For Agify API, Not necessary but I like structured requests (GET, POST, PUT, PATCH and more) */
export interface agifyProp {
    name?: string;
    age?: number;
    count?: number;
}


