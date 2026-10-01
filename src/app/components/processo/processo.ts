import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProcessoService } from '../../service/processo-service';
import { Observable } from 'rxjs';
import { ProcessoModel } from '../../model/processo-model';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoFormDialog } from '../processo-form-dialog/processo-form-dialog';

@Component({
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  selector: 'app-processo',
  styleUrl: './processo.css',
  templateUrl: './processo.html',
})
export class Processo implements OnInit{

  private dialog = inject(MatDialog);
  processoService = inject(ProcessoService);

  ngOnInit(): void {
    this.loadProcessos()
  }

  processosSignal = signal<ProcessoModel[]>([]);

  // 2. O DataSource reage automaticamente sempre que o postsSignal mudar
  dataSource = computed(() => {
    return new MatTableDataSource<ProcessoModel>(this.processosSignal());
  });

  displayedColumns: string[] = [
    'id',
    'numero',
    'origem',
    'descricao',
    'datas',
    'edit',
    'delete',
  ];

  loadProcessos() {
    this.processoService.findAll().subscribe({
      next: (result) => {
        this.processosSignal.set(result);
      },
      error: (err) => {
        console.error('Erro ao buscar posts:', err);
      },
    });
  }

  openNewProcessoFormDialog(){
    const dialogRef = this.dialog.open(ProcessoFormDialog);

    dialogRef.afterClosed().subscribe((result) => {
      this.loadProcessos();
      // console.log(result);
    });
  }

  openEditProcessoFormDialog(processo_id: string){
    const dialogRef = this.dialog.open(ProcessoFormDialog, { data: {id: processo_id}, });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadProcessos();
      // console.log(result);
    });
  }

  deleteProcesso(processo_id: string){
    this.processoService.deleteProcesso(processo_id)
    .subscribe({
      next: () => {
        console.log('Post deletado com sucesso');
        this.loadProcessos(); // Recarrega a tabela chamando o backend de novo
      },
      error: (err) => {
        console.error('Erro ao deletar o post:', err);
      }
    });
  }

}
