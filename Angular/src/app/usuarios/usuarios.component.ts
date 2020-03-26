import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import {Resposta} from './usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  Resposta: Resposta;
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getUsers().subscribe(res => this.Resposta = res)
  }

}
