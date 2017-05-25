/**
 * Created by Blagojevic Milica on 24-May-17.
 */

import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
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

    dodajDeoForm = new FormGroup({
        name: new FormControl(),
        price: new FormControl(),
        manufacturer: new FormControl(),
        type: new FormControl()
    });

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;
    }

    dodaj(): void {
        this.data = 'name=' + this.dodajDeoForm.value.name + '&price=' + this.dodajDeoForm.value.price
            + '&manufacturer=' + this.dodajDeoForm.value.manufacturer + '&type=' + this.dodajDeoForm.value.type;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/IT255-DZ10/dodajDeo.php', this.data, { headers: this.headers })
            .subscribe(
                data => {
                    if (data['_body'] === 'ok') {
                        this.router.navigate(['']);
                    }
                }
            );
        alert('Uspesno ste uneli deo!');
    }

}