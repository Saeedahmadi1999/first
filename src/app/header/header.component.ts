import { Authentication } from './../auth/Authentication';
import { StoreData } from './../http.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector:'headerComponent',
    templateUrl:'header.component.html',
    styleUrls:['header.component.css']
})

export class headerCmponent implements OnInit{
    par = false;
    istoken = false;
    drop = false;
    constructor(private service: StoreData, private isit:Authentication) {}

    ngOnInit() {
        this.isit.isit.subscribe(
            (bool) => this.istoken = bool
        )
    }

    dropdown() {
        this.drop = !this.drop;
    }
    click() {
       this.par = !this.par; 
    }
    
    save() {
        this.service.stroe().subscribe(
            (response:Response) => {console.log(response)}
        )
    }

    fetch() {
        this.service.getData();
    }

    logout(){
        this.isit.signout();
    }
}