import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class BlogSliderComponent implements OnInit {
  public blog_post = [];
  public currentSlide = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get<any>('http://185.216.25.16/api/blogs').subscribe(data => {
      this.blog_post.push(data['hydra:member']);
      console.log('Blog');
      console.log(this.blog_post);
    });
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.blog_post[0].length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.blog_post[0].length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
