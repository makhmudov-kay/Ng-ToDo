import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';
import { ToDoList } from './models/todo-list.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less'],
})
export class TasksComponent implements OnInit {
  toDo$!: Observable<ToDoList>;

  constructor(private $todo: TodoService) {}

  ngOnInit() {
    this.toDo$ = this.$todo.getAll().pipe(map((result) => result));
  }
}
