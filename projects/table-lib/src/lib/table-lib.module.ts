import { NgModule } from '@angular/core';
import { TableLibComponent } from './table-lib.component';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [TableLibComponent],
  imports: [
    CdkTableModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [TableLibComponent]
})
export class TableLibModule { }
