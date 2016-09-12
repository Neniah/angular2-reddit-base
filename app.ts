// your code goes here
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'hello-world',
  template: `<div><h1>Hello {{ name }} </h1></div>
  <div>
    <ul>
      <li *ngFor="let name of names">Hello {{ name }}</li>
    </ul>
  </div>
  `
})

class HelloWorld{
  name: string[];

  constructor(){
    this.name = ['María', 'Ari', 'Carlos', 'Felipe', 'Nate'];
  }
}

@NgModule({
  declarations: [ HelloWorld ],
  imports: [ BrowserModule ],
  bootstrap: [ HelloWorld ],
})

class HelloWorldAppModule {}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);
