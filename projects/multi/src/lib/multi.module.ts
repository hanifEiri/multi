import { NgModule } from '@angular/core';
import { MultiComponent } from './multi.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MultiComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [MultiComponent]
})
export class MultiModule { }
