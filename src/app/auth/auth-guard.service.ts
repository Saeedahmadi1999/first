import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Authentication } from "./Authentication";

@Injectable()

export class guardian implements CanActivate {

    constructor(private auth: Authentication) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.auth.gaurd;
    }
}