import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../../services/auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hasSession : boolean;
  user;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser.subscribe(
      res => {
        console.log(res !== null)
        console.log(res)
        this.hasSession = res !== null;
      }
    );
  }

}
