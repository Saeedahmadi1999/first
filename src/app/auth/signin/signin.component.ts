import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Authentication } from './../Authentication';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  error:string;

  constructor(private service: Authentication) { }

  ngOnInit() {
  }

  save(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    this.service.signin(email, pass);
    this.error = this.service.signuperr;
  }
}
