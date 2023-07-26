import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ToDoItem,
  ToDoItemRequest,
  ToDoList,
} from '../models/todo-list.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  /**
   *
   */
  private url = '/api/todo/';

  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns
   */
  getAll() {
    return this.http.get<ToDoList>(this.url);
  }

  /**
   *
   * @param model
   * @returns
   */
  addTask(model: ToDoItemRequest) {
    return this.http.post<ToDoItem>(this.url, model);
  }

  /**
   *
   * @param id
   * @returns
   */
  getById(id: string) {
    return this.http.get(`${this.url}${id}/`);
  }

  /**
   *
   * @param id
   * @param model
   * @returns
   */
  editTask(id: string, model: ToDoItemRequest) {
    return this.http.put(`${this.url}${id}/`, model);
  }

  /**
   *
   * @param id
   * @returns
   */
  delete(id: string) {
    return this.http.delete(`${this.url}${id}/`);
  }
}
