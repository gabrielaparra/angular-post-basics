import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  @Input() quoteInfo: object;
  //input is like giving a component a parameter
  //'quoteInfo' will be set by the parent when the component
  //is displayed (kind of like the parameter of a function)

  //==> quoteInfo is basically the parameter of the
  //QuoteItemComponent (what it needs to do its work.)

  constructor() { }

  ngOnInit() {
  }

}
