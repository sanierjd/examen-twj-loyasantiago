import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {UsuarioComponent} from "./usuario/usuario.component";
import {AgarreComponent} from "./agarre/agarre.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'usuario/:idUsuario/agarre', component: AgarreComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
