import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from '../shared/shared.model';
import { SharedService } from '../shared/shared.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
/* List of all contact from json file */
  contactList!: Contact[];

  
  /* Stores the details of viewed contact on the left */
  contactDetails: Contact = {} as Contact;
  selectedContact: Contact = {} as Contact;


private contactListEventSubscription!: Subscription;
private agifyEventSubscription!: Subscription;

  data: boolean = false;
  loader: boolean = false;

  constructor(private sharedService: SharedService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contactListEventSubscription = this.sharedService.getAllContacts().subscribe(result => {
     this.contactList =  result;
   })
  
  }

 
/* 

This function populate data in the right part of the contact manager screen page. Before populating, I integrate the AGIFY API to get person Age and send contact details to be displayed. 

*/
  getContactDetails(contactDetails: Contact) {
    this.loader = true;
    this.selectedContact = contactDetails;
    let name: string | undefined = contactDetails.firstName;
    this.sharedService.getUserAge(name).subscribe(result => {
      this.data = true;
      this.contactDetails = contactDetails;
      this.contactDetails.age = result.age;
      this.loader = false;
    })
 
  }
 
  /* 
  
  This function opens a modal Dialog on its Component called "contact-form.html"
  
  */

  openDialog() {
    const dialogRef =  this.dialog.open(ContactFormComponent, {
      minWidth: '60%',
      minHeight: '90%',
      maxWidth: '100%',
      maxHeight: '100%',
      disableClose: true
    });

  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      
        if(result.role == 'cancel') {
          return;
        }
          /* Inserting Contacts details in array at position index 0 */
        this.contactList.splice(0 ,0 ,result.data);
    });
  }



  ngOnDestroy() {
    this.contactListEventSubscription.unsubscribe();
  
    }


}
