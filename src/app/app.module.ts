import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Feature Modules
import { BitcoinModule } from './bitcoin/bitcoin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BitcoinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
