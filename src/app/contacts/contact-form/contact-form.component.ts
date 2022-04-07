import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

   contactForm!: FormGroup;

   addedContact: Contact = {} as Contact;

   submitted = false;

  constructor(private _fb: FormBuilder, public dialogRef: MatDialogRef<ContactFormComponent>) { }

  ngOnInit(): void {
    this.contactForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      cellNumber: [0, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^-?(0|[0-9]\d*)?$/)]],
      address: ['', [Validators.required, Validators.maxLength(255)]],
      biography: ['', [Validators.required, Validators.maxLength(255)]],
    })
  }

  get field(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.addedContact.firstName = this.field['firstName'].value;
    this.addedContact.lastName = this.field['lastName'].value;
    this.addedContact.email = this.field['email'].value;
    this.addedContact.cellNumber = this.field['cellNumber'].value;
    this.addedContact.address = this.field['address'].value;
    this.addedContact.bio = this.field['biography'].value;
    this.closeDialog({role: 'saved new contact', data: this.addedContact});
    
  }

  onReset(): void {
    this.submitted = false;
    this.contactForm.reset();
  }


  closeDialog(data: any) {
    this.dialogRef.close(data);
  }

}
