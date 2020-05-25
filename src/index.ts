// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";

import { Tarefa } from "./Tarefa";

function mostrarTarefa(tarefa:Tarefa){
    
    console.log(tarefa);

    // Criar uma linha de tabela
    let tr = document.createElement("tr");

    // Adicionando class css "done" caso a tarefa já tenha sido feita...
    if(tarefa.feita){
        tr.className = "done";
    }

    // Criar um checkbox
    let check = document.createElement("input");
    check.setAttribute("type","checkbox");
    let tdCheck = document.createElement("td");
    tdCheck.appendChild(check);

    // Criando célula de texto
    let tdTexto = document.createElement("td");
    tdTexto.innerText = tarefa.texto;

    // Criando botão de delete
    let i = document.createElement("i");
    i.className = "material-icons";
    i.innerText = "delete";
    let tdi = document.createElement("td");
    tdi.appendChild(i);


    // Adicionando as células à linha
    tr.appendChild(tdCheck);
    tr.appendChild(tdTexto);
    tr.appendChild(tdi);

    let table = document.getElementById("table");
    // Adicionar a linha criada à tabela
    table.appendChild(tr);

}

let t:Tarefa = new Tarefa("Escovar os dentes");
t.feita = true;
console.log(t.horaRealizacao);
mostrarTarefa(t);