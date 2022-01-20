import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {
  @Input() category: string;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  indexOfFive() {
    return  true //this.index %5 == 0;
  }
}
