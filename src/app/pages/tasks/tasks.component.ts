import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { TodoService } from './service/todo.service';
import {
  ToDoItem,
  ToDoItemRequest,
  ToDoList,
} from './models/todo-list.interface';
import { markAsDirty } from 'src/app/shared/utilits/utilits';
import { NgDestroy } from 'src/app/shared/utilits/ng-destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent implements OnInit {
  /**
   *
   */
  toDo!: ToDoList;

  /**
   *
   */
  isVisibleModal = false;

  /**
   *
   */
  editingData?: ToDoItem;

  /**
   *
   * @param $todo
   * @param cd
   */
  constructor(
    private $todo: TodoService,
    private cd: ChangeDetectorRef,
    private $destroy: NgDestroy
  ) {}

  /**
   *
   */
  getList() {
    this.$todo
      .getAll()
      .pipe(takeUntil(this.$destroy))
      .subscribe((result) => {
        this.toDo = result;
        this.cd.markForCheck();
      });
  }

  /**
   *
   */
  ngOnInit() {
    this.getList();
  }

  /**
   *
   */
  openModal() {
    this.isVisibleModal = true;
    this.cd.markForCheck();
  }

  /**
   *
   * @param id
   */
  completeTask(task: ToDoItem) {
    const request: ToDoItemRequest = {
      title: task.title,
      completed: !task.completed,
      user: task.user,
    };

    this.$todo
      .editTask(task.id, request)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.getList();
      });
  }

  /**
   *
   * @param id
   */
  editTask(task: ToDoItem) {
    this.editingData = task;
    this.cd.markForCheck();
    this.openModal();
  }

  /**
   *
   * @param id
   */
  deleteTask(id: string) {
    this.$todo
      .delete(id)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: () => {
          this.toDo.results = this.toDo.results.filter(
            (todo) => todo.id !== id
          );
          this.cd.markForCheck();
        },
      });
  }
}
