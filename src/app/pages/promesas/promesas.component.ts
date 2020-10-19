import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // return new Promise()
    const promesa = new Promise((resolve) => {
      resolve('Hola mundo');
    });
    promesa.then( value => {
      console.log(value);
      
    })
    .catch( error => {
      console.error('Error', error);
      
    })

    console.log('Termine');
    
  }


}
