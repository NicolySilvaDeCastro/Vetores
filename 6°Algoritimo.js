/*
Maria está realizando compras online. 
Crie um array inicialmente vazio chamado 'carrinho'. 
Adicione os produtos "camiseta", "calça" e "sapato" ao carrinho. 
Remova o primeiro produto da lista e, em seguida, 
modifique o segundo produto para "tênis". 
Imprima o carrinho de compras atualizado no final.
*/

var carrinho = [];

carrinho.push('camiseta', 'calça', 'sapato')
carrinho.shift(); 
carrinho.push('tênis')

let temp = carrinho[1]; 
carrinho[1] = carrinho[2]; 
carrinho[2] = temp;    
carrinho.pop(); 

console.log(carrinho); 

