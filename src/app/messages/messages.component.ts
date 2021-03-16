import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
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
export class MessagesComponent implements OnInit {
  public messages = [];
  public currentSlide = 0;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get<any>('http://localhost:8000/api/information').subscribe(data => {
      this.messages.push(data['hydra:member']);
      console.log('Messages');
      console.log(this.messages);
    });
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.messages[0].length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.messages[0].length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
