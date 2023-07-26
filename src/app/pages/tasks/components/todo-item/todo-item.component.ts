import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ToDoItem } from '../../models/todo-list.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  /**
   *
   */
  @Input()
  task!: ToDoItem;

  /**
   *
   */
  @Output()
  update = new EventEmitter<ToDoItem>();

  /**
   *
   */
  @Output()
  edit = new EventEmitter<ToDoItem>();

  /**
   *
   */
  @Output()
  delete = new EventEmitter<string>();

  /**
   *
   * @param id
   */
  completeOrUpdateTask(task: ToDoItem) {
    this.update.emit(task);
  }

  /**
   *
   * @param id
   */
  handleEditTask(task: ToDoItem) {
    this.edit.emit(task);
  }

  /**
   *
   * @param id
   */
  handleDeleteTask(id: string) {
    this.delete.emit(id);
  }
}
