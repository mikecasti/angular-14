import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cicle',
  templateUrl: './life-cicle.component.html',
  styleUrls: ['./life-cicle.component.css']
})
export class LifeCicleComponent implements OnInit {

  constructor( ) { 
    console.log('Constructor')
  }

  ngOnInit() { 
    console.log('onInit')
  }

}