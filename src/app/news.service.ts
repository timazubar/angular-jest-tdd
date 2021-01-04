import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INewsItem} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiUrl = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=545054ab22e9474b82aed84d211dcf1b';

  constructor(private http: HttpClient) { }

  getNews(): Observable<INewsItem> {
    return this.http.get(this.apiUrl);
  }
}
