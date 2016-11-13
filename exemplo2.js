//Immideately invoked function expression (IIFE) é uma função que será chamada assim que for declarada como no exemplo abaixo 

//IIFE
(function (){
    //Se não declararmos a variável i ela será declarada globalmente e estará disponível fora da função
    for(i = 0;i < 10;i++){
        console.log(i);
    }
})();

//Variável i disponível globalmente
console.log('Valor de i', i)