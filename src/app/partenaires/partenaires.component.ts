import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.scss']
})
export class PartenairesComponent implements OnInit {
  public partenaires;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get<any>('http://185.216.25.16/api/partenaires').subscribe(data => {
      this.partenaires = data['hydra:member'];
      console.log('Partenaires');
      console.log(this.partenaires);
    });
  }

}
