import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Output() itemAmountEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() amount: number;
  constructor() { }

  ngOnInit(): void {
  }

  itemDelete() {
    this.itemAmountEvent.next(false);
  }
  itemAdd() {
    this.itemAmountEvent.next(true);
  }

}
