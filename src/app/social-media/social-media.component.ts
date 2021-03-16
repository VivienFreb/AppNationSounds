import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  public social_medias;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get<any>('http://localhost:8000/api/festivals/1').subscribe(data => {
      this.social_medias = data['hydra:member'];
      console.log('Festivals');
      console.log(this.social_medias);
    });
  }

}
