import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//line 3 is necessary to use 'ngModel' in the components
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { QuoteItemComponent } from './quote-stuff/quote-item/quote-item.component';
import { QuoteListComponent } from './quote-stuff/quote-list/quote-list.component';
import { ContactListComponent } from './contact-stuff/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-stuff/contact-details/contact-details.component';

//each item of this array represents one 'page' in our app.
const myRoutes: Routes = [
  //URL and component to be displayed when the URL is visited.
  { path: '', component: QuoteListComponent },
  //       empty string is the '/', homepage
  { path: 'forms', component: FormsComponent },
  //       '/forms' URL
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    QuoteItemComponent,
    QuoteListComponent,
    ContactListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //line above is necessary to use 'ngModel' in the components
    RouterModule.forRoot(myRoutes)
    //finishes the connection between the app and the routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
