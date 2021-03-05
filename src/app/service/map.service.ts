import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.776;
  lng = -122.414;
  zoom = 3;
  geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.032, 38.913]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.414, 37.776]
        },
        properties: {
          title: 'Scène 1',
          description: 'Johnny Sins joue avec sa teub à la batterie'
        }
      }
    ]
  };

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  buildMap(){
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
  }
}
