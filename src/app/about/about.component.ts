import { Observable, of } from 'rxjs';
import { User } from './../shared/shared.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  user!: User

  constructor(private sharedService: SharedService) {

   }

  ngOnInit(): void {
    this.sharedService.getUser().subscribe(result => {
      this.user = result;
    })
  }

}
