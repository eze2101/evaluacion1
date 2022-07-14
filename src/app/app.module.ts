import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './ejercicios/pages/post/post.component';
import { TableComponent } from './ejercicios/pages/table/table.component';

import { ErrorComponent } from './shared/error/error/error.component';
import { ComentariosComponent } from './ejercicios/components/comentarios/comentarios.component';
import { MinMayPipe } from './ejercicios/pipes/min-may.pipe';

//cambiar locale Date
import localEs from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
import { MaterialModule } from './ejercicios/material/material/material.module';
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    TableComponent,
    PostComponent,
    ComentariosComponent,
    MinMayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
