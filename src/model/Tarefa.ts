export interface Tarefa {
  id: number,
  descricao: string,
  dataCriada: Date,
  finalizada: boolean,
  prioridade?: Prioridade,

}

export enum Prioridade {
  baixa = 3,
  media = 2,
  alta = 1
}

