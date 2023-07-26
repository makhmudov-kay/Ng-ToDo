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
  form!: FormGroup;

  /**
   *
   */
  isVisibleModal = false;

  /**
   *
   */
  isLoading = false;

  /**
   *
   */
  editingData!: ToDoItem;

  /**
   *
   * @param $todo
   * @param cd
   */
  constructor(
    private $todo: TodoService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  private getList() {
    this.$todo.getAll().subscribe((result) => {
      this.toDo = result;
      this.isLoading = false;
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      completed: [false],
      user: [1],
    });
  }

  /**
   *
   */
  ngOnInit() {
    this.getList();
    this.initForm();
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
   */
  addEditTask(id?: string) {
    if (this.form.invalid) {
      markAsDirty(this.form);
      return;
    }

    const request = this.form.getRawValue();
    this.isLoading = true;
    this.$todo.addTask(request).subscribe(() => {
      this.isVisibleModal = false;
      this.form.controls['title'].reset();
      this.getList();
      this.cd.markForCheck();
    });
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
    request.completed = !task.completed;
    this.isLoading = true;
    this.$todo.editTask(task.id, request).subscribe(() => {
      this.getList();
    });
  }

  /**
   *
   * @param id
   */
  editTask(task: ToDoItem) {
    this.form.controls['title'].setValue(task.title);
    this.editingData = task;
    this.cd.markForCheck();
    this.openModal();
  }

  /**
   *
   * @param id
   */
  deleteTask(id: string) {
    this.toDo.results = this.toDo.results.filter((todo) => todo.id !== id);
    this.$todo.delete(id).subscribe();
    this.cd.markForCheck();
  }
}
