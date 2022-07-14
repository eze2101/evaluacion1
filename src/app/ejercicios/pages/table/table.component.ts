import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../interface/post.interface';
import { EjercicioService } from '../../services/ejercicio.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'title', 'actions'];
  dataSource = new MatTableDataSource<Post>;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private ejercicioService: EjercicioService) {}

  ngOnInit(): void {
    this.ejercicioService.GetPosts().subscribe((resp) => {
      (this.dataSource = new MatTableDataSource<Post>(resp)),
        (this.dataSource.paginator = this.paginator!);
    });
  }
}
