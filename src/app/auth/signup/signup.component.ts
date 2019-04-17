import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Authentication } from './../Authentication';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: Authentication) { }

  ngOnInit() {
  }

  save(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    this.service.signup(email, pass);
  }
}
