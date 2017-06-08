/**
 * Created by Blagojevic Milica on 24-May-17.
 */

import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
    selector: 'dodajDelove',
    templateUrl: `./dodajDelove.component.html`,
    styleUrls: ['./dodajDelove.component.css']
})

export class DodajDeloveComponent  {

    http: Http;
    router: Router;
    data: string;
    headers: Headers;
    postResponse: Response;

    dodajDeoForm = new FormGroup({
        name: new FormControl(),
        price: new FormControl(),
        manufacturer: new FormControl(),
        type: new FormControl()
    });

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['']);
        }
    }

    dodaj(): void {
        this.data = 'name=' + this.dodajDeoForm.value.name + '&price=' + this.dodajDeoForm.value.price
            + '&manufacturer=' + this.dodajDeoForm.value.manufacturer + '&type=' + this.dodajDeoForm.value.type;
        this.headers = new Headers();
        this.headers.append('token', localStorage.getItem('token'));
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/IT255-DZ10/php/dodajDeo.php', this.data, { headers: this.headers })
            .map(res => res)
            .subscribe( data => this.postResponse = data,
                err => alert(JSON.stringify(err)), () => {
                    if (this.postResponse['_body'].indexOf('error') === -1) {
                        this.router.navigate(['/delovi']);
                    }else {
                        alert('Neuspeh');
                    }
                }
            );
        alert('Uspesan unos dela!');
    }

}