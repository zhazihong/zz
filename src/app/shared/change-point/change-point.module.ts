import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePointDirective } from './change-point.directive';
import { ChangePointService } from './change-point.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ChangePointDirective],
  exports: [ChangePointDirective],
  providers: [ChangePointService],
})
export class ChangePointModule {}
