import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-artistes',
  templateUrl: './artistes.component.html',
  styleUrls: ['./artistes.component.scss']
})
export class ArtistesComponent implements OnInit {
  public artistes;
  public concerts;

  constructor(private http: HttpClient) {  }

  getPictureSrc(nom){
    let pictureName;
    let imgSrc = "assets/artistes/";
    let extension = ".png";

    nom = nom.toLowerCase();
    nom = nom.replace(/ /g , '-');
    nom = nom.replace('\'', '');
    nom = nom.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    return imgSrc + nom + extension;
  }

  // makeApiCall(route){
  //   this.http.get<any>(route).subscribe(data => {
  //     this.artistes = data['hydra:member'];
  //   });
  // }

  ngOnInit(): void {
    // Get Artists via routes
    this.http.get<any>('http://185.216.25.16/api/concerts').subscribe(data => {
      this.concerts = data['hydra:member'];

      // Get Concert where Artist is
      if(this.concerts){
        this.concerts.forEach(concert => {
          this.http.get<any>('http://185.216.25.16' + concert.Artistes).subscribe(data => {
            concert.Artiste = data;
          })
        })
      }
      console.log("Concerts");
      console.log(this.concerts);
    });
  }

  formatDate(date){
    date = new Date(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let heure = hours + " : " + minutes;
    if(minutes == 0){
      heure = heure + "0";
    }
    return heure;
  }

}
