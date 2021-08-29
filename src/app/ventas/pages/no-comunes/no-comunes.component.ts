import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect Pipe
  nombre: string = 'Jhosep';
  genero: string = 'masculino';

  generoMapping = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  saludoMapping = {
    masculino: 'saludarlo',
    femenino: 'saludarla',
  };

  //i18nPlural Pipe
  clientes: string[] = ['Jhosep', 'Geyvi', 'Atenea', 'Fanny', 'Paquito'];
  pluralMapping = {
    '=0': 'tenemos 0 clientes activos.',
    '=1': 'tenemos 1 cliente activos.',
    other: 'tenemos # clientes activos.',
  };

  //metodos
  cambiarPersona = () => {
    this.nombre = 'Geyvi';
    this.genero = 'femenino';
  };

  borrarCliente = () => {
    this.clientes.pop();
  };
}
