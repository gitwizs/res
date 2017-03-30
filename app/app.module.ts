import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { AppComponents }  from './app/app.component';
import { SharedModule }  from './shared/shared.module';
import { MaterialModule } from '@angular/material';


@NgModule({
  imports:      [ BrowserModule,SharedModule , MaterialModule.forRoot()],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

