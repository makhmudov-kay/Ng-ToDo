import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TasksRoutes } from './tasks.routing';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ActionsBtnsComponent } from './components/actions-btns/actions-btns.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TaskModalComponent } from './components/task-modal/task-modal.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@NgModule({
  imports: [
    SharedModule,
    TasksRoutes,

    /* NG-ZORRO */
    NzTypographyModule,
    NzModalModule,
    NzSkeletonModule,
  ],
  declarations: [
    TasksComponent,
    TodoItemComponent,
    ActionsBtnsComponent,
    TaskModalComponent,
    SkeletonComponent,
  ],
})
export class TasksModule {}
