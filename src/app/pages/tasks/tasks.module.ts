import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TasksRoutes } from './tasks.routing';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ActionsBtnsComponent } from './components/actions-btns/actions-btns.component';

@NgModule({
  imports: [
    SharedModule,
    TasksRoutes,

    /* NG-ZORRO */
    NzTypographyModule,
  ],
  declarations: [TasksComponent, TodoItemComponent, ActionsBtnsComponent],
})
export class TasksModule {}
