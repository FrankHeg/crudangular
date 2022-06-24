import { Component } from '@angular/core';

import { LoginServiceService } from './componentes/login-services/login-services.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login={
    nombre: null,
    contrasena: null

  }
  title = 'crudangular';
  constructor(private loginService: LoginServiceService){}

  loginUsuario(){
    this.loginService.loginUsuario(this.login).subscribe(
      datos=>{
        if(datos['resultado']=='ok'){
          alert(datos['mensaje']);
        }else{
          alert(datos['mensaje']);
        }
      }
    );
  }
}
