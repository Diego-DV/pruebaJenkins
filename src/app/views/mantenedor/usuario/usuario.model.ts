export class Usuario{
    constructor(public rut: string,
                public nombre: string,
                public apellido: string,
                public genero: string,
                public estado: string,
                public fechaNacimiento: Date){}
}