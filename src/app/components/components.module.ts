import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserDataComponent } from './user-data/user-data.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { UserBannerComponent } from './user-banner/user-banner.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    UserInfoComponent,
    UserDataComponent,
    InfoCardComponent,
    UserBannerComponent,
    ProfilePicComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule,
    NgbModule,
    ImageCropperModule

  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    UserInfoComponent,
    UserDataComponent,
    InfoCardComponent,
    UserBannerComponent,
    ProfilePicComponent,
  ]
})
export class ComponentsModule { }
