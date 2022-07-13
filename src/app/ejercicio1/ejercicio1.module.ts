import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table/table.component';
import { PostComponent } from './post/post/post.component';

@NgModule({
  declarations: [TableComponent, PostComponent],
  imports: [CommonModule],
})
export class Ejercicio1Module {}
