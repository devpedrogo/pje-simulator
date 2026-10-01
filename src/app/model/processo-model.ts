import { DateTime } from "luxon";

export class ProcessoModel{

  constructor(
    public id_processo: string,
    public nr_processo: string,
    public nr_processo_origem: string,
    public ds_complemento: string,
    public dt_inicio: DateTime,
    public dt_fim: DateTime
  ){}
}
