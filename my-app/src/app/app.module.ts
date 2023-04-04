import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvtableComponent } from './evtable/evtable.component';
import {MatTableModule} from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { HeaderNavComponent } from './header-nav/header-nav.component';
import {MaterialExampleModule} from "./material.module";
@NgModule({
  declarations: [
    AppComponent,
    EvtableComponent,
    HeaderNavComponent
  ],
  imports: [
    MatTableModule,
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    MaterialExampleModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
