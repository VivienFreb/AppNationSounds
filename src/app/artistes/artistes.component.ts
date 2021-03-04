import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-artistes',
  templateUrl: './artistes.component.html',
  styleUrls: ['./artistes.component.scss']
})
export class ArtistesComponent implements OnInit {
  public artistes;

  constructor(private http: HttpClient) {  }

  apiCall(msg){
    return msg;
  }

  getPicture(nom){
    let pictureName;
    let imgSrc = "assets/artistes/";
    let extension = ".png";

    nom = nom.toLowerCase();
    nom = nom.replace(/ /g , '-');
    nom = nom.replace('\'', '');
    nom = nom.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    return imgSrc + nom + extension;
  }

  makeApiCall(route){
    this.http.get<any>(route).subscribe(data => {
      this.artistes = data['hydra:member'];
    });
  }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get<any>('http://localhost:8000/api/artistes').subscribe(data => {
      this.artistes = data['hydra:member'];
      console.log(data);
    });
  }

}
