import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './ejercicio1/post/post/post.component';
import { TableComponent } from './ejercicio1/table/table/table.component';
import { ErrorComponent } from './shared/error/error/error.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent, TableComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
