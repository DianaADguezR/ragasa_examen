import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    baseUri:string = 'http://localhost:4000/api';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    // Create
    createTask(data : Task): Observable<any> {
        let url = `${this.baseUri}/create`;
        return this.http.post(url, data)
        .pipe(
            catchError(this.errorMgmt)
        );
    };

    // Get all Tasks
    getTasks() {
        return this.http.get(`${this.baseUri}`);
    };

    // Get Task
    getTask(id : string): Observable<any> {
        let url = `${this.baseUri}/read/${id}`;
        return this.http.get(url, {headers: this.headers}).pipe(
            map((res: Response) => {
                return res || {}
            }),
            catchError(this.errorMgmt)
        );
    };

    // Update Task
    updateTask(id : string, data : Task): Observable<any> {
        let url = `${this.baseUri}/update/${id}`;
        return this.http.put(url, data, { headers: this.headers }).pipe(
            catchError(this.errorMgmt)
        );
    };

    // Delete Task
    deleteTask(id : string): Observable<any> {
        let url = `${this.baseUri}/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(
            catchError(this.errorMgmt)
        );
    };

    // Error handling 
    errorMgmt(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };
}
