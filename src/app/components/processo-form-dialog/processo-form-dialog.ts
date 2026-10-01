import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ProcessoService } from '../../service/processo-service';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid'
import { ProcessoModel } from '../../model/processo-model';


@Component({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  selector: 'app-processo-form-dialog',
  styleUrl: './processo-form-dialog.css',
  templateUrl: './processo-form-dialog.html',
})
export class ProcessoFormDialog {

  formTitle = 'Novo Processo';
  submitButtonLabel = 'Salvar';

  constructor(
    private processoService: ProcessoService,
    private dialogRef: MatDialogRef<ProcessoFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data : { id: string },
  ){}

  ngOnInit(){
    if(this.data){
      this.formTitle = 'Editar Processo';
      this.submitButtonLabel = 'Editar';

      this.processoService.findProcessoById(this.data.id).subscribe((processo)=>{
        this.processoForm.setValue({
          num_processo: processo.nr_processo,
          origem: processo.nr_processo_origem,
          ds_complemento: processo.ds_complemento,
          dataI: processo.dt_inicio as any,
          dataF: processo.dt_fim as any
        })
      })
    }
  }

  processoForm = new FormGroup({
    num_processo: new FormControl('', Validators.required),
    origem: new FormControl('', Validators.required),
    ds_complemento: new FormControl('', Validators.required),
    dataI: new FormControl(null, Validators.required),
    dataF: new FormControl(null, Validators.required)
  })

  onSubmit(){

    const num_processo = this.processoForm.value.num_processo!!
    const origem = this.processoForm.value.origem!!
    const ds_complemento = this.processoForm.value.ds_complemento!!
    const data_inicio = this.processoForm.value.dataI!!
    const data_fim = this.processoForm.value.dataF!!

    if(this.data){
      const processo = new ProcessoModel(this.data.id, num_processo, origem, ds_complemento, data_inicio, data_fim)

      this.processoService.updateProcesso(this.data.id, processo).subscribe(()=> {
        this.dialogRef.close();
      });
    } else{
      const processo = new ProcessoModel(uuidv4(), num_processo, origem, ds_complemento, data_inicio, data_fim)

      this.processoService.createProcesso(processo).subscribe(()=> {
        this.dialogRef.close();
      });
    }

    // console.log(this.postForm.value);
  }

  onSave(){
    // console.log("Salvo com sucesso!")
  }
}
