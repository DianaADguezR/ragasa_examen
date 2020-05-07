import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './task/list/list.component';
import { NewComponent } from './task/new/new.component';
import { EditComponent } from './task/edit/edit.component';

const routes: Routes = [
	{
		path: '',
		component: ListComponent
	},
	{
		path: 'task/list',
		component: ListComponent
	},
	{
		path: 'task/create',
		component: NewComponent
	},
	{
		path: 'edit/:id',
		component: EditComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
