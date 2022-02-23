import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { APIResponse, Game } from '../models';
@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http:HttpClient){}

  getGames(sort: string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', sort);
    search? params = new HttpParams().set('search', search): '';
    return this.http.get<APIResponse<Game>>(`${env.Base_URL}/games`, {
      params
    });
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${env.Base_URL}/games/${id}`)
  }
}
