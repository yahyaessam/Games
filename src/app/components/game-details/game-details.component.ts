import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit, OnDestroy {

  game: Game;
  gameRating = 0;
  sub: Subscription;

  constructor(private http: HttpService, private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.params.subscribe((params: Params) => {
      this.http.getGameById(params['id']).subscribe(res => {
        this.game = res;
      })
    })
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.gameRating = this.game.metacritic;
    }, 1000)
  }
  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }
}
