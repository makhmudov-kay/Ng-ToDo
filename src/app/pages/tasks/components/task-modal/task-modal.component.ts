import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ToDoItem, ToDoItemRequest } from '../../models/todo-list.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { markAsDirty } from 'src/app/shared/utilits/utilits';
import { TodoService } from '../../service/todo.service';
import { NgDestroy } from 'src/app/shared/utilits/ng-destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskModalComponent {
  /**
   *
   */
  @Input()
  isVisible!: boolean;

  /**
   *
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   *
   */
  @Output()
  submitTask = new EventEmitter();

  /**
   *
   */

  private _editingData?: ToDoItem;
  public get editingData(): ToDoItem | undefined {
    return this._editingData;
  }
  @Input()
  public set editingData(v: ToDoItem | undefined) {
    if (v) {
      this.setForm(v);
    }
    this._editingData = v;
  }

  /**
   *
   */
  form = this.fb.nonNullable.group({
    title: ['', [Validators.required]],
    completed: [false],
    user: [1],
  });

  /**
   *
   * @param fb
   * @param $todo
   */
  constructor(
    private fb: FormBuilder,
    private $todo: TodoService,
    private $destroy: NgDestroy
  ) {}

  /**
   *
   * @param editingData
   */
  private setForm(editingData: ToDoItem) {
    this.form.controls.title.setValue(editingData.title);
    this.form.controls.completed.setValue(editingData.completed);
    this.form.controls.user.setValue(editingData.user);
  }

  /**
   *
   */
  private afterSuccess() {
    this.submitTask.emit();
    this.close();
  }

  /**
   *
   * @param id
   * @param request
   */
  private editTask(id: string, request: ToDoItemRequest) {
    this.$todo
      .editTask(id, request)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.afterSuccess();
      });
  }

  /**
   *
   * @param request
   */
  private addTask(request: ToDoItemRequest) {
    this.$todo
      .addTask(request)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.afterSuccess();
      });
  }

  /**
   *
   */
  close() {
    this.isVisibleChange.emit(false);
    this.form.reset();
    this.editingData = undefined;
  }

  /**
   *
   */
  addEditTask() {
    if (this.form.invalid) {
      markAsDirty(this.form);
      return;
    }

    const request = this.form.getRawValue();
    if (this.editingData) {
      this.editTask(this.editingData.id, request);
      return;
    }

    this.addTask(request);
  }
}
