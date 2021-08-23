export class Tarefa {
  descricao: string;
  finalizada: boolean;
  prioridade: Prioridade;

  constructor(descricao: string, prioridade: Prioridade) {
    this.descricao = descricao;
    this.prioridade = prioridade;
    this.finalizada = false;
  }

  toRow(): HTMLTableRowElement {
    let checkbox: HTMLInputElement = <HTMLInputElement>(
      document.createElement("input")
    );
    checkbox.type = "checkbox";

    let newRow: HTMLTableRowElement = <HTMLTableRowElement>(
      document.createElement("tr")
    );
    let deleteIcon: HTMLElement = <HTMLElement>document.createElement("i");
    deleteIcon.className = "material-icons";
    deleteIcon.textContent = "delete";

    let newCell: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );

    let newCellPriority: HTMLTableCellElement = <HTMLTableCellElement>(
      document.createElement("td")
    );

    let newCellTask = newCell.cloneNode();

    let newCellIcon = newCell.cloneNode();

    newCell.appendChild(checkbox);

    newCellTask.textContent = this.descricao;

    newCellIcon.appendChild(deleteIcon);
    switch (this.prioridade) {
      case 1:
        newCellPriority.textContent = "[alta]";
        break;
      case 2:
        newCellPriority.textContent = "[média]";

        break;
      case 3:
        newCellPriority.textContent = "[baixa]";

        break;
      default:
        break;
    }
    newRow.append(newCell, newCellTask, newCellPriority, newCellIcon);

    return newRow;
  }
}

export enum Prioridade {
  baixa = 3,
  media = 2,
  alta = 1,
}
