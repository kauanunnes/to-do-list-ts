import { Prioridade, Tarefa } from "./Tarefa";

export class ListaDeTarefas {
  tarefas: Tarefa[];
  input: HTMLInputElement;
  form: HTMLFormElement;
  tabela: HTMLTableElement;

  constructor(main: HTMLElement) {
    this.input = <HTMLInputElement>main.querySelector("#tf_2do");
    this.form = <HTMLFormElement>main.querySelector("#form");
    this.tabela = <HTMLTableElement>main.querySelector("table");
    this.tarefas = [];

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.adicionarTarefa();
    });
  }

  removerTarefa(task: Tarefa) {
    this.tarefas.splice(this.tarefas.indexOf(task), 1)
  }

  adicionarTarefa() {
    if (!this.input.value) return;

    let task = new Tarefa(this.input.value, Prioridade.baixa);

    let tr = task.toRow();

    tr.querySelector("i").addEventListener("click", () => {
      tr.remove();
      this.removerTarefa(task);
    });

    this.tabela.appendChild(tr);

    this.tarefas.push(task);

    this.input.value = "";
  }
}
