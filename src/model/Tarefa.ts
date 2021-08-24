export class Tarefa {
  descricao: string;
  finalizada: boolean;
  prioridade?: Prioridade;
  id: string;

  constructor(descricao: string, prioridade: Prioridade, id: string) {
    this.descricao = descricao;
    this.prioridade = prioridade || Prioridade.baixa;
    this.finalizada = false;
    this.id = id
  }

}

export enum Prioridade {
  baixa = 3,
  media = 2,
  alta = 1,
}
