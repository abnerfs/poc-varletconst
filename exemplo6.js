
//Diferença de var e let

"use strict";

var i = 11223344556677;

//Se removermos o for de dentro da função e usarmos var para declarar a variável i dentro do for 
//a variável i de fora do for será alterada.
for(var i = 0;i < 10;i++){
    console.log(i);
}

//O resultado disso será 10, porque a variável i global foi reatribuida
console.log('Valor de i', i);


var j = 9999999999;

//Se ao invés disso utilizarmos let para declarar a variável a variável global não será alterada.
for(let j = 0;j < 10;j++)
{
	console.log(j);
}

//O resultado disso será 9999999999 porque utilizamos let para declarar a variável dentro do for, evitando que a variável global fosse alterada.
console.log("Valor de j", j);

