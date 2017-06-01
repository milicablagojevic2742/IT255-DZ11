/**
 * Created by Blagojevic Milica on 31-May-17.
 */

import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
    selector: 'registracija',
    templateUrl: `./registracija.component.html`,
})

export class RegistracijaComponent {

    http: Http;
    router: Router;
    data: string;

    registerForma = new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
        name: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
        phone: new FormControl()
    });
    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;

        if (localStorage.getItem('token') != null) {
            this.router.navigate(['']);
        }

    }
    registracija(): void {
         this.data = 'username=' + this.registerForma.value.username + '&password=' + this.registerForma.value.password + '&name=' +
            this.registerForma.value.name + '&lastName=' + this.registerForma.value.lastName + '&email=' + this.registerForma.value.email
            + '&phone=' + this.registerForma.value.phone;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/IT255-DZ10/php/registracija.php', this.data, {headers: headers})
            .map(res => res)
            .subscribe(data => {
                    console.log(data);
                    let obj = JSON.parse(data['_body']);
                    localStorage.setItem('token', obj.token);
                    alert('Uspesna registracija!');
                    this.router.navigate(['']);
                },
                err => {
                    alert('Greska');
                    let obj = JSON.parse(err._body);
                    let element  = <HTMLElement> document.getElementsByClassName('alert')[0];
                    element.style.display = 'block';
                    element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
                }
            );
    }
}