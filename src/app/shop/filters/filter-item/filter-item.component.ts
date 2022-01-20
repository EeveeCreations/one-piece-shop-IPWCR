import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {
  @Input() category: string;

  constructor() { }

  ngOnInit(): void {
  }
}
