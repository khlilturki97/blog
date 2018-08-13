import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {


  @Input() post;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }


  love() {
    this.post.loveIts++;
    this.postsService.savePost();
    this.postsService.emitPost();
  }

  loveNo() {
    this.post.loveIts--;
    this.postsService.savePost();
    this.postsService.emitPost();
  }

  onRemove() {
    this.postsService.deletePost(this.post);
  }

}
