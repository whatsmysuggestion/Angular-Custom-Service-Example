import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateService} from './date.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
