import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-artiste-page',
  templateUrl: './artiste-page.component.html',
  styleUrls: ['./artiste-page.component.scss']
})
export class ArtistePageComponent implements OnInit {
  public artistes;

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
    // Simple GET request with response type <any>
    this.http.get<any>('http://185.216.25.16/api/artistes').subscribe(data => {
      this.artistes = data['hydra:member'];
      console.log(this.artistes);
    });
  }

  toggleAccordion(event){
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;

    var panel = target.nextElementSibling;
    console.log(panel);
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
      event.target.innerText = "+";
    }else{
      panel.style.maxHeight = panel.scrollHeight + "px";
      event.target.innerText = "-";
    }
  }

}
