import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'e221-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input("links") meta: any
  @Output() pagination:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onPaginate(url: string): void {
    this.pagination.emit(url);
  }

}
