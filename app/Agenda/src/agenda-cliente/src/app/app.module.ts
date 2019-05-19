import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TareasComponent} from './components/tareas/tareas.component';
import {TareasService} from './services/tareas.service';
import {MapComponent} from './components/map/map.component';
import {MapService} from './services/map.service';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TareasService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
