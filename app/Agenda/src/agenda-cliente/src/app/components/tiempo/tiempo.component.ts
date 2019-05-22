import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  weather;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.weatherService.getWeather(`Vigo`, `spa`).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  getWeather(ciudad: string, pais: string) {
    this.weatherService.getWeather(ciudad, pais).subscribe(
      res => {
        console.log(this.weather);
        this.weather = res;
      },
      err => console.log(err)
    );
  }

  subbmitLocation(ciudad: HTMLInputElement, pais: HTMLInputElement) {
    if (ciudad.value && pais.value) {
      this.getWeather(ciudad.value, pais.value);
      ciudad.value = '';
      pais.value = '';
    } else {
      alert('Inserte datos');
    }
    ciudad.focus();
    return false;
  }


}
