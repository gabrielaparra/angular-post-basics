import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  allTheQuotes: object[] = [
    {
      text: 'Strive not to be a success, but rather to be of value.',
      author: 'Albert Einstein'
    },
    {
      text: 'Definiteness of purpose is the starting point of all achievement.',
      author: 'W. Clement Stone'
    },
    {
      text: 'Life is 10% what happens to me and 90% of how I react to it.',
      author: 'Charles Swindoll'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  doSomething(quote) {
    const quoteIndex = this.allTheQuotes.indexOf(quote);
    this.allTheQuotes.splice(quoteIndex, 1);
  }

}
