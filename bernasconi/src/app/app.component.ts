import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>();
  addArticle(title: HTMLInputElement, spam: HTMLInputElement): boolean {
    let cont = Number(spam.value);
    for(let i:number =0; i< cont; i++)  //Ciclo For in typescript
 {
  this.articles.push(title.value);
 }
  console.log(this.articles);
  return false;
  
  }

}
