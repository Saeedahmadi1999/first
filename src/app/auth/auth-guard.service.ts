import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Authentication } from "./Authentication";

@Injectable()

export class guardian implements CanActivate {

    constructor(private auth: Authentication) {
    }

    canActivate() {
        return this.auth.gaurd;
    }
}