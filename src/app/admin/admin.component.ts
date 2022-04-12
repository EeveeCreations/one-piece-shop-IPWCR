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
  isAdmin: boolean = false;

  constructor(
    private authService:AuthService
  ) {
    this.isAdminMethod = this.authService.user.subscribe(
    (user) =>{
      this.isAdmin = user.roles[0].role == "ADMIN";
    });
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.isAdminMethod.unsubscribe()
  }

  logOut() {
    this.authService.logOut();
  }
}
