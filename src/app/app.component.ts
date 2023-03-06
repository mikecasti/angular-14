import { Component } from '@angular/core';
import { IPerson } from './person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';

  constructor() {

    // // 20230306
    // console.log('20230306');
    // console.log('SPLICE - Para eliminar una fila de una tabla y obtiene el elemento eliminado');
    // const auxSplice0 = [1,2,3,4,5];
    // console.log('Arregle original : ', auxSplice0);
    // const auxSplice = auxSplice0.splice(1,2);    
    // console.log('auxSplice - splice(1,2): ', auxSplice);
    // console.log('Arregle original : ', auxSplice0);

    // console.log('REDUCE - Para recorrer un objeto y hacer operaciones sobre el');
    // const auxReduce = [1,2,3,4,5].reduce((previousValue, currentValue, index) => {
    //   console.log(previousValue, currentValue, index);
    //   return previousValue + currentValue;
    // }, 0);    
    // console.log('auxReduce: ', auxReduce);
    
    // console.log('JSON - ');
    // const auxJson = {
    //   id: 1,
    //   name: 'Mike',
    //   lastName: 'Casti'
    // }
    // console.log('auxJson: ', auxJson);    
    // console.log('Operadores para Json: ENTRIES, KEY y VALUES ')
    
    // const auxEntries = Object.entries(auxJson);
    // console.log('auxEntriesauxEntries: ', auxEntries);
    
    // const auxKeys = Object.keys(auxJson);
    // console.log('auxKeys: ', auxKeys);

    // const auxValues = Object.values(auxJson);
    // console.log('auxValues: ', auxValues);


    // console.log('SPREAD OPERATOR - El operador spread genera una lista de valores a partir de un array');
    // const auxSpreadA = [1,2,3,4,5];
    // const auxSpreadB = [...auxSpreadA,6,7,8,9];
    // console.log('auxSpreadA: ', auxSpreadA);
    // console.log('auxSpreadB: ', auxSpreadB);

    // console.log('REST OPERATOR - El operador rest en realidad sirve para recibir cualquier número de parámetros de una forma estructurada, mediante un array de valores.');    
    // this.getRest(1,2,'Mike',3,'Casti')

    // console.log('DESESTRUCTURACION - Es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables. Es decir, podemos extraer datos de arreglos y objectos y asignarlos a variables.');
    // const person = {
    //   id: 18,
    //   name: 'Mike',
    //   lastName: 'Casti',
    //   country: {
    //     idCountry : 1,
    //     cod: 'LP'
    //   }
    // }

    // const { country, id } = person;
    // console.log('Desestructuración: country - idPersona: ', country, id)


    // console.log('EJEMPLO GENERAL')
    // const data = {
    //   0: {
    //     id: 1,
    //     name: 'Mike',
    //     age: 41
    //   },
    //   1: {
    //     id: 2,
    //     name: 'Faby',
    //     age: 10
    //   },
    // }

    // console.log('Convertir a Array y sumar todas las edadaes')
    // const resp = Object.values(data).reduce((prev, value) => prev + value.age, 0);
    // console.log('resp: ', resp)
    
    // console.log('Convertir a Array, filtrar a las personas mayopres a 10 año y mostrar solo los ids')
    // const resp2 = Object.values(data).filter(n => n.age>10).map(p => p.id)
    // console.log('resp2: ', resp2)

    
    // //20230303
    // console.log('20230303');
    // console.log('hi');

    // const auxMap = [1, 2, 3, 4, 5].map(num => num * 2);
    // console.log('auxMap: ', auxMap);

    // const auxForEach = [1,2,3,4,5].forEach(num => num *2 )
    // console.log('auxForEach: ', auxForEach);

    // const aunFind = [1,2,3,4,5].find(num => num === 3);
    // console.log('aunFind: ', aunFind);

    // const auxFindIndex = [1,2,3,4,5].findIndex(num => num === 300);
    // console.log('auxFindIndex: ', auxFindIndex);

    // const auxIndexOf = [1,2,3,4,5].indexOf(81)
    // console.log('auxIndexOf: ', auxIndexOf);

    // const auxIndexOfString = "Hola mundo Test".indexOf("Test")
    // console.log('auxIndexOfString: ', auxIndexOfString);

    // const auxFilter = [1,2,3,4,5].filter(num => num % 2 === 0)
    // console.log('auxFilter: ', auxFilter);

    // const auxJoin = [1,2,3,4,5].join('-')
    // console.log('auxJoin: ', auxJoin);

    // const auxSplit = 'Hola ,mundo,test'.split(',')
    // console.log('auxJoin: ', auxJoin);

  }
  public person! : IPerson;
  // public person! : IPerson = {
  //   name:'',
  //   lastName: '',
  //   age:0
  // };

  student : string = "Example of Mike";

  public a = 0;
  public b = 0;

  getName(name: string): string {
    return 'Hi ' + name;
  }

  // const getNameOther1 = (name:string) => { return 'Hi ' + name; }
  // const getNameOther2 = (name:string) => 'Hi ' + name;
  // const getNameOther3 = () => 'Hi';
  // const getNameOther4 = (name:string, lastName) => lastName;
  // const getNameOther5 = num => num*2;

  getRest(...params : any[]) {
    console.log('Rest: ', params)
  }

  getPrint(event : IPerson) {
    console.log(event);
    this.person = event;

  }

  getLastName(event : any) {
    console.log(event)
  }

  printName(name : any) {
    console.log(name.value)
  }
}
