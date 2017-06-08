/**
 * Created by Blagojevic Milica on 08-Jun-17.
 */

import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'promeniDeo',
    templateUrl: `./promeniDeo.component.html`,
})

export class PromeniDeoComponent {
    http: Http;
    router: Router;
    postResponse: Response;
    route: ActivatedRoute;
    data: string;
    promeniDeoForm = new FormGroup({
        name: new FormControl(),
        price: new FormControl(),
        manufacturer: new FormControl(),
        type: new FormControl()
    });

    constructor(route: ActivatedRoute, http: Http, router: Router) {
        this.http = http;
        this.router = router;
        this.route = route;
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['']);
        }
    }

    promeni(): void {
        this.route.params.subscribe((params: Params) => {
                let id = params['id'];
                let headers = new Headers();
                this.data = 'id=' + id + '&name=' + this.promeniDeoForm.value.name + '&price=' + this.promeniDeoForm.value.price +
                    '&manufacturer=' + this.promeniDeoForm.value.manufacturer + '&type=' + this.promeniDeoForm.value.type;
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                headers.append('token', localStorage.getItem('token'));
                this.http.post('http://localhost/IT255-DZ10/php/promeniDeo.php', this.data, { headers: headers })
                    .map(res => res)
                    .subscribe( data => this.postResponse = data,
                        err => alert(JSON.stringify(err)), () => {
                            if (this.postResponse['_body'].indexOf('error') === -1) {
                                this.router.navigate(['']);
                            }else {
                                alert('Neuspesna izmena dela');
                            }
                        }
                    );
            }
        );
    }

    vrati() {
        this.router.navigate(['/delovi']);
    }
}
