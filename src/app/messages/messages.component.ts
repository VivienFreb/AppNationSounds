import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public messages = [];
  public currentSlide = 0;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get<any>('http://185.216.25.16/api/information').subscribe(data => {
      this.messages.push(data['hydra:member']);
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
