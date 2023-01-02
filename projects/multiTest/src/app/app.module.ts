import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MultiModule } from 'multi';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MultiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
