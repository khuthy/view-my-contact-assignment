import { Contact } from './../../shared/shared.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { combineLatest, map, Observable, startWith, withLatestFrom } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {



  @Input() contactList!: Contact[];
  @Input() selectedContact: Contact = {} as Contact;

  filter!: string;

  

  @Output() getContactDetails: EventEmitter<any> = new EventEmitter<any>();
  @Output() openModal:  EventEmitter<Contact> = new EventEmitter<Contact>();
  @Output() allowSearch:  EventEmitter<Contact> = new EventEmitter<Contact>();
  constructor() {
   }

  ngOnInit(): void {
   
  }



}
