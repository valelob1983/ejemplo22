import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor() { }

  ngOnInit() {  
  }
//la variable el rut un controlador de un input
  elRut = new FormControl('');
  elNombre = new FormControl('');
  laEdad = new FormControl('');

  persona = new FormGroup({
    elRut : new FormControl(''),
    elNombre : new FormControl(''),
    laEdad : new FormControl('')

  });

  //metodo accion grabar
  lista_persona = new Array();
  perso: any;
  grabar()  {
    //console.log('comienzo proceso');
    // entregamos los valores del controlador de grupo a la variable
    this.perso = {
      rut : this.persona.controls.elRut.value,
      nombre : this.persona.controls.ElNombre.value,
      edad : this.persona.controls.laEdad.value,

    };
    console.log(this.perso);
    this.lista_persona.push(this.perso);
    localStorage.setItem('datos',JSON.stringify(this.lista_persona));
  }
}
