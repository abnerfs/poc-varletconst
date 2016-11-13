


"use strict";

var i;
(function (){
	//Se redeclararmos a variávei aqui a variável a ser usada será a que foi declarada dentro da função
	var i;
    for(i = 0;i < 10;i++){
        console.log(i);
    }
})();

//A variável de fora da função continuará undefined;
console.log('Valor de i', i);