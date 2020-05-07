import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent  {
	title = 'examen';

	constructor(
		private router: Router, 
		private modalService: NgbModal){}
	
	ngOnInit() 
	{	
		this.router.events.subscribe(event => {	
		if (event instanceof NavigationEnd) {	
			// close all open modals
			this.modalService.dismissAll();	
		}	
		});	
	}
	
	redirectTo(uri:string){
		this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
		this.router.navigate([uri]));
	}
}
