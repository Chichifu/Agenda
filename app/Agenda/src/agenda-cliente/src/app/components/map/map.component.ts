import {Component, OnInit} from '@angular/core';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  activity: any;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    this.activity = MapService.plotActivity();
  }

}
