import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-logout',
  templateUrl: './navbar-logout.component.html',
  styleUrls: ['./navbar-logout.component.scss']
})
export class NavbarLogoutComponent implements OnInit {
  isCollapsed: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isCollapsed = true;
  }

}
