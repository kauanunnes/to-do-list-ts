// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { ListaDeTarefas } from "./model/ListaDeTarefas";

let lista:ListaDeTarefas = new ListaDeTarefas(document.querySelector('main'))

!localStorage.getItem('listaDeTarefas') &&   localStorage.setItem('listaDeTarefas', JSON.stringify(lista.tarefas))

lista.mostrarTarefas()

