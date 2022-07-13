import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  numPost?: number;

  constructor(private ruteActive: ActivatedRoute) {}

  ngOnInit(): void {
    this.numPost = this.ruteActive.snapshot.params['number'];
  }
}
