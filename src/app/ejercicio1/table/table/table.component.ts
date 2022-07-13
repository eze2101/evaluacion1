import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  counter(i: number) {
    return new Array(i);
  }

  constructor() {}

  ngOnInit(): void {}

  View() {}
}
