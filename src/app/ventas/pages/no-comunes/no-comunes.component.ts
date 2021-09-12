import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  // KeyValue Pipe
  persona = {
    nombre: 'Jhosep',
    edad: 35,
    direccion: 'Ottawa, Canadá',
  };

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  // Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5,6,

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
