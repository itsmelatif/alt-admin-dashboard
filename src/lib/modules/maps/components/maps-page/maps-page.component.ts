import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../services/maps.service';
import { IMapsSearch, IResultMaps } from '../../interfaces/maps-interface';

@Component({
  selector: 'alt-admin-maps-page',
  templateUrl: './maps-page.component.html',
  styleUrls: ['./maps-page.component.scss']
})
export class MapsPageComponent implements OnInit {
  zoom = 14;
  center!: google.maps.LatLngLiteral;
  markers: any = [];

  constructor(
    private mapsService: MapsService
  ){

  }

  ngOnInit(): void {
    this.getCurrentLocation();
  }


  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      this.markerMaps(this.center.lat, this.center.lng, 'Current Location');
      this.getListStation(this.center.lat, this.center.lng);
    });
  }

  getListStation(lat: number, lng: number){
    const payload: IMapsSearch = {
      lat: lat,
      lng: lng,
      keyword: 'gas',
      type: 'gas_station',
      radius: 1000
    }

    this.mapsService.getNearestGas(payload).subscribe({
      next: (res) => {
        for (let index = 0; index < res.results.length; index++) {
          const getMarker = res.results[index] as IResultMaps;

          this.markerMaps(
            getMarker.geometry.location.lat,
            getMarker.geometry.location.lng,
            getMarker.name
          )

          if(index==2){
            break;
          }
        }

      },
      error: () => {
        alert('cors detected');
      },
      complete: () => {

      }
    });
  }

  markerMaps(lat: number, lng: number, label: string){
    const marker = {
      position: {
        lat: lat,
        lng: lng
      },
      label: {
        color: '#000',
        text: label
      },
      title: label
    }

    this.markers.push(marker);
  }

}
