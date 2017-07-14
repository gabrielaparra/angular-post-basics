import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//line 3 is necessary to use 'ngModel' in the components

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { QuoteItemComponent } from './quote-stuff/quote-item/quote-item.component';
import { QuoteListComponent } from './quote-stuff/quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    QuoteItemComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    //line above is necessary to use 'ngModel' in the components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
