
//Diferença de var e let

var i = 99999;

if(true)
{
	let i = 88888;
}

//Exibirá 99999;
console.log('Variável após passar por um if com let ', i);

if(true)
{
	var i = 88888;
}

//Exibirá 88888;
console.log('Variável após passar por um if com var ', i);