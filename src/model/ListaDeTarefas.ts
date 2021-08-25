import { Prioridade, Tarefa } from "./Tarefa";
import uniqid from "../../node_modules/uniqid/index.js";
import handleModal from "../packages/modal";

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
    let tarefasStoraged: Tarefa[] = JSON.parse(
      localStorage.getItem("listaDeTarefas")
    );

    this.tarefas = tarefasStoraged;
    this.tarefas.forEach((value, index) => {
      if (value.id == task.id) {
        this.tarefas.splice(index, 1);
      }
    });

    localStorage.setItem("listaDeTarefas", JSON.stringify(this.tarefas));

    handleModal("Tarefa removida com sucesso!", "#00cc44");
  }

  adicionarTarefa() {
    if (!this.input.value) {
      handleModal("Campo vazio.", "#ff4d4d");

      return;
    }

    let task = new Tarefa(this.input.value, Prioridade.baixa, uniqid());

    this.tarefas.push(task);

    let tarefas: Tarefa[] = JSON.parse(localStorage.getItem("listaDeTarefas"));

    tarefas.push(task);

    localStorage.setItem("listaDeTarefas", JSON.stringify(tarefas));

    this.mostrarTarefas();

    this.input.value = "";
    handleModal("Tarefa adicionada com sucesso!", "#00cc44");
  }

  mostrarTarefas(): void {
    this.tabela.innerHTML = "";
    let tarefasStoraged: Tarefa[] = JSON.parse(
      localStorage.getItem("listaDeTarefas")
    );
    this.tarefas = tarefasStoraged;
    tarefasStoraged.forEach((value) => {
      let task = new Tarefa(value.descricao, value.prioridade, value.id);
      let tr = task.toRow()
      this.tabela.appendChild(tr);

      const input: HTMLInputElement = <HTMLInputElement>tr.querySelector("input");
      if (value.finalizada) {
        tr.className = 'done'
        input.checked = true
      }

      input.addEventListener("click", (e) => {
        value.finalizada = input.checked;
        input.checked ? (tr.className = "done") : (tr.className = "");
        localStorage.setItem("listaDeTarefas", JSON.stringify(tarefasStoraged));
      });
      this.tabela
        .querySelector(`#${value.id} td i`)
        .addEventListener("click", () => {
          this.tabela.querySelector(`#${task.id}`).remove();
          this.removerTarefa(task);
        });
    });
  }
}
