import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../interface/comment.interface';
import { EjercicioService } from '../../services/ejercicio.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() idPost?: number;
  comments: Comment[] = [];

  constructor(private ejercicioService: EjercicioService) {}

  ngOnInit(): void {
    this.ejercicioService
      .GetComments(this.idPost!)
      .subscribe((res) => (this.comments = res));
  }
}
