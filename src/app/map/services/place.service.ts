import { Injectable } from '@angular/core';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  // userLocation: [number, number] | undefined
  userLocation?: [number, number];
  isLoadingPlaces = false;
  places: any[] = [];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor(
    // private readonly _httpClient: HttpClient,
    // private readonly _placesApiClient: PlacesApiClient,
    private readonly _mapService: MapService
  ) {
    this.getUserLocation().then();
  }

  async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (err) => {
          console.log(err);
          reject();
        }
      );
    });
  }

  // getPlacesByQuery(query = '') {
  //   if (query.length === 0) {
  //     this.isLoadingPlaces = false;
  //     this.places = [];
  //     return;
  //   }
  //
  //   if (!this.userLocation) throw Error('No hay userLocation');
  //
  //   this.isLoadingPlaces = true;
  //
  //   this._placesApiClient
  //     .get<any>(`/${query}.json`, {
  //       params: {
  //         proximity: this.userLocation.join(','),
  //       },
  //     })
  //     .subscribe((rta) => {
  //       console.log(rta.features);
  //       this.isLoadingPlaces = false;
  //       this.places = rta.features;
  //
  //       this._mapService.createMarkersFromPlaces(
  //         this.places,
  //         this.userLocation!
  //       );
  //     });
  // }
}
