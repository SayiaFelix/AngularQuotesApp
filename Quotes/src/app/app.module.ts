import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    NavbarComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
