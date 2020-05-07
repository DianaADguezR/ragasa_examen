import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html'
})
export class NewComponent implements OnInit {
	model = new Task();
	errors = "";
	status = ["En curso", "En pausa","Terminada"];
	
	constructor(
		private router: Router,
		private taskService: TaskService
	) {
	}

	ngOnInit(): void {
		
	}

	onClickSubmit() {
		this.errors = "";
		this.taskService.createTask(this.model).subscribe(
		(res) => {
			this.redirectTo('/task/list');
		}, (error) => {
			this.errors = error;
		});
	}

	redirectTo(uri:string) {
		this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
		this.router.navigate([uri]));
	}
}