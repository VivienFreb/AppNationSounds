import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  public blog_posts = [];
  public currentSlide = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get<any>('http://185.216.25.16/api/blogs').subscribe(data => {
      this.blog_posts.push(data['hydra:member']);
      console.log('Blog Posts');
      console.log(this.blog_posts);
    });
  }
}
