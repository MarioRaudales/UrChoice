import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserInformation, UserGoogleInformation } from 'src/app/models/user-model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService, private router: Router, private database : AngularFirestore) {

  }

  ngOnInit(): void {
  }

  login() {
    this.authService.signInWithEmail(this.email, this.password).then(
      () => {
        console.log(this.authService.authenticated)
        this.router.navigate(["./dashboard"])
      }
    );
  }
  loginGoogle() {
    let createdUser = new UserInformation();
    this.authService.authWithGoogle().then(
      result => {
        console.log(result);
        if(result.additionalUserInfo.isNewUser){
          const googleData = result.additionalUserInfo.profile as UserGoogleInformation;
          createdUser.email = result.user.email;
          createdUser.first_name = googleData.given_name;
          createdUser.last_name = googleData.family_name;
          createdUser.photoURL = googleData.picture;
          this.database.collection('user').doc(result.user.uid).set(Object.assign({}, createdUser)).then(
            () => {
              this.router.navigate(["./dashboard"])
            }
          )
        }
        this.router.navigate(["./dashboard"])
      }
    )
  }
}
