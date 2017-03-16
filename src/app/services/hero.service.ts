import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Hero } from '../app.component';
import { HEROES } from '../heroes';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {


  //Todo: Place in environments
  private heroesUrl = 'http://localhost:62187/api/values'

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
              .toPromise()
              .then(response => this.heroesResponse(response))
              .catch(this.handleError);
  }

  private heroesResponse(response: any): Hero[] {
       
       let data = response.json() as Hero[];
       return data;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}


