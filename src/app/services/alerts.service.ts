import { Injectable } from '@angular/core';
import Swal  from "sweetalert2";
export type icon =  'error' | 'success' | 'warning' | 'info' | 'question';
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }
  showAlert(title: string, text: string, icon: icon, confirmButtonText: string ) {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText
    });
  }

  warning() {

  }
}
