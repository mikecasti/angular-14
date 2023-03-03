import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  constructor () {
    console.log('hi')
  }

  getName(name: string) : string {
    return 'Hi ' + name;
  }

  // const getNameOther1 = (name:string) => { return 'Hi ' + name; }
  // const getNameOther2 = (name:string) => 'Hi ' + name; 
  // const getNameOther3 = () => 'Hi';
  // const getNameOther4 = (name:string, lastName) => lastName;
  // const getNameOther5 = num => num*2;
  
}