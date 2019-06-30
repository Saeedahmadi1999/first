import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Injectable()
export class Authentication {
    token: string;
    isit = new Subject<boolean>();
    gaurd = false;
    signuperr:string;

    constructor(private router: Router) { }
    signup(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => firebase.auth().currentUser.getIdToken()
                .then((tok: string) => {
                    this.token = tok;
                    this.isit.next(true);
                    this.gaurd = true;
                    this.router.navigate(['/recipe']);
                }))
            .catch(error => this.signuperr = error.message);
    }
    signin(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => firebase.auth().currentUser.getIdToken()
                .then((tok: string) => {
                    this.token = tok;
                    this.isit.next(true);
                    this.gaurd = true;
                    this.router.navigate(['/recipe']);
                }))
            .catch(error => this.signuperr = error.message);
    }
    gettoken() {
        firebase.auth().currentUser.getIdToken()
            .then((tok: string) => this.token = tok);
        return this.token;
    }
    signout() {
        firebase.auth().signOut();
        this.isit.next(false);
        this.gaurd = false;
        this.router.navigate(['/']);
    }
}
