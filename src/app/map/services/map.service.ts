import { Injectable } from '@angular/core';
import { Marker, Map, LngLatLike, Popup, LngLatBounds } from 'mapbox-gl';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map?: Map;
  private markes: Marker[] = [];

  get isMapReady() {
    return !!this.map;
  }

  setMap(map: Map) {
    this.map = map;
  }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) throw Error('El mapa no esta inicializado');

    this.map?.flyTo({
      zoom: 14,
      center: coords,
    });
  }

  // createMarkersFromPlaces(places: any[], userLocation: [number, number]) {
  //   if (!this.map) throw Error('Mapa no existe');
  //
  //   this.markes.forEach((marker) => marker.remove());
  //
  //   const newMarkers = [];
  //
  //   for (const place of places) {
  //     const [lng, lat] = place.center;
  //     const popup = new Popup().setHTML(`
  //       <h6>${place.text}</h6>
  //       <span>${place.place_name}</span>
  //       `);
  //     const newMarker = new Marker()
  //       .setLngLat([lng, lat])
  //       .setPopup(popup)
  //       .addTo(this.map);
  //
  //     newMarkers.push(newMarker);
  //   }
  //
  //   this.markes = newMarkers;
  //
  //   if (places.length === 0) return;
  //
  //   // Limites del mapa
  //   const bounds = new LngLatBounds();
  //   newMarkers.forEach((marker) => bounds.extend(marker.getLngLat()));
  //   bounds.extend(userLocation);
  //
  //   this.map.fitBounds(bounds, {
  //     padding: 200,
  //   });
  // }
}
