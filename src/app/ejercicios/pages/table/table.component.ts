import { Component, OnInit } from '@angular/core';
import { Post } from '../../interface/post.interface';
import { EjercicioService } from '../../services/ejercicio.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  posts: Post[] = [];

  constructor(private ejercicioService: EjercicioService) {}

  ngOnInit(): void {
    this.ejercicioService.GetPosts().subscribe((resp) => (this.posts = resp));
  }
}
