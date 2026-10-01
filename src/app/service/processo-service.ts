import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ProcessoModel } from '../model/processo-model';

@Service()
export class ProcessoService {

  private http: HttpClient = inject(HttpClient)

  findAll(){
    return this.http.get<ProcessoModel[]>("http://localhost:3000/processos");
  }

  findProcessoById(id_processo: string){
    return this.http.get<ProcessoModel>(`http://localhost:3000/processos/${id_processo}`);
  }

  createProcesso(processo: ProcessoModel){
    return this.http.post<ProcessoModel>(`http://localhost:3000/processos`, processo);
  }

  updateProcesso(id_processo: string, processo: ProcessoModel){
    return this.http.put<ProcessoModel>(`http://localhost:3000/processos/${id_processo}`, processo);
  }

  deleteProcesso(id_processo: string){
    return this.http.delete<ProcessoModel>(`http://localhost:3000/processos/${id_processo}`);
  }

}
