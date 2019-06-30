import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Authentication {
    token: string;
    isit = new Subject<boolean>();
    gaurd = false;

    constructor(private router: Router) {}

    // signup(email: string, password: string) {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .catch(
    //             error => console.log(error)
    //         );
    // }

    signin(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => firebase.auth().currentUser.getIdToken()
            .then(
                (tok: string) => {
                    this.token = tok;
                    this.isit.next(true);
                    this.gaurd = true;
                    this.router.navigate(['/']);
                }
            )
        )
        .catch(
            error => console.log(error)
        );
    }

    gettoken() {
        firebase.auth().currentUser.getIdToken()
        .then(
            (tok: string) => this.token = tok
        );
        return this.token;
    }

    signout() {
        firebase.auth().signOut();
        this.isit.next(false);
        this.gaurd = false;
    }
}