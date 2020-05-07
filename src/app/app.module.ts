import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './task/list/list.component';
import { NewComponent } from './task/new/new.component';
import { EditComponent } from './task/edit/edit.component';
import { TaskService } from './service/task.service'; 

@NgModule({
	declarations: [
		AppComponent,
		ListComponent,
		NewComponent,
		EditComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [TaskService],
	bootstrap: [AppComponent]
})
export class AppModule { }
