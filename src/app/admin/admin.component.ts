import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../shared/models/product.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit , OnDestroy{
  shopItems: Product[];
  isAdminMethod: Subscription;
  isAdmin: boolean;

  ngOnInit(): void {
  //   this.isAdminMethod = this.authService.user.subscribe((user) =>{
  //     this.isAdmin = user.roles.indexOf(new UserRole(1,"ADMIN")) != -1;
  //  })
  }
  //
  ngOnDestroy(): void {
  //   this.isAdminMethod.unsubscribe()
  }

}
