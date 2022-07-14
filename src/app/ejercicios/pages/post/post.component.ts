import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../interface/post.interface';
import { EjercicioService } from '../../services/ejercicio.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  idPost?: number;
  dataPost?: Post;
  viewDate: boolean = false;
  date: Date = new Date();

  constructor(
    private ruteActive: ActivatedRoute,
    private ejercicioService: EjercicioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idPost = this.ruteActive.snapshot.params['number'];

    this.ejercicioService.GetPostByID(this.idPost!).subscribe(
      (res) => {
        this.dataPost = res;
      },
      (error) => {
        this.router.navigateByUrl('404');
      }
    );
  }
  recibir(value: boolean) {
    this.viewDate = value;
  }
}
