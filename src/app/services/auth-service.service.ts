import { Inject, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public isLogedIn: boolean = false;

  constructor(private router: Router) { }

  public storeOnLocalStorage(username: FormControl): void {

    if (username.value.length >= 3) {
      localStorage.setItem('username', JSON.stringify(username.value));
      this.isLogedIn = true;
      localStorage.setItem('isLogedIn', JSON.stringify(this.isLogedIn));
      this.router.navigateByUrl('/dashboard');
    }
  }

}
