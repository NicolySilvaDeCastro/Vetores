/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [4, 7, 2, 7, 9, 1, 7, 3, 5, 7];

rl.question("Qual número você deseja verificar no vetor? ", (input) => {
    let numero = parseInt(input); 
    let indices = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === numero) {
            indices.push(i); 
        }
    }

    if (indices.length > 0) {
        console.log(`O número ${numero} foi encontrado nos índices: ${indices.join(", ")}`);
    } else {
        console.log(`O número ${numero} não foi encontrado no vetor.`);
    }

    rl.close(); 
});
