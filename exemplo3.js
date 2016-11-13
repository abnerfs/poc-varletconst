

//Para impedir que variáveis globais sejam criadas acidentalmente usamos:
"use strict";

(function (){
	//Isso agora gerará um erro i is not defined
    for(i = 0;i < 10;i++){
        console.log(i);
    }
})();

console.log('Valor de i', i)