/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. 
Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var tarefas = [];

function adicionarTarefas() {
    rl.question("Adicione três tarefas: ", 
    function (item) {
        tarefas.pop();
        tarefas.push(item);

        if (!tarefas.some(i => i.toLowerCase() === "leite")) {
            tarefas.push("leite");
        }

        console.log("Lista de compras:", tarefas);
        rl.close(); 
    });
}

adicionarTarefas();