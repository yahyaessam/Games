import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sort: string;
  games: Array<Game>;
  sub: Subscription;
  constructor(private http: HttpService, private activtedRoute: ActivatedRoute, private router: Router) {
    this.sub = this.activtedRoute.params.subscribe((params: Params) => {
      params['game-search']? this.searchGames('metacrit', params['game-search']) : this.searchGames('metacrit')
    });
  }
  ngOnInit(): void {

  }

  searchGames(sort: string, search?: string) {
    this.http.getGames(sort, search).subscribe((res: APIResponse<Game> ) => {
      this.games = res.results;
    });
  }
  openGameDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
