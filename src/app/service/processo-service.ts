import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ProcessoModel } from '../model/processo-model';

@Service()
export class ProcessoService {

  private http: HttpClient = inject(HttpClient)

  findAll(){
    return this.http.get<ProcessoModel[]>("http://localhost:3000/processos");
  }
}
