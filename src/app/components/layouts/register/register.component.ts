import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  onClickRegister(values: NgForm){
    alert(JSON.stringify(values));
  }

  backToLogin(){
    this.location.back();
  }



}
