import { Component, inject, OnInit } from '@angular/core';
import { ProcessoService } from '../../service/processo-service';
import { Observable } from 'rxjs';
import { ProcessoModel } from '../../model/processo-model';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  imports: [CommonModule, MatTableModule],
  selector: 'app-processo',
  styleUrl: './processo.css',
  templateUrl: './processo.html',
})
export class Processo implements OnInit{

  processoService = inject(ProcessoService);

  ngOnInit(): void {
    this.showProcessos()
  }

  processos: Observable<ProcessoModel[]> = this.processoService.findAll();

  displayedColumns: string[] = [
    'id',
    'numero',
    'origem',
    'descricao',
    'datas'
  ];

  showProcessos(){
    this.processos.subscribe({
      next: (processos) => { console.log("Processos na base de dados: ", processos)},
      error: (err) => console.error('Erro ao buscar processos:', err)
    })
  }

}
