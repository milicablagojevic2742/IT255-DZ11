/**
 * Created by Blagojevic Milica on 31-May-17.
 */

import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    loginForma = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });
    http: Http;
    router: Router;
    data: string;

    constructor(http: Http,  router: Router) {
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['']);
        }
    }

    logovanje(): void {
        this.data = 'username=' + this.loginForma.value.username + '&password=' + this.loginForma.value.password;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/IT255-DZ10/php/login.php', this.data, {headers: headers})
            .map(res => res)
            .subscribe( data => {
                    let obj = JSON.parse(data['_body']);
                    localStorage.setItem('token', obj.token);
                    alert('Dobrodosli!');
                    this.router.navigate(['']);
                },
                err => {
                    alert('Nepostojeci username ili password');
                    let obj = JSON.parse(err._body);
                    let element = <HTMLElement>document.getElementsByClassName('alert')[0];
                    element.style.display = 'block';
                    element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
                }
            );
    }

}