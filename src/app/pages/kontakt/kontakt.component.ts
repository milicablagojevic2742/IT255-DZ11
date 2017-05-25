/**
 * Created by Blagojevic Milica on 08-May-17.
 */
import { Component } from '@angular/core';

// declare var google: any;

@Component({
  selector: 'kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})

export class KontaktComponent {

  proveri (ime: string, prezime: string, naslov: string, tekst: string, telefon: string) {
    if (ime === '') {
      alert('Polje za ime je prazno!');
    }
    if (prezime === '') {
      alert('Polje za prezime je prazno!');
    }
    if (naslov === '') {
      alert('Polje za naslov je prazno!');
    }
    if (tekst === '') {
      alert('Polje za tekst je prazno!');
    }
    if (telefon === '') {
      alert('Polje za telefon je prazno!');
    }
    if (ime !== '' && prezime !== '' && naslov !== '' && tekst !== '' && telefon !== '') {
      alert('Uspesno ste poslali poruku!');
    }
  }
  /*ngOnInit() {

    var directionsService1 = new google.maps.DirectionsService;
    var directionsDisplay1 = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay1.setMap(map);
    calculateAndDisplayRoute(directionsService1, directionsDisplay1);

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {

      var waypts = [];
      var checkboxArray: any[] = [
        'winnipeg', 'regina', 'calgary'
      ];
      for (var i = 0; i < checkboxArray.length; i++) {

        waypts.push({
          location: checkboxArray[i],
          stopover: true
        });

      }

      directionsService.route({
        origin: {lat: 41.85, lng: -87.65},
        destination: {lat: 49.3, lng: -123.12},
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function(response: string, status: string) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }*/


  }
