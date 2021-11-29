import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { MOVIES } from './mock-data/mock-data';
import { movieService } from './services/movie.service';

@Component({
  selector: 'prjang-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prjang';

  movies = MOVIES;

  constructor(private movieService: movieService) {}

  getAscendingOrder() {
    this.movieService.getAscendingOrderMovies(this.movies);
  }

  getDescendingOrder() {
    this.movieService.getDescendingOrderMOvies(this.movies);
  }
}
