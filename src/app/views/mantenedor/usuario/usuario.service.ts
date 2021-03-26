import { Injectable } from "@angular/core";
import { Usuario } from "./usuario.model";

@Injectable()
export class UsuarioService {
    usuarios: Usuario[] = [
        new Usuario('19905018-0', 'Diego', 'Díaz', 'masculino', 'activo', this.stringToDate("1998-05-29T00:00:00"))
    ];

    stringToDate(toDate: string){
        let date = new Date(toDate);
        return date;
    }

    agregarUsuario(usuario: Usuario){
        this.usuarios.push(usuario);
    }

    eliminarUsuario(index: number){
        this.usuarios.splice(index, 1);
    }
}