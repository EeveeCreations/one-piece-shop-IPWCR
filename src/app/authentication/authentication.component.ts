import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/authentication/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isLogIn: boolean = false;
  isWaiting: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }

  onSwitchMode() {
    this.isLogIn = !this.isLogIn;
    if(this.isLogIn){
      this.router.navigate(['login'],{relativeTo: this.activeRoute});
    }
    else{
      this.router.navigate(['/register'],);
    }
  }

}
