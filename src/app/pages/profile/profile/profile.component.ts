import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserInformation } from 'src/app/models/user-model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'firebase';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userinfo = null;
  user: User;
  constructor(private database : AngularFirestore, private authService : AuthService) { }

  ngOnInit(): void {
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
    
  }

}
