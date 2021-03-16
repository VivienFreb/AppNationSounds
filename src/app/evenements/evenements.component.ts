import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public events;

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get<any>('http://185.216.25.16/api/events').subscribe(data => {
      this.events = data['hydra:member'];
      console.log('events');
      console.log(this.events);
    });
  }

}
