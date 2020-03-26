import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './usuarios/create-user/create-user.component';
import {FormsModule} from "@angular/forms";
import { UpdateComponent } from './usuarios/update/update.component';
import { DeleteComponent } from './usuarios/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CreateUserComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
