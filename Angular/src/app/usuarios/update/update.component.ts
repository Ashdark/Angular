import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../usuarios.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  request: RequestUpdate;

  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usuariosService.getUser(this.id).subscribe(res => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ""
      }
    });
  }
    update(){
      this.usuariosService.updateUser(this.id,this.request).subscribe(res => {
        alert(`Atualizado ${res.updatedAt}, Nome: ${res.name}, Profissão ${res.job}`);
      })
  }

}
