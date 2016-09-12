// your code goes here
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'reddit',
  template: `
    <form action="" class="ui large form segment">
      <h3 className="ui header">Add a Link</h3>

      <div className="field">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" #newtitle>
      </div>

      <div className="field">
        <label htmlFor="link">Link:</label>
        <input type="text" name="link" #newlink>
      </div>
      <button (click)="addArticle(newtitle, newlink)"
          class="ui positive right floated button">
          Submit Link
      </button>
    </form>
  `
})

class RedditApp {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}

@NgModule({
  declarations: [ RedditApp ],
  imports: [ BrowserModule ],
  bootstrap: [ RedditApp ],
})

class RedditAppModule {}

platformBrowserDynamic().bootstrapModule(RedditAppModule);
