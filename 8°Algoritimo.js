/*
Ana está organizando suas tarefas de limpeza semanal. 
Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. 
Remova a terceira tarefa da lista e, 
em seguida, mude a segunda tarefa para "limpar banheiro". 
Imprima a lista de tarefas de limpeza atualizada no final.
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefasLimpeza = [];

function adicionarTarefas() {
    console.log("Adicione quatro tarefas de limpeza uma de cada vez:");

    const coletarTarefa = (count = 1) => {
        if (count > 4) {
            tarefasLimpeza.splice(2, 1); 
            tarefasLimpeza[1] = "limpar banheiro"; 
            console.log("Lista de tarefas de limpeza atualizada:", tarefasLimpeza);
            rl.close();
            return;
        }

        rl.question(`Tarefa ${count}: `, (item) => {
            tarefasLimpeza.push(item); 
            coletarTarefa(count + 1); 
        });
    };

    coletarTarefa(); 
}

adicionarTarefas();
