import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../interface/comment.interface';
import { EjercicioService } from '../../services/ejercicio.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() idPost?: number;
  @Output() valueEmit: EventEmitter<boolean> = new EventEmitter();
  comments: Comment[] = [];

  constructor(private ejercicioService: EjercicioService) {}

  ngOnInit(): void {
    this.ejercicioService
      .GetComments(this.idPost!)
      .subscribe((res) => (this.comments = res));
  }

  emit() {
    this.valueEmit.emit(true);
  }

  changeTypeLetter(comment: Comment) {
    comment.mayuscula = !comment.mayuscula;
  }
}
