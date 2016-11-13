



//No EcmaScript 5 para que variáveis dentro de uma função estejam disponíveis fora da função devemos utilizar uma
//Immideately invoked function expression (IIFE) que é uma função que será chamada assim que for declarada como no exemplo abaixo 

//IIFE

(function counter2(){
    for(var i = 0;i < 10;i++){
        console.log(i);
    }
})()


//Assim a variável i estará disponível fora da função onde foi declarada
console.log('Valor de i', i);