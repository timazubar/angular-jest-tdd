import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService} from './news.service';
import {Observable, Subscription} from 'rxjs';

export interface INewsItem {
  articles?: IArticle;
}

export interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {id: string, name: string};
  title: string;
  url: string;
  urlToImage: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-jest-tdd';

  news$: Observable<INewsItem>;

  newsSub: Subscription;

  constructor(private newsService: NewsService) {
    this.news$ = newsService.getNews();
  }

  ngOnInit(): void {
    this.newsSub = this.newsService.getNews().subscribe(v => console.log(v.articles));
  }

  ngOnDestroy(): void {
    this.newsSub.unsubscribe();
  }
}
