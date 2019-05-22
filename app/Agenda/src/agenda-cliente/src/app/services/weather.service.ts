import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_ID = '4629c660bec9b644a56ab06d6fb4f1b7';
  URI = '';

  constructor(private httpclient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.API_ID}&units=metric&q=`;

  }

  getWeather(nombreCiudad: string, codigoPais: string) {
    return this.httpclient.get(`${this.URI}${nombreCiudad},${codigoPais}`);

  }
}
