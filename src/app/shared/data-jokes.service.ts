import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import { map } from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ChuckJokes} from "@app/ff-test/jokes";

@Injectable()
export class DataJokes{
  query: string ;

  url = 'https://api.chucknorris.io/jokes/search?query=';
  constructor(private http: HttpClient) { }

  addSearch(query: string){
    this.query = query;
  }

  getChuckJokes(): Observable<ChuckJokes[]>{
    return this
      .http.get<ChuckJokes[]>(`${this.url}${this.query}`).pipe(map((data: any) => data.result ))
  }
}