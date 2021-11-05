import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Observable } from 'rxjs';
import { Animais } from './animais';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private httpClient: HttpClient, private tokenService : TokenService) { }

  listaDoUsuario(nomeDoUsuario : string) : Observable<Animais>{
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append('x-access-token',token);
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`,{
      headers,
    });
  }
}
