import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './ejercicios/pages/post/post.component';
import { TableComponent } from './ejercicios/pages/table/table.component';
import { ErrorComponent } from './shared/error/error/error.component';

const routes: Routes = [
  {
    path: 'posts',
    component: TableComponent,
  },
  {
    path: 'post/:number',
    component: PostComponent,
  },
  {
    path: '404',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
