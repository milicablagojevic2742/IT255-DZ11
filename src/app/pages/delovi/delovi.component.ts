/**
 * Created by Blagojevic Milica on 07-May-17.
 */
import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'delovi',
  templateUrl: './delovi.component.html',
  styleUrls: ['./delovi.component.css']
})

export class DeloviComponent {
  private data: string;

  constructor(private http: Http ) {
  }

  ngOnInit () {
    this.getData();
  }

  getData() {
    this.http.get('http://localhost/IT255-DZ10/php/deloviBaza.php')
        .subscribe(res => this.data = res.json());
  }
}
