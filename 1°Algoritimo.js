/*
Uma loja precisa atualizar seu sistema de controle de estoque.
Crie um vetor chamado 'estoqueProdutos' com os produtos "camiseta", "calça" e "sapato". 
Adicione o produto "meia" ao final da lista. 
Remova o primeiro produto da lista e 
mude o segundo produto para "bermuda". 
Imprima o estoque atualizado no final.
*/


var estoqueProdutos = ['camiseta', 'calça', 'sapato'];

estoqueProdutos.shift(); //remove o primeiro item

estoqueProdutos.push('bermuda')//adiciona o item bermuda
let temp = estoqueProdutos[0]; // armazena o valor do primeiro elemento em uma variável temporária
estoqueProdutos[0] = estoqueProdutos[2];  // troca o valor do primeiro elemento pelo valor do último elemento
estoqueProdutos[2] = temp;    // troca o valor do último elemento pelo valor armazenado na variável temporária

estoqueProdutos.pop(); //remove calça

console.log(estoqueProdutos); 

//REFERÊNCIAS:
//https://www.alura.com.br/artigos/javascript-para-que-serve-array?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=164068847699&hsa_ad=703853156311&hsa_src=g&hsa_tgt=dsa-2273097816642&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAi_G5BhDXARIsAN5SX7qNMjxX29VcnFTbSlrd_NzyYP0NtOsnChSKX6bsKQv2B4L-HmEL1UsaAqmZEALw_wcB
//https://horadecodar.com.br/como-trocar-elemento-de-array-em-javascript/#:~:text=O%20m%C3%A9todo%20splice()%20tamb%C3%A9m,trocar%20elementos%20de%20um%20array.&text=Por%20fim%2C%20o%20m%C3%A9todo%20reverse,trocar%20elementos%20de%20um%20array.&text=Esses%20s%C3%A3o%20alguns%20exemplos%20de,de%20um%20array%20em%20JavaScript.