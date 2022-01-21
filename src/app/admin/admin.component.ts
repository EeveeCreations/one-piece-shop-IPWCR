import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../shared/models/product.model";
import {ShopService} from "../shared/services/shop.service";
import {AuthService} from "../shared/services/auth.service";
import {Subscription} from "rxjs";
import {UserRole} from "../shared/models/user-role.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit , OnDestroy{
  shopItems: Product[];
  isAdminMethod: Subscription;
  isAdmin: boolean;

  // constructor(private shopService: ShopService,
  //             private authService: AuthService) { }
  //
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
