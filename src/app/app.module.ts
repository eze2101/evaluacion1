import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './ejercicios/post/post.component';
import { TableComponent } from './ejercicios/table/table/table.component';

import { ErrorComponent } from './shared/error/error/error.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent, TableComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
