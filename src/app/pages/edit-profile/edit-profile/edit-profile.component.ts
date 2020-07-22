import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from 'firebase';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfilePicComponent } from 'src/app/components/profile-pic/profile-pic.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  userinfo = null;
  user: User;
  first_name: string;
  last_name: string;
  age: number;
  bannerMessage: string;
  city: string;
  country: string;
  hobbies: string;
  work: string;
  description: string;
  education: string;
  email: string;
  img: any = null;
  banner: any = null;
  constructor(private authService: AuthService, private database: AngularFirestore, 
    private router : Router,private _modalService: NgbModal, private storage : AngularFireStorage,
    private toastr : ToastrService
    ) { }

  openProfile() {
    const modalref = this._modalService.open(ProfilePicComponent);
    modalref.result.then(
      result => {
        console.log(result)
        this.img = result;
      }
    )
  }
  openBanner() {
    const modalref = this._modalService.open(ProfilePicComponent);
    modalref.result.then(
      result => {
        console.log(result)
        this.banner = result;
      }
    )
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(
      data => {
        this.user = data;
        this.database.collection('user').doc(this.user.uid).get().subscribe(
          data => {
            this.userinfo = data.data();
            this.first_name = this.userinfo.first_name;
            this.last_name = this.userinfo.last_name;
            this.age = this.userinfo.age;
            this.bannerMessage= this.userinfo.bannerMessage;
            this.city = this.userinfo.city;
            this.country= this.userinfo.country; 
            this.hobbies= this.userinfo.hobbies;
            this.work= this.userinfo.work;
            this.description= this.userinfo.description;
            this.education= this.userinfo.education;
            this.email= this.userinfo.email;
          }
        );
      }
    )
  }
  updateInfo() {
    const updatedData = {
      first_name: this.first_name,
      last_name: this.last_name,
      age: this.age,
      bannerMessage: this.bannerMessage,
      city: this.city,
      country: this.country,
      hobbies: this.hobbies,
      work: this.work,
      description: this.description,
      education: this.education,
      email: this.email
    }
    this.toastr.info('Uploading your data wait until success to see');
    this.database.collection('user').doc(this.user.uid).update(Object.assign({},updatedData)).then(
      () => {
        this.toastr.success('Finnish Updating your Information')
      }
    );
    var metadata = {
      contentType: 'image/jpeg',
    };
    const bannerPath = `Images/banner/${this.user.uid}`;
    const profilePath = `Images/profile/${this.user.uid}`;
    const fileRef = this.storage.ref(bannerPath)
    const fileRef2 = this.storage.ref(profilePath)
    if(this.banner !== null){
      this.toastr.info('Uploading your Banner Image wait until success to see');
      const task = fileRef.putString(this.banner.base64.split(',')[1],'base64').then(
        res => {
          fileRef.getDownloadURL().subscribe(
            url => {
              console.log(url)
              this.database.collection('user').doc(this.user.uid).update({bannerURL: url}).then(
                () => {
                  console.log('finishUpload')
                  this.toastr.success('Finnish Uploading Banner Image reload to see the changes')
                }
              );
            }
          )
        }      
      );
    }
    if(this.img !== null){
      this.toastr.info('Uploading your Profile Image wait until success to see');
      const task = fileRef2.putString(this.img.base64.split(',')[1],'base64').then(
        res => {
          fileRef2.getDownloadURL().subscribe(
            url => {
              console.log(url)
              this.database.collection('user').doc(this.user.uid).update({photoURL: url}).then(
                () => {
                  console.log('finishUpload')
                  this.toastr.success('Finnish Uploading Profile Image reload to see the changes')
                }
              );
            }
          )
        }      
      );
    }
    this.router.navigate(['./profile'])
  }

}
