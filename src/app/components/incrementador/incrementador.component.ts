import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() progress: number = 50;
  @Input() clase: string = 'btn btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  // getProgress() {
  //   return `${this.progress}%`
  // }

  cambiarValor( valor : number) {
    if (this.progress >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progress = 100;
    }
    if (this.progress <= 0 && valor < 0) {
      this.valorSalida.emit(100);
      return this.progress = 0;
    }
    this.progress = this.progress + valor;
    this.valorSalida.emit(this.progress);
  }

  onChange( valor: number) {
    console.log(valor);
    if (valor > 100) {
      this.progress = 100;
    } else if(valor < 0) {
      this.progress = 0;
    } else {
      this.progress = valor;
    }
    this.valorSalida.emit(valor);
    

  }

}
