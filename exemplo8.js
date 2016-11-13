//Variáveis declaradas com const não podem ser reatribuidas;

const x = 20;

//Isso resultaria em um erro.
//x++;

//Um objeto criado como const pode ter suas propriedades alteradas, só não pode ser reatribuido

const cat = {
	sound: 'Meow',
	makeSound: function(){
		console.log(this.sound);
	}
}

//Nesse caso um erro não será emitido :D
cat.sound = "meoooooooooooooooooooooow";
cat.makeSound();

//Essa linha resultaria em um erro porque variáveis declaradas como const não podem ser reatribuidas.
//cat = {};