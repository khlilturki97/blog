import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  posts = [
    {
      name: 'Premier post',
      content: 'contenu',
      loveIts : 0,
      created_at: new Date()
    },
    {
      name: 'Deuxième post',
      content: 'contenu',
      loveIts : 0,
      created_at: new Date()
    },
    {
      name: 'Troisième post',
      content: 'contenu',
      loveIts : 0,
      created_at: new Date()
    }
  ];


}
