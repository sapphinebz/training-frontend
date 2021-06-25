import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { NgForm } from '@angular/forms';
import {catchError} from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  private url:string;
  private headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
  constructor(private httpClient: HttpClient) {
      this.url = environment.baseUrl;
  }

  isLoggedIn(){
    let loginResult = sessionStorage.getItem(environment.loginResult);
    return (loginResult != null && loginResult == 'ok');
  }

  post<T = any,C = NgForm>(action :string , value:C){
    const _url = this.url + action;
    return this.httpClient.post<T>(_url, value, {headers : this.headers});
  }

  postFormData<T = any,C = NgForm>(action :string , value:C){
    const _url = this.url + action;
    // const headers = new HttpHeaders({ 'Content-Type' : 'multipart/form-data' });
    // headers.append('accept', 'application/json');
    return this.httpClient.post<T>(_url, value);
  }


  delete<R>(id: number,actionUrl: string){
    const _url = this.url + actionUrl;
    return this.httpClient.delete<R>(`${_url}/${id}`);
  }



  // post(action :string , value : NgForm){
  //   const _url = this.url + action;
  //   return this.httpClient.post<any>(_url, value, {headers : this.headers});
  // }
  /**
   * exmample http://localhost:1150/api/product
   * @param action ชื่อ api อย่างเช่น product
   * @param condition เงื่อนไข request
   * @returns Observable
   */
  get<T>(action: string,condition:any = {}){
    const _url = this.url + action;
    const params = new HttpParams({fromObject:condition});
    return this.httpClient.get<T>(_url,{params,headers : this.headers})
    .pipe(catchError(err=>{
      console.error(err)
      return EMPTY;
    }))
  }

}
