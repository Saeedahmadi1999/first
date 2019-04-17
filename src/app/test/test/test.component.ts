import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Output() server = new EventEmitter <{name: string, serverContent: string}>();
  @Output() content = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild("serverName") Somename: ElementRef;
  @ViewChild("serverContent") someName: ElementRef;


  serverName = "";
  serverContent = "";

  constructor() { }

  ngOnInit() {}

  addServer(){
    this.server.emit({name: this.Somename.nativeElement.value, serverContent:this.someName.nativeElement.value});
  }

  addBluePrint(){
    this.content.emit({serverName:  this.Somename.nativeElement.value, serverContent:this.someName.nativeElement.value});
  }

}
