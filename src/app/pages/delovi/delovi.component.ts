/**
 * Created by Blagojevic Milica on 07-May-17.
 */
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'delovi',
  templateUrl: './delovi.component.html',
  styleUrls: ['./delovi.component.css']
})

export class DeloviComponent {
  private data: Object[];
  private router: Router;
  headers: Headers;

  constructor(private http: Http, router: Router) {
    this.router = router;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('token', localStorage.getItem('token'));
    http.get('http://localhost/IT255-DZ10/php/deloviBaza.php', {headers: this.headers})
        .map(res => res.json()).share()
        .subscribe(data => {
              this.data = data;
            },
            err => {
              this.router.navigate(['./']);
            }
        );
  }
  public ukloniDeo(event: Event, item: Number) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers.append('token', localStorage.getItem('token'));
    this.http.get('http://localhost/IT255-DZ10/php/deleteDeo.php?id=' + item, {headers: this.headers}) .subscribe( data => {
        event.srcElement.parentElement.parentElement.remove();
    });
  }
  public pogledajDeo(item: Number) {
    this.router.navigate(['/deo', item]);
  }

  public promeniDeo(item: Number) {
      this.router.navigate(['/promeniDeo', item]);
  }
}
