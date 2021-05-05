import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelPipe } from '../internationalization/label.pipe';



@NgModule({
  declarations: [
    LabelPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LabelPipe
  ],
  providers: [
    LabelPipe
  ]
})
export class SharedModule { }
