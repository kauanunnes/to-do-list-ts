// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa, Prioridade } from "./model/Tarefa";
import { ListaDeTarefas } from "./model/ListaDeTarefas";

let lista = new ListaDeTarefas(document.querySelector('main'))


/*window.addEventListener("load", () => {
  showTasks(tarefasAtuais);
  handleCheck();

  document.querySelector("main button").addEventListener("click", (e) => {
    e.preventDefault();
    var inputElement = <HTMLInputElement>document.querySelector("input");
    if (!inputElement.value) {
      handleSuccess("Campo vazio!", "#ff4d4d");
      return;
    }

    let permissionToContinue: boolean = true;
    let taskDescription: string;

    if (inputElement.value.split("")[0] !== "#") {
      taskDescription = inputElement.value;
    } else {
      taskDescription = inputElement.value.split("").splice(5).join("");
    }

    tarefasAtuais.forEach((task) => {
      if (task.descricao.toLowerCase() === taskDescription.toLowerCase()) {
        handleSuccess("Essa tarefa já existe!", "#ff4d4d");
        permissionToContinue = !permissionToContinue;
      }
    });

    if (!permissionToContinue) return;

    let priority: Prioridade;

    switch (inputElement.value.split("")[1]) {
      case "1":
        priority = Prioridade.alta;
        break;
      case "2":
        priority = Prioridade.media;
        break;
      case "3":
        priority = Prioridade.baixa;
        break;
      default:
        priority = Prioridade.baixa;

        break;
    }

    let task = new Tarefa(taskDescription, priority);

    handleNewTask(task);
    handleCheck();
    handleSuccess("Nova tarefa adicionada com sucesso.", "#00cc44");

    inputElement.value = "";
  });
});

function handleNewTask(task: Tarefa): void {
  tarefasAtuais.push(task);
  let table: HTMLTableElement = <HTMLTableElement>(
    document.querySelector("main table#table")
  );
  let newRow = task.toRow();
  switch (task.prioridade) {
    case 1:
      table.insertBefore(newRow, table.querySelector("table#table tr"));
      break;
    case 2:
      let permission:boolean = true
      table.querySelectorAll("table#table tr").forEach((value) => {
        if (value.querySelectorAll("td")[2].textContent === "[baixa]" && permission) {
          permission = false
          table.insertBefore(newRow, value);
        } 
      });
      break;
    case 3:
      table.appendChild(newRow);
      break;
    default:
      break;
  }

  document.querySelectorAll("i").forEach((item) => {
    item.addEventListener("click", (event) => {
      const btnDelete = event.currentTarget;
      if (btnDelete instanceof Element) {
        const task =
          btnDelete.parentElement.parentElement.querySelectorAll("td")[1]
            .textContent;
        btnDelete.parentElement.parentElement.remove();

        tarefasAtuais.filter((currentTask, index) => {
          if (currentTask.descricao === task) {
            tarefasAtuais.splice(index, index + 1);
          }
        });
      }
    });
  });
}

@arr array you want to listen to
   @callback function that will be called on any change inside array

function listenChangesinArray(arr: Tarefa[], callback: Function) {
  // Add more methods here if you want to listen to them
  ["push"].forEach((m) => {
    arr[m] = function () {
      var res = Array.prototype[m].apply(arr, arguments); // call normal behaviour
      callback.apply(arr, arguments); // finally call the callback supplied
      return res;
    };
  });
}

listenChangesinArray(tarefasAtuais, () => {
  if (tarefasAtuais.length === 0) return;
  handleCheck();
});

function showTasks(tarefas: Tarefa[]) {
  tarefas.forEach((task) => {
    let table = <HTMLTableElement>document.querySelector("main table#table");
    let checkbox = <HTMLInputElement>document.createElement("input");
    checkbox.type = "checkbox";
    let newRow = <HTMLTableRowElement>document.createElement("tr");
    let newCell = <HTMLTableCellElement>document.createElement("td");
    let newCellPriority = <HTMLTableCellElement>document.createElement("td");
    let newCellTask = newCell.cloneNode();
    let newCellIcon = newCell.cloneNode();
    let deleteIcon = <HTMLLIElement>document.createElement("i");
    deleteIcon.className = "material-icons";

    deleteIcon.textContent = "delete";
    newCell.appendChild(checkbox);
    newCellTask.textContent = task.descricao;

    newCellIcon.appendChild(deleteIcon);

    newRow.append(newCell, newCellTask, newCellPriority, newCellIcon);
    switch (task.prioridade) {
      case 1:
        newCellPriority.textContent = "[alta]";
        table.insertBefore(newRow, table.querySelector("table#table tr"));

        break;
      case 2:
        newCellPriority.textContent = "[média]";
        table.querySelectorAll("table#table tr").forEach((value) => {
          if (value.querySelectorAll("td")[2].textContent === "[baixa]") {
            table.insertBefore(newRow, value);
            return false;
          }
          table.appendChild(newRow);
        });

        break;
      case 3:
        newCellPriority.textContent = "[baixa]";
        table.appendChild(newRow);

        break;
      default:
        break;
    }

    // table.appendChild(newRow);
    document.querySelectorAll("i").forEach((item) => {
      item.addEventListener("click", (event) => {
        const btnDelete = event.currentTarget;
        if (btnDelete instanceof Element) {
          const task =
            btnDelete.parentElement.parentElement.querySelectorAll("td")[1]
              .textContent;
          btnDelete.parentElement.parentElement.remove();

          tarefasAtuais.filter((currentTask, index) => {
            if (currentTask.descricao === task) {
              tarefasAtuais.splice(index, index + 1);
            }
          });
        }
      });
    });
  });
}

function handleCheck() {
  document
    .querySelectorAll('table#table input[type="checkbox"]')
    .forEach((input) => {
      input.addEventListener("click", (e) => {
        const checkbox = e.target;
        if (checkbox instanceof HTMLInputElement) {
          if (checkbox.checked) {
            const task =
              checkbox.parentElement.parentElement.querySelectorAll("td")[1]
                .textContent;

            tarefasAtuais.filter((currentTask) => {
              if (currentTask.descricao === task) {
                currentTask.finalizada = true;
              }
            });

            checkbox.parentElement.parentElement.setAttribute("class", "done");
          } else {
            checkbox.parentElement.parentElement.setAttribute("class", "");
          }
        }
      });
    });
}
*/
function handleSuccess(message: string, bgColor: string) {
  let errorsContainer = <HTMLDivElement>document.createElement("div");
  errorsContainer.className = "errors";
  document.querySelector("body").appendChild(errorsContainer);
  errorsContainer.setAttribute("class", "errors activated");

  let snackError = document.createElement("div");
  snackError.setAttribute("class", "snack-container");
  snackError.style.background = bgColor;

  let errorLabel = <HTMLSpanElement>document.createElement("span");
  errorLabel.setAttribute("class", "error");
  errorLabel.innerHTML = message;

  snackError.appendChild(errorLabel);
  errorsContainer.appendChild(snackError);

  setTimeout(() => {
    errorsContainer.setAttribute("class", "errors desactive");
  }, 3000);
  setTimeout(() => {
    errorsContainer.setAttribute("class", "errors");
    errorsContainer.querySelectorAll(".snack-container").forEach((value) => {
      errorsContainer.removeChild(value);
      errorsContainer.remove();
    });
  }, 3500);
}
