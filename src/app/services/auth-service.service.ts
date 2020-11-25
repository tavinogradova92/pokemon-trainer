import { Inject, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public isLogedIn: boolean = false;

  constructor() { }

  public storeOnLocalStorage(username: FormControl): void {

    if (username.value.length >= 3) {
      localStorage.setItem('username', JSON.stringify(username.value));
      this.isLogedIn = true;
    }
  }

}
