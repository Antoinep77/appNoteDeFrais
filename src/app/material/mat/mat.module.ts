import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatBadgeModule, MatListModule,MatDividerModule, MatMenuModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class MatModule { }
