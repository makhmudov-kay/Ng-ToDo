import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ToDoItem } from '../../models/todo-list.interface';
import { TodoService } from '../../service/todo.service';

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
   * @param $todo
   */
  constructor(private $todo: TodoService) {}

  completeOrUpdateTask(id: string) {
    // this.$todo
  }

  handleEditTask(id: string) {
    console.log(id);
  }

  handleDeleteTask(id: string) {
    console.log(id);
  }
}
