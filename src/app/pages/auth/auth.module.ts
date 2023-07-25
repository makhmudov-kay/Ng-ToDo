import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutes,

    /* NG-ZORRO COMPONENTS */
    NzFormModule,
  ],
  declarations: [AuthComponent],
})
export class AuthModule {}
