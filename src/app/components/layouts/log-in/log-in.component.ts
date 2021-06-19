import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private router : Router,
    private loginService : LoginService
  ) { }

  ngOnInit(): void {
  }

  async onClickSubmit(values: NgForm){
    let result = await this.loginService.login(values);
    alert(JSON.stringify(result));
  }

  routeToRegister(){
    this.router.navigate(["register"]);
  }

}
