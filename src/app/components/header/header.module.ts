import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarLogoutModule } from '../navbar-logout/navbar-logout.module';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NavbarLogoutModule,
    NavbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
