import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  getEndereco(cep: string) 
  {
    return this.http.get<any>(`http://viacep.com.br/ws/${cep}/json/`)
  }

  // Exemplo de função de Post
  cadastrarExemplo(nome: string)
  {
    return this.http.post<any>(`http://localhost:8080/cadastrar`, nome)
  }

}
