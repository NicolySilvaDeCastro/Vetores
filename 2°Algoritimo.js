/*Desenvolva um aplicativo de lista de compras automatizada. 
Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. 
Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. 
Imprima a lista de compras no final.*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var listaCompras = [];

function adicionarItens() {
    rl.question("Adicione 1 item à lista de compras: ", function (item) {
        listaCompras.push(item);

        // Verifica se "leite" já está na lista
        if (!listaCompras.some(i => i.toLowerCase() === "leite")) {
            listaCompras.push("leite");
        }

        console.log("Lista de compras:", listaCompras);
        rl.close(); 
    });
}

adicionarItens();


