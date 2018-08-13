import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Subscription} from 'rxjs';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() posts;
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );

    this.postsService.getPosts();
    this.postsService.emitPost();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
