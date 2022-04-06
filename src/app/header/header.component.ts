import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/authentication/auth.service";
import {Subscription} from "rxjs";
import {LocalStorageService} from "../shared/services/local-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userSubscription: Subscription;
  isOpened: boolean = false;
  isUser: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.checkUser();
  }

  checkUser(): void {
    this.userSubscription = this.authService.user.subscribe(
      (user) => {
        this.isUser = (user != undefined);
      }
    )
  }

  private closePopUp() {
  }
}
