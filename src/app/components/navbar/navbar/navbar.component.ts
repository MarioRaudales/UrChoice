import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  private user = null;
  public userinfo = null;
  constructor(location: Location,  private element: ElementRef, 
    private router: Router, private authService : AuthService, private database : AngularFirestore) {
    this.location = location;
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(
      data => {
        this.user = data;
        this.database.collection('user').doc(this.user.uid).get().subscribe(
          data => {
            this.userinfo = data.data();
          }
        );
      }
    )
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
  logout(){
    this.authService.signOut();
    this.router.navigate(["./dashboard"])
  }
}
