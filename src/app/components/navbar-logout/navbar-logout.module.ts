import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLogoutComponent} from './navbar-logout/navbar-logout.component'
import { NavbarLogoutRoutingModule } from './navbar-logout-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NavbarLogoutComponent],
  imports: [
    CommonModule,
    NavbarLogoutRoutingModule,
    NgbModule
  ],
  exports: [
    NavbarLogoutComponent
  ]
})
export class NavbarLogoutModule { }
