import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-actions-btns',
  templateUrl: './actions-btns.component.html',
  styleUrls: ['./actions-btns.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsBtnsComponent {
  /**
   *
   */
  @Output()
  completeOrUpdateTask = new EventEmitter();

  /**
   *
   */
  @Output()
  editTask = new EventEmitter();

  /**
   *
   */
  @Output()
  deleteTask = new EventEmitter();

  /**
   *
   */
  @Input()
  isCompleted!: boolean;

  /**
   *
   */
  handleCompleteOrUpdate() {
    this.completeOrUpdateTask.emit();
  }

  /**
   *
   */
  handleEditTask() {
    this.editTask.emit();
  }

  /**
   *
   */
  handleDeleteTask() {
    this.deleteTask.emit();
  }
}
