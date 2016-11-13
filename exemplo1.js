function counter(){
    for(var i = 0;i < 10;i++){
        //Espera-se que a variável i esteja disponível apenas dentro desse escopo.
        console.log("Valor da variável :D", i);
    }
    //Mas no EcmaScript5 o único tipo de escopo é o da função, então a variável também estará disponível aqui
    console.log('Valor depois do loop :X', i);
}


//Chamando a função
counter();

//Se tentarmos exibir o valor da variável i aqui um erro será emitido, porque aqui não estamos dentro da função.

//Isso geraria um ero i is not defined
//console.log("Valor de i", i);



