import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resposta, ResponseCreate, RequestCreate, RespostaUser, RequestUpdate, ResponseUpdate } from './usuarios.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = "https://reqres.in/api/users";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Resposta> {
    return this.http.get<Resposta>(this.url);
  }

  createUsers(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request)
  }

  getUser(id: string): Observable<RespostaUser> {
    const url = `${this.url}/${id}`
    return this.http.get<RespostaUser>(url);
  }

  updateUser(id: string, body: RequestUpdate): Observable<ResponseUpdate>{
    const url = `${this.url}/${id}`;
    return this.http.put<ResponseUpdate>(url, body);
  }

  deleteUser(id: string): Observable<any>{
    const url = `${this.url}/${id}`;
    return this.http.delete<any>(url);
  }
}
