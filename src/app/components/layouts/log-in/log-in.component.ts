import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { WebApiService } from '@services/api-global/web-api.service';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  isError: boolean = false;
  errorMessage : string;
  constructor(
    private router : Router,
    private loginService : LoginService,
    private webapiService : WebApiService
  ) { }

  ngOnInit(): void {
    if (this.webapiService.isLoggedIn() == true){
      this.router.navigate(['/product']);
    } 
  }

  async onClickSubmit(values: NgForm){
    try {
      let result = await this.loginService.login(values).toPromise();
       if (result.result == 'ok') {
        sessionStorage.setItem(environment.loginResult, result.result);
        this.isError = false;
        this.router.navigate(['/product']);
       } else {
        this.isError = true;
       }
    } catch (error) {
      this.isError = true;
      this.errorMessage = JSON.stringify(error.error.message);
    }
  }

  routeToRegister(){
    this.router.navigate(["register"]);
  }

}
