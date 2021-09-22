import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,
              private navController: NavController) {}

  irPagina2(){
    this.router.navigate(['/pagina2']);
  }
  irPagina3(){
    this.navController.navigateForward(['/pagina3']);
  }

    saludo='hola mundito';
}
