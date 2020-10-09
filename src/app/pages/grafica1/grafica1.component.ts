import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  labels1 = ['Download Sales  111111111111', 'In-Store Sales 111111111111', 'Mail-Order Sales 111111111111'];
  data1 = [
    [350, 450, 100],
    [50, 150, 120]
  ];

  labels2 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data2 = [
    [40, 10, 50],
    [50, 150, 120]
  ];

  labels3 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data3 = [
    [3520, 450, 100],
    [50, 1250, 120]
  ];

  labels4 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data4 = [
    [350, 4250, 100],
    [50, 2150, 14420]
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
