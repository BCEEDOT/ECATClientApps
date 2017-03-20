import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Hero } from '../app.component';
import { HEROES } from '../heroes';

import { EntityManager, EntityQuery } from 'breeze-client';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {


  //Todo: Place in environments
  private heroesUrl = 'http://localhost:62187/api/values'

  constructor(private http: Http, private em: EntityManager, private eq: EntityQuery) { 
    this.em = new EntityManager('http://localhost/62187/odata')

  }

  getHeroes(): Promise<Hero[]> {
    let query = this.eq.from('Product');

    return this.em.executeQuery(query)
                .then(res => res.results as Hero[])

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}


