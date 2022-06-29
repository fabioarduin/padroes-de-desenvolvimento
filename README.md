trabalho final de engenharia de software 2.
Descrição

✨ Exemplo de Aplicação do Padrão de projeto Singleton

   O Singleton é um padrão de projeto criacional, que garante que apenas um objeto desse tipo exista e forneça um único ponto de acesso a ele para qualquer outro código.


⬆️ Pontos Positivos:

-Você pode ter certeza que uma classe só terá uma única instância.

-Você ganha um ponto de acesso global para aquela instância.

-O objeto singleton é inicializado somente quando for pedido pela primeira vez.


⬇️ Pontos Negativos:

-Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez.

-O padrão Singleton pode mascarar um design ruim, por exemplo, quando os componentes do programa sabem muito sobre cada um.

-O padrão requer tratamento especial em um ambiente multithreaded para que múltiplas threads não possam criar um objeto singleton várias vezes.

-Pode ser difícil realizar testes unitários do código cliente do Singleton porque muitos frameworks de teste dependem de herança quando produzem objetos simulados, já que o construtor da classe singleton é privado e sobrescrever métodos estáticos é impossível na maioria das linguagens, você terá que pensar em uma maneira criativa de simular o singleton, ou apenas não escreva os testes, ou não use o padrão Singleton.


📝Link da gravação da apresentação:
https://drive.google.com/file/d/15l_HCeMh1T6iL82VaUXxN3FtrRUutssy/view?usp=sharing
