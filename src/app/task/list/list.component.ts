import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task';
import { Router, RouterModule } from '@angular/router';
import * as moment from 'moment';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {  
	data : any;
	model = new Task();

	constructor(
		private router: Router,
		public taskService: TaskService
	) { }

	ngOnInit(): void {
		this.getAll();
	}

	getAll() {
		this.taskService.getTasks().subscribe(
			(res) => {
				this.data = res;
			}, (error) => {
				console.log(error);
			});
	}

	deleteTask(item : Task) {
		var c = confirm("Estas seguro quequieres eliminar la tarea '" + item.name + "'?");
		if (c == true) {			
			this.taskService.deleteTask(item._id).subscribe(
			(res) => {
				this.getAll();
			}, (error) => {
				console.log(error);
			});
		}
	}

	// se redirige para que recargue nuevamente los componentes con los nuevos ids del query params
	redirectTo(uri:string){
		this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
		this.router.navigate([uri]));
	}
}
