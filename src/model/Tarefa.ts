export class Tarefa {
  descricao: string;
  finalizada: boolean;
  prioridade?: Prioridade;

  constructor(descricao: string, prioridade: Prioridade) {
    this.descricao = descricao;
    this.prioridade = prioridade || Prioridade.baixa;
    this.finalizada = false;
  }

  toRow(): HTMLTableRowElement {
    let tr = document.createElement("tr");
    tr.className = this.finalizada ? "done" : "";
    tr.innerHTML = `
      <td>
        <input type="checkbox">
      </td>
      <td>
        ${this.descricao}
      </td>
      <td>
        <i class="material-icons">delete</i>
      </td>

    
    `;
    tr.querySelector("input").addEventListener("click", (e) => {
      const input: HTMLInputElement = <HTMLInputElement>e.target;
      this.finalizada = input.checked
      input.checked ? (tr.className = "done") : (tr.className = "");
    });

    return tr;
  }
}

export enum Prioridade {
  baixa = 3,
  media = 2,
  alta = 1,
}
