import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, AuthRoutes],
  declarations: [AuthComponent],
})
export class AuthModule {}
