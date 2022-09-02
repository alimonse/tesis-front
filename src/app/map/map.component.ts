import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MapService } from './services/map.service';
import { PlaceService } from './services/place.service';
import { Marker, Popup, Map, LngLatBounds } from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(
    private readonly _placesService: PlaceService,
    private readonly _mapService: MapService
  ) {}

  ngAfterViewInit() {
    // if (!this._placesService.userLocation)
    //   throw new Error('Sin location _placesService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      // center: this._placesService.userLocation, // starting position [lng, lat]
      center: [-78.551223, -0.262398],
      zoom: 14, // starting zoom
    });

    const popup = new Popup().setHTML(`
        <h6>Aqui estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    const marker = new Marker({ color: 'red' })
      // .setLngLat(this._placesService.userLocation)
      .setLngLat([-78.551223, -0.262398])
      .setPopup(popup)
      .addTo(map);

    const bounds = new LngLatBounds();
    bounds.extend(marker.getLngLat());
    bounds.extend([-78.551223, -0.262398]);

    map.fitBounds(bounds, {
      padding: 200,
    });

    this._mapService.setMap(map);
  }
}
