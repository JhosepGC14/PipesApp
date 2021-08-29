import { Component, OnInit } from '@angular/core';
// importar siempre el PrimeNgConfig para asi luego en el constructor activar el efecto ripple
import { PrimeNGConfig } from 'primeng/api'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
