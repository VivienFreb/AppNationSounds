import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {
  public faq_list = [];
  public currentSlide = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get<any>('http://185.216.25.16/api/f_a_qs').subscribe(data => {
      this.faq_list.push(data['hydra:member']);
      console.log('FAQ List');
      console.log(this.faq_list);
    });
  }
}
