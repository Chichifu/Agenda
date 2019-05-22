import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TareasComponent} from './components/tareas/tareas.component';
import {TareasService} from './services/tareas.service';
import {WeatherService} from './services/weather.service';
import {TiempoComponent} from './components/tiempo/tiempo.component';
import {MapBoxComponent} from './components/map-box/map-box.component';
import {LeafletDrawModule} from '@asymmetrik/angular2-leaflet-draw';
import {LeafletModule} from '@asymmetrik/angular2-leaflet';


@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    TiempoComponent,
    MapBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    LeafletDrawModule
  ],
  providers: [TareasService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
