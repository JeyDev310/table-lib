import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableLibModule } from 'table-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
