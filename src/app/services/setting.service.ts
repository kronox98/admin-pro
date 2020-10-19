import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private linkTheme = document.querySelector('#theme');
  constructor() { 
    const url = localStorage.getItem('theme');    
    this.linkTheme.setAttribute('href',url );
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {    
    const links = document.querySelectorAll('.selector');
    links.forEach( element => {
      element.classList.remove('working');
      const btn = element.getAttribute('data-theme');      
      const btnThemeUrl = `./assets/css/colors/${btn}.css`;
      const currenTheme = this.linkTheme.getAttribute('href');
      if (btnThemeUrl === currenTheme) {
        element.classList.add('working');
      }
    });
  }
}
