import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {UserInformation} from '../../models/user-model';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  @Input() user; 
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      this.user = changes[propName].currentValue; 
    }
  }
}
