import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
  } from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})

export class QuoteItemComponent implements OnInit {
  @Input() quoteInfo: any;
  //input is like giving a component a parameter
  //'quoteInfo' will be set by the parent when the component
  //is displayed (kind of like the parameter of a function)

  //==> quoteInfo is basically the parameter of the
  //QuoteItemComponent (what it needs to do its work.)

  //the info is passed on by the parent component

  @Output() onQuoteDelete = new EventEmitter<any>();
  //creates an 'event' (onQuoteDelete)
  //that a parent can choose to be notified of

  constructor() { }

  ngOnInit() {
  }

  deleteQuote() {
    //emit is the thing that notifies parents
    this.onQuoteDelete.emit(this.quoteInfo);
             //                  |
             //the info we are sending to the parent
  }

}
