import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    {usuario: "sergio", nombre: 'Sergio', apellido: "Ruiz", sexo: 'Masculino'},
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez", sexo: 'Masculino'},
    {usuario: "mgomez", nombre: 'Martin', apellido: "Gomez", sexo: 'Masculino'},
    {usuario: "ngarcia", nombre: 'Nicolas', apellido: "Garcia", sexo: 'Masculino'},
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez", sexo: 'Masculino'},
    {usuario: "mgomez", nombre: 'Martin', apellido: "Gomez", sexo: 'Masculino'},
    {usuario: "ngarcia", nombre: 'Nicolas', apellido: "Garcia", sexo: 'Femenino'}
  ];

  constructor() { }

  getUsuario(){
    // Retorna una copia de lista de usuarios
    return this.listaUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listaUsuarios.splice(index, 1);
  } 

  agregarUsuario(usuario: Usuario) {
    this.listaUsuarios.unshift(usuario);
  }
}
