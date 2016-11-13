


"use strict";

//Se tivermos uma variável declarada fora da função ela será utilizada.
var i;
(function (){
	//Isso não gerará um erro
    for(i = 0;i < 10;i++){
        console.log(i);
    }
})();

console.log('Valor de i', i)