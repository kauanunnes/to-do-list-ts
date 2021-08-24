export class Tarefa {
  descricao: string;
  finalizada: boolean;
  prioridade?: Prioridade;
  id: string;

  constructor(descricao: string, prioridade: Prioridade, id: string) {
    this.descricao = descricao;
    this.prioridade = prioridade || Prioridade.baixa;
    this.finalizada = false;
    this.id = id;
  }
  toRow(): HTMLTableRowElement {
    let tr = document.createElement("tr");

    tr.className = this.finalizada ? "done" : "";

    tr.innerHTML = `
        <td><input type="checkbox"></td>
        <td>${this.descricao}</td>
        <td><i class="material-icons">delete</i></td>    
    `;
    tr.id = this.id

    let checkbox = tr.querySelector("input");
    checkbox.addEventListener("click", () => {
      this.finalizada = checkbox.checked;
      tr.className = this.finalizada ? "done" : "";
    });

   
    return tr;
  }
}

export enum Prioridade {
  baixa = 3,
  media = 2,
  alta = 1,
}
