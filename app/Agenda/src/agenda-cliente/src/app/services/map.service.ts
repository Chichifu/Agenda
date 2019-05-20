import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

const apiToken = environment.MAP_BOX_API_KEY;
declare var L: any;
// @ts-ignore
const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() {
  }

  static plotActivity() {
    const myStyle = {
      color: '#3949AB',
      weight: 5,
      opacity: 0.95
    };
    mapboxgl.accessToken = apiToken;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });

    const customLayer = L.geoJson(null, {
      style: myStyle
    });

    map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl
    }));
  }
}
