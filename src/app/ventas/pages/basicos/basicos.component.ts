import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'jhosep';
  nombreUpper: string = 'JHOSEP';
  nombreCompleto: string = 'JhOsEP';

  fecha: Date = new Date();
}
