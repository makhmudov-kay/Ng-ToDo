import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzSwitchModule,
    NzFormModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzSwitchModule,
    NzFormModule,
  ],
})
export class SharedModule {}
