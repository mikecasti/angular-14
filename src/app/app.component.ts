import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';

  constructor() {
    console.log('hi');

    const auxMap = [1, 2, 3, 4, 5].map(num => num * 2);
    console.log('auxMap: ', auxMap);

    const auxForEach = [1,2,3,4,5].forEach(num => num *2 )
    console.log('auxForEach: ', auxForEach);

    const aunFind = [1,2,3,4,5].find(num => num === 3);
    console.log('aunFind: ', aunFind);

    const auxFindIndex = [1,2,3,4,5].findIndex(num => num === 300);
    console.log('auxFindIndex: ', auxFindIndex);

    const auxIndexOf = [1,2,3,4,5].indexOf(81)
    console.log('auxIndexOf: ', auxIndexOf);

    const auxIndexOfString = "Hola mundo Test".indexOf("Test")
    console.log('auxIndexOfString: ', auxIndexOfString);

    const auxFilter = [1,2,3,4,5].filter(num => num % 2 === 0)
    console.log('auxFilter: ', auxFilter);

    const auxJoin = [1,2,3,4,5].join('-')
    console.log('auxJoin: ', auxJoin);

    const auxSplit = 'Hola ,mundo,test'.split(',')
    console.log('auxJoin: ', auxJoin);

  }

  getName(name: string): string {
    return 'Hi ' + name;
  }

  // const getNameOther1 = (name:string) => { return 'Hi ' + name; }
  // const getNameOther2 = (name:string) => 'Hi ' + name;
  // const getNameOther3 = () => 'Hi';
  // const getNameOther4 = (name:string, lastName) => lastName;
  // const getNameOther5 = num => num*2;
}
