import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function customInit();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  constructor(private _settings: SettingService) { }

  ngOnInit(): void {
    customInit();
  }

}
