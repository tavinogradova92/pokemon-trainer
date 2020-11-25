import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {

  username = new FormControl('', [  Validators.required,
                                    Validators.minLength(3),
                                    Validators.maxLength(20)]);
  

  constructor(private AuthServiceService: AuthServiceService) { }

  ngOnInit(): void {
  }

  onLogin(receivedUsername: FormControl) {
    this.AuthServiceService.storeOnLocalStorage(receivedUsername);
  }

}
