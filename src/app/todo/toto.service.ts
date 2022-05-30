import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './toto.model';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    baseUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.baseUrl = 'http://localhost:3000/todos';
    }

    getAll(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.baseUrl);
    }

    addTodo(todo: Todo) {
        return this.http.post<Todo>(this.baseUrl, todo);
    }
}