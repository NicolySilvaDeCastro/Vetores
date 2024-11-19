/*
Pedro está organizando seus filmes favoritos. 
Crie um array chamado filmesFavoritos com três filmes de sua escolha. 
Modifique o primeiro filme para um novo título. 
Verifique se o último filme da lista é "Harry Potter". 
Se não for, adicione "Harry Potter" ao final da lista. 
Imprima a lista de filmes favoritos no final.
*/

var filmesFavoritos = ['Pantera Negra', 'Deadpool', 'Coringa'];

function adicionarItens() {
     
        if (!filmesFavoritos.some(i => i.toLowerCase() === "Harry Potter")) {
            filmesFavoritos.push("Harry Potter");
        }

        console.log("Lista de filmes:", filmesFavoritos);
    };

adicionarItens();