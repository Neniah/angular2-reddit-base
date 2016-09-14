// your code goes here
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'reddit-article',
  host: {
    class: 'row'
  },
  template: `
  <div className="four wide column center aligned votes">
    <div className="ui statistic">
      <div className="value">
        {{ votes }}
      </div>
      <div className="label">
        Points
      </div>
    </div>
  </div>
  <div className="twelve wide column">
    <a href="{{ link }}" class="ui large header">{{ title }}</a>
    <ul class="ui big horizontal list voters">
      <li class="item">
        <a href (click)="voteUp()">
          <i class="arrow up icon"></i>
            upvote
        </a>
      </li>
      <li class="item">
        <a href (click)="voteDown()">
          <i class="arrow down icon"></i>
          downvote
        </a>
      </li>
    </ul>
  </div>
  `
})

/*class RedditApp {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
*/

class ArticleComponente{
  votes: number
  title: string;
  link: string;

  constructor(){
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp(){
    this.votes += 1;
  }

  voteDown(){
    
  }
}
@NgModule({
  declarations: [ RedditApp ],
  imports: [ BrowserModule ],
  bootstrap: [ RedditApp ],
})

class RedditAppModule {}

platformBrowserDynamic().bootstrapModule(RedditAppModule);
