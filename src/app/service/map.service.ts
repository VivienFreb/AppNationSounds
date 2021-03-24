import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private points;

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 48.94929861906203;
  lng = 2.312537711324872;
  zoom = 14;
  geojson = {
    type: 'FeatureCollection',
    features: []
  };

  constructor(private http: HttpClient) {
    // @ts-ignore
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  async buildMap(){

    await this.http.get<any>('http://185.216.25.16/api/p_o_is').subscribe(data => {
      this.points = data['hydra:member'];

      this.points.forEach(point => {
        if(point['Longitude']){

          const longitude = point['Longitude'];
          const latitude = point['Latitude'];
          const nom = point['Nom'];
          const description = point['Description'];

          let newPoint = {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [latitude, longitude]
            },
            properties: {
              title: nom,
              description: description,
              icon: 'theatre'
            }
          }

          this.geojson.features.push(newPoint);
        }
      })

      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: this.zoom,
        center: [this.lng, this.lat]
      })

      this.geojson.features.forEach((marker) => {
        const popup = new mapboxgl.Popup()
          .setHTML('<h1>' + marker.properties.title + '</h1><p>' + marker.properties.description + '</p>');

        const markers = new mapboxgl.Marker()
          .setLngLat(marker.geometry.coordinates)
          .setPopup(popup)
          .addTo(this.map);
      });

      this.map.addControl(new mapboxgl.NavigationControl());

      // Add geolocate control to the map.
      this.map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      );
    });


  }
}
