import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

export const MantenedorRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'usuario',
      component: UsuarioComponent,
      data: { title: 'Usuario', breadcrumb: 'Usuario' }
    }]
  }
];