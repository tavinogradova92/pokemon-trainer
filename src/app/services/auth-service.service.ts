import { Inject, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public isLogedIn: boolean = false;

  constructor() { }

  public storeOnLocalStorage(username: FormControl): void {

    let approvedUsername = JSON.stringify(username.value);

    if (approvedUsername.length >= 3) {
      localStorage.setItem('username', approvedUsername);
      this.isLogedIn = true;
    }
  }

}
