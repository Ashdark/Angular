import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent} from './usuarios/usuarios.component'
import { CreateUserComponent } from './usuarios/create-user/create-user.component';
import {UpdateComponent } from "./usuarios/update/update.component";
import {DeleteComponent} from "./usuarios/delete/delete.component";


const routes: Routes = [
  {path: 'usuarios',component: UsuariosComponent},
  {path: 'usuarios/create',component: CreateUserComponent},
  {path: 'usuarios/update/:id',component: UpdateComponent},
  {path: 'usuarios/delete/:id',component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
