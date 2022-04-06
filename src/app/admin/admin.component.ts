import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../shared/models/product.model";
import {Subscription} from "rxjs";
import {AuthService} from "../shared/authentication/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit , OnDestroy{
  shopItems: Product[];
  isAdminMethod: Subscription;
  isAdmin: boolean;

  constructor(
    private authService:AuthService
  ) {
  }
  ngOnInit(): void {
  //   this.isAdminMethod = this.authService.user.subscribe((user) =>{
  //     this.isAdmin = user.roles.indexOf(new UserRole(1,"ADMIN")) != -1;
  //  })
  }
  //
  ngOnDestroy(): void {
  //   this.isAdminMethod.unsubscribe()
  }

  logOut() {
    this.authService.logOut();
  }
}
