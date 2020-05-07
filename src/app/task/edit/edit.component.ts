import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../service/task.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
	id  : any;
	model = new Task();
	errors = "";
	status = ["En curso", "En pausa","Terminada"];

	constructor(
	private taskService: TaskService,
	private route: ActivatedRoute,
		private router: Router
	) {
		this.id = this.route.snapshot.params.id;
	}

	ngOnInit(): void {
		this.loadData();
	}

	loadData() {
		this.errors = "";
		if (this.id) {
			this.taskService.getTask(this.id).subscribe(
			(res : Task) => {
				this.model = res;
			}, (error) => {
				this.errors = error;
			});
		}
	}

	onClickSubmit() {
		this.errors = "";
		this.taskService.updateTask(this.id, this.model).subscribe(
		(res) => {
			this.redirectTo('/task/list');
		}, (error) => {
			this.errors = error;
		});
	}

	redirectTo(uri:string){
		this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
		this.router.navigate([uri]));
	}

}
