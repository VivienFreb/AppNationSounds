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
  lat = 37.776;
  lng = -122.414;
  zoom = 3;
  geojson = {
    type: 'FeatureCollection',
    features: []
  };

  constructor(private http: HttpClient) {
    // @ts-ignore
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  async buildMap(){

    await this.http.get<any>('http://localhost:8000/api/p_o_is').subscribe(data => {
      this.points = data['hydra:member'];

      console.log(this.points);

      this.points.forEach(point => {
        if(point['Longitude']){
          let newPoint = {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [point['Longitude'], point['Latitude']]
            },
            properties:{
              title: 'Oui',
              description: 'Non'
            }
          }

          this.geojson.features.push(newPoint);
          console.log(newPoint)
        }
      })

      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: this.zoom,
        center: [this.lng, this.lat]
      })

      console.log("allo")
      console.log(this.geojson.features);

      this.geojson.features.forEach((marker) => {
        console.log(marker);
        console.log('marker');
        const popup = new mapboxgl.Popup()
          .setHTML('<h1>' + marker.properties.title + '</h1><p>' + marker.properties.description + '</p>');

        const markers = new mapboxgl.Marker()
          .setLngLat(marker.geometry.coordinates)
          .setPopup(popup)
          .addTo(this.map);

        console.log('allov15');
        console.log(markers);
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
