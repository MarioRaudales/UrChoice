import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { UserInformation } from '../../models/user-model';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() user: UserInformation;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      this.user = changes[propName].currentValue; 
    }
  }
}
