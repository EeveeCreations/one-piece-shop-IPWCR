import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActivePerfRecorder} from "@angular/compiler-cli/src/ngtsc/perf";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
  }


}
