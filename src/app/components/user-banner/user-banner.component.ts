import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {UserInformation} from '../../models/user-model';
@Component({
  selector: 'app-user-banner',
  templateUrl: './user-banner.component.html',
  styleUrls: ['./user-banner.component.scss']
})
export class UserBannerComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      this.user = changes[propName].currentValue; 
      console.log(propName)
      console.log(this.user)
    }
  }
}
