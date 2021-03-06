import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onReturn() {
    this.router.navigate(['../'], {relativeTo: this.activeRoute})
  }
}
