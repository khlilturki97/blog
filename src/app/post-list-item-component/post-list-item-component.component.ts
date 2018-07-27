import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle;
  @Input() postContent;
  @Input() postLoveIts;
  @Input() postCreatedAt;
  constructor() { }

  ngOnInit() {
  }


  love() {
    this.postLoveIts++;
  }

  loveNo() {
    this.postLoveIts--;
  }

}
