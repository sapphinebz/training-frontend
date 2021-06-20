import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '@services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  isError: boolean = false;
  errorMessage : string;
  constructor(
    private router : Router,
    private location:Location,
    private registerService : RegisterService
  ) { }

  ngOnInit(): void {
  }

  async onClickRegister(values: NgForm){
    try {
      let result = await this.registerService.register(values).toPromise();
      if (result.result == 'ok') {
        this.isError = false;
        this.router.navigate(['/login']);
       } else {
        this.isError = true;
       }
    } catch (error) {
      this.isError = true;
      this.errorMessage = JSON.stringify(error.error.message);
    }
  }

  backToLogin(){
    this.location.back();
  }



}
