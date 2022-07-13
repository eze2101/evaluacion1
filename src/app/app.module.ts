import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './ejercicios/pages/post/post.component';
import { TableComponent } from './ejercicios/pages/table/table.component';

import { ErrorComponent } from './shared/error/error/error.component';
import { ComentariosComponent } from './ejercicios/components/comentarios/comentarios.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent, TableComponent, PostComponent, ComentariosComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
