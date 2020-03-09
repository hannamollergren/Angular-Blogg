import { Injectable } from '@angular/core';
import { ArticleInterface } from './article-interface';

@Injectable({
  providedIn: 'root'
})
export class BloggDataService {
  
  newArticle; 
  latestArticles: ArticleInterface[]; // kopia av lista
  
  articles: ArticleInterface[] = [
    {rubrik: "Sommar",
    story: "I sommar ska jag och Lisa ut och resa."},
    {rubrik: "Min iller",
    story: "Min iller är den bästa som finns i världen."},
    {rubrik: "Svamp!",
    story: "Skitmysigt att gå i skogen och plocka svamp till sin svampmacka."},
    {rubrik: "Harry Potter Maraton",
    story: "Bästa filmkvällen på länge. Började på fredag, slutade på måndag."},
    {rubrik: "Skolan",
    story: "Det bästa jag gjort är att säga upp mig och börja plugga till frontendutvecklare"},
    {rubrik: "Godiscravings",
    story: "Är sjukt sugen på godis. Önskar jag var Pippi Långstrump med ett guldmynt, hade köpt hela 4gott."},
    {rubrik: "Äntligen helg!",
    story: "Längtat efter fredagen och helgen. Ska bli så skönt!"}
  ];

  getLatestArticles(){ // skicka till latestArticle comp - this.latestArticle = latestArticles();
    return this.articles.slice(-5);
  }
  

 saveTitle(){
  //? Behöver vi spara titeln separat som en sträng? Eventuellt tas denna funktionen bort.
 }

 saveStory(){
  //? Behöver vi spara storyn separat som en sträng? Eventuellt tas denna funktionen bort.
 }


  //sparar den nya artikeln och lägger till den i defaultlistan
 saveNewArticle(headline:string, storyText:string){
  
  this.newArticle = {rubrik:headline, story:storyText};

  this.articles.push(this.newArticle);
  
  console.log("Artikellistan efter pushad ny artikel: ", this.articles);
}

  constructor() {}
}