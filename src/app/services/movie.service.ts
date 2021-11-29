import { Injectable } from "@angular/core";
import { IMovie } from "../model/movie";


@Injectable({
  providedIn: 'root'
})
export class movieService {

  constructor() {}

  getAscendingOrderMovies(movies: IMovie[]) {
    function compare(a: { rate: number; }, b: { rate: number; }) {
      if (a.rate < b.rate) {
        return -1;
      }
      if (a.rate > b.rate) {
        return 1;
      }
      return 0;
    }

    const ascendingMovies = movies.sort(compare);
    return ascendingMovies;
  }

  getDescendingOrderMOvies(movies: IMovie[]) {
    function compare(a: { rate: number; }, b: { rate: number; }) {
      if (a.rate > b.rate) {
        return -1;
      }
      if (a.rate < b.rate) {
        return 1;
      }
      return 0;
    }

    const descendingMovies = movies.sort(compare);
    return descendingMovies;
  }
}
