import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent  {
  router: Router;
  isAuth: String;
  currentUrl: String;

  constructor(router: Router) {
    this.router = router;
    this.currentUrl = '';
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (localStorage.getItem('token') !== null) {
        this.isAuth = 'yes';
      }else {
        this.isAuth = 'no';
      }
    });
  }
  logout(): void {
    alert('Uspesan logout');
    localStorage.removeItem('token');
    this.router.navigate(['']);
    if (localStorage.getItem('token') !== null) {
      this.isAuth = 'yes';
    }else{
      this.isAuth = 'no';
    }
  }
}
