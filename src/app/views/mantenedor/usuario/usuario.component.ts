import { Component, OnInit } from '@angular/core';
import { BaseForm } from 'app/base/baseForm';
import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent extends BaseForm implements OnInit {
  rutInput= "";
  nombreInput= "";
  apellidoInput= "";
  generoInput= "";
  fechaNacimientoInput= "";
  estadoInput = "";
  maxDate = new Date();
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {  
    super();   
  }
  ngOnInit() {
    this.usuarios = this.usuarioService.usuarios;
  }

  getToday(){
    var today = new Date();
    today.setMonth(today.getMonth()+6);

    this.maxDate = new Date(today.getFullYear(),today.getMonth() , today.getDate());
    return this.maxDate
  }

  agregar(){
    let user = new Usuario(this.rutInput, 
                          this.nombreInput, 
                          this.apellidoInput, 
                          this.generoInput, 
                          this.estadoInput, 
                          this.usuarioService.stringToDate(this.fechaNacimientoInput))

    this.usuarioService.agregarUsuario(user);
    
  }

  eliminar(index: number){
    if(index != null){
      this.usuarioService.eliminarUsuario(index);
    }
  }
}              
