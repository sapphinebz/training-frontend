import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '@services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private location:Location,
    private registerService : RegisterService
  ) { }

  ngOnInit(): void {
  }

  async onClickRegister(values: NgForm){
    try {
      let result = await this.registerService.register(values).toPromise();
      alert(JSON.stringify(result));
    } catch (error) {
      alert(error.error.message);
    }
    
  }

  backToLogin(){
    this.location.back();
  }



}
