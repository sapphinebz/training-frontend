import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  private url:string;
  private headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
  constructor(private httpClient: HttpClient) {
      this.url = environment.baseUrl;
  }

  login(action :string , value : NgForm){
    const _url = this.url + action;
    return this.httpClient.post(_url, value, {headers : this.headers}).toPromise();
  }

}
