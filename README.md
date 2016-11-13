# Diferenças entre declarar uma variável com var, let e const no JavaScript EC6

Testando a diferença entre var, let e const com aprendizado obtido no vídeo do mpj: https://www.youtube.com/watch?v=sjyJBL5fkp8

Todos os exemplos estão comentados :D

# Introdução

No EcmaScript5 só existia um tipo de declaração de variável, através do **var**, com o EcmaScript6 foram introduzidos o **let** e o **const**.

A principal diferença é que o **let** diferente do **var** restringe a variável ao escopo em que ela foi declarada, se houver uma variável global i e dentro de um for declararmos uma variável i com **var** a variável global será alterada. Se ao invés disso declararmos a variável com **let** a variável global permanecerá intacta (**exemplo6.js, exemplo7.js**). 

O **let** é muito importante para garantir a imutabilidade, que é um conceito muito importante no desenvolvimento de aplicações, impedindo que não alteremos variáveis acidentalmente e geremos resultados inesperados.

Sendo assim o **let** é um substituto para o **var** não havendo razões (a não ser em casos muito específicos) para declarar variáveis como **var** no EcmaScript6.

Declarar variáveis com **const** garante que nossa variável não poderá ser reatribuida ao longo do programa, o que não significa que um objeto declarado como const não poderá ter suas propriedades alteradas, apenas que não poderá ser reatribuido (**exemplo8.js**). É importante declarar nossas variáveis como const para deixar explícito para outra pessoa que for dar manutenção no código posteriormente que aquela variável não deverá ser reatribuida, se ele deve ser reatribuida devemos declarar com o **let**.

# Testando os exemplos

- Instale o NodeJS na sua máquina: https://nodejs.org/en/
- Baixe os arquivos (clone ou download do projeto no GitHub)
- Vá até a pasta onde você baixou os arquivos.
- Clique com o botão direito segurando shift na pasta e clique em **Abrir janela de comando aqui**.
- Digite **node exemplo1.js** (para rodar o exemplo1 por exemplo) e aperte enter.


