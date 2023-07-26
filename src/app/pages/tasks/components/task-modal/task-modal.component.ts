import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ToDoItem, ToDoItemRequest } from '../../models/todo-list.interface';
import { FormGroup } from '@angular/forms';

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
  @Input()
  form!: FormGroup;

  /**
   *
   */
  @Input()
  editingData!: ToDoItem;

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
  handleOk() {
    this.submitTask.emit();
  }

  /**
   *
   */
  handleCancel() {
    this.isVisibleChange.emit(false);
  }
}
