import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './task/list/list.component';
import { NewComponent } from './task/new/new.component';
import { EditComponent } from './task/edit/edit.component';
import { DeleteComponent } from './task/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
