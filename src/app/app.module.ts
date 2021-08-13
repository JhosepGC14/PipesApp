import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//primeng
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, RippleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
