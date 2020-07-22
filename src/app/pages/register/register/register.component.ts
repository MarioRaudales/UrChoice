import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserInformation } from '../../../models/user-model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  createdUser: UserInformation;
  constructor(private authService : AuthService, private router : Router, private database : AngularFirestore) { 
    this.createdUser = new UserInformation();
  }

  ngOnInit(): void {
  }
  signUp(){

    
    console.log(this.first_name)
    if(this.email !== '' && this.password !== '' && this.first_name !== '' && this.last_name !== ''){
      this.createdUser.first_name = this.first_name;
      this.createdUser.last_name = this.last_name;
      this.createdUser.email = this.email;
      this.authService.signUpWithEmail(this.email,this.password).then(
        () => {
          this.authService.currentUser.subscribe(
            newUser => {
              this.database.collection('user').doc(newUser.uid).set(Object.assign({}, this.createdUser))
            }
          )
          this.authService.verifyEmail()
          this.router.navigate(['/login'])
        }
      );
    }

  }
}
