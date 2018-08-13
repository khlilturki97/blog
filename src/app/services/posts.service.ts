import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Post} from '../models/post.model';
import {post} from 'selenium-webdriver/http';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsSubject = new Subject< Post[] >();
  private posts = [
    /*{
      title: 'Premier post',
      content: 'contenu',
      loveIts : 0,
      created_at: new Date()
    },
    {
      title: 'Deuxième post',
      content: 'contenu',
      loveIts : 0,
      created_at: new Date()
    },
    {
      title: 'Troisième post',
      content: 'contenu',
      loveIts : 0,
      created_at: new Date()
    }*/
  ];


  emitPost() {
    this.postsSubject.next(this.posts);
  }

  savePost() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPost();
    });
  }


  createNewPost(post: Post) {
    this.posts.push(post);
    this.savePost();
    this.emitPost();
  }


  deletePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );

    this.posts.splice(postIndexToRemove, 1);
    this.savePost();
    this.emitPost();
  }

  constructor() { }
}
