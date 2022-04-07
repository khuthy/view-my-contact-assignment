import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title: string = 'Contact Manager';



  fillerNav: any[] = [
      {url: 'contact', icon: 'contacts', titleName: 'Contact Manager'},
      {url: 'about', icon: 'info',  titleName: 'About Me'}
  ]

  constructor() {

  }
  /* This method is used to set title on the nav bar when you navigate between Contact Manager and About Me */

  setHeaderText(titleName: string) {
    this.title = titleName;
  }


}
