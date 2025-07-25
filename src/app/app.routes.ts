import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'buscar-ciudadano',
    loadComponent: () => import('./pages/buscar-ciudadano/buscar-ciudadano.page').then( m => m.BuscarCiudadanoPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'registrar-ciudadano',
    loadComponent: () => import('./pages/registrar-ciudadano/registrar-ciudadano.page').then( m => m.RegistrarCiudadanoPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'ciudadano/:id',
    loadComponent: () => import('./pages/ciudadano/ciudadano.page').then( m => m.CiudadanoPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'ciudadano/:id/editar-datos-generales-ciudadano',
    loadComponent: () => import('./pages/editar-datos-generales-ciudadano/editar-datos-generales-ciudadano.page').then( m => m.EditarDatosGeneralesCiudadanoPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'ciudadano/:id/editar-cargos-ciudadano',
    loadComponent: () => import('./pages/editar-cargos-ciudadano/editar-cargos-ciudadano.page').then( m => m.EditarCargosCiudadanoPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'ciudadano/:id/agregar-cargo',
    loadComponent: () => import('./pages/agregar-cargo/agregar-cargo.page').then( m => m.AgregarCargoPage),
    canActivate: [AuthGuard],
  },

];
