import { Injectable } from '@angular/core';
import { WebApiService } from '@services/api-global/web-api.service';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private webapi: WebApiService) { }

  register(value:NgForm){
    return this.webapi.post('authen/register',value);
  }
}
