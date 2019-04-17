import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @Input() element: {type:string, name:string, content:string};
  constructor() { }

  ngOnInit() {
  }

}
