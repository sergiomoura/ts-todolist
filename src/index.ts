// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";

import { Tarefa } from "./Tarefa";

let tarefas:Tarefa[] = [];
tarefas.push(new Tarefa("Ligar para meu pai"));
tarefas.push(new Tarefa("Ligar para minha mãe"));
tarefas.push(new Tarefa("Pagar escola"));
tarefas.push(new Tarefa("Pagar Aluguel"));

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
    check.checked = tarefa.feita;

    // Adionar listener ao click no checkbox
    check.addEventListener('click',(_evt)=>{
        tarefa.feita = check.checked;
        mostrarTarefas(tarefas);
    })

    let tdCheck = document.createElement("td");
    tdCheck.appendChild(check);

    // Criando célula de texto
    let tdTexto = document.createElement("td");
    tdTexto.innerText = tarefa.texto;

    // Criando botão de delete
    let i = document.createElement("i");
    i.addEventListener('click',(_evt)=>{

        // Confirmando exclusão da tarefa
        if(!window.confirm("Tem certeza que deseja excluir a tarefa?")){
            return;
        }
        
        // Descobrir posição da tarefa no array de tarefas
        let pos = tarefas.indexOf(tarefa);

        // Excluir o elemento da posição pos do array de tarefas
        tarefas.splice(pos,1);

        // Mostrar a lista novamente
        mostrarTarefas(tarefas);

    });

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

function mostrarTarefas(tarefa:Tarefa[]){
    
    // Limpar a tabela de tarefas
    document.getElementById("table").innerHTML = "";

    // Mostrar cada item do meu array
    for (const t of tarefas) {
        mostrarTarefa(t);
    }

}

document.getElementById("form").addEventListener('submit',(evt)=>{

    // Impedindo submissão do formulário
    evt.preventDefault();

    // Capturando o elemento input text
    let input = <HTMLInputElement>document.getElementById("tf_2do");

    // Capturar o texto digitado no campo
    let texto:string = input.value;

    // Criar a tarefa com o texto digitado
    let tarefa:Tarefa = new Tarefa(texto);

    // adicionar a tarefa criada ao array de tarefas
    tarefas.push(tarefa);

    // mostrar Lista de tarefas.
    mostrarTarefas(tarefas);

    // Limpar o campo
    input.value = "";

})

mostrarTarefas(tarefas);
