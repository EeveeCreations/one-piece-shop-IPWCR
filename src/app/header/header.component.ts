import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivePerfRecorder} from "@angular/compiler-cli/src/ngtsc/perf";
import {RequestService} from "../shared/Requests/request.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              private requestService: RequestService) {}

  ngOnInit(): void {
  }


  OnOpenShop() {
    this.requestService.requestOfProduct("all","get", null)
  }
}
