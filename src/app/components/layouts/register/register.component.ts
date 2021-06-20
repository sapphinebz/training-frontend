import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '@services/register.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
        console.log(result);
        this.isError = false;
        Swal.fire({
            title: 'Successful Registration',
            text:  `This username : ${result.user.username} is completed registered.`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK!'
        })
        .then(() => {
          this.router.navigate(['/login']);
        }) 
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
