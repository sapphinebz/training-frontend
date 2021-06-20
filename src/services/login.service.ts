import { Injectable } from '@angular/core';
import { WebApiService } from '@services/api-global/web-api.service';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private webapi: WebApiService
  ) {}

  login(value:NgForm){
    return this.webapi.post('authen/login',value);
  }
}
