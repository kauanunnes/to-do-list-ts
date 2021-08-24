import { Prioridade, Tarefa } from "./Tarefa";
import uniqid from "../../node_modules/uniqid/index.js";

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
    // console.log(JSON.parse(localStorage.getItem('listaDeTarefas')));

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.adicionarTarefa();
    });
  }

  removerTarefa(task: Tarefa) {
    this.tarefas.splice(this.tarefas.indexOf(task), 1);

    localStorage.setItem("listaDeTarefas", JSON.stringify(this.tarefas));
  }

  adicionarTarefa() {
    if (!this.input.value) return;

    let task = new Tarefa(this.input.value, Prioridade.baixa, uniqid());

    this.tarefas.push(task);

    let tarefas: Tarefa[] = JSON.parse(localStorage.getItem("listaDeTarefas"));

    tarefas.push(task);

    localStorage.setItem("listaDeTarefas", JSON.stringify(tarefas));

    this.mostrarTarefas();

    this.input.value = "";
  }

  mostrarTarefas(): void {
    this.tabela.innerHTML = "";
    let tarefasStoraged: Tarefa[] = JSON.parse(
      localStorage.getItem("listaDeTarefas")
    );
    tarefasStoraged.forEach((value, index) => {
      let tr = document.createElement("tr");
      tr.id = value.id;
      tr.className = value.finalizada ? "done" : "";
      tr.innerHTML = `
        <td>
          <input type="checkbox">
        </td>
        <td>
          ${value.descricao}
        </td>
        <td>
          <i class="material-icons">delete</i>
        </td>
  
      
      `;
      this.tabela.appendChild(tr);
      if (value.finalizada) tr.querySelector('input').checked = true
      tr.querySelector("input").addEventListener("click", (e) => {
        const input: HTMLInputElement = <HTMLInputElement>e.target;
        value.finalizada = input.checked;
        input.checked ? (tr.className = "done") : (tr.className = "");
        localStorage.setItem('listaDeTarefas', JSON.stringify(tarefasStoraged))  
      });
      this.tabela
        .querySelector(`#${tr.id} td i`)
        .addEventListener("click", () => {
          this.tabela.querySelector(`#${tr.id}`).remove();
          this.removerTarefa(value);
        });

      console.log(value);

    })
    for (let tarefa of tarefasStoraged) {
    }
  }
}
