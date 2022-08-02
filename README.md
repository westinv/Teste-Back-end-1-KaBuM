<h1 align="left"> Sobre </h1> 

O KaBuM necessita realizar cotações de fretes em suas transportadoras parceiras e você, como desenvolvedor back-end, deve desenvolver uma API REST que será utilizada pelo site para a consulta de opções de transportes dos produtos.

O candidato terá que ser capaz de construir uma API REST.

O teste está baseado em uma consulta dos valores de frete para cada transportadora existente conforme as especificações das dimensões e peso do produto.

Cada transportadora terá seus requisitos e o retorno deverá ser conforme o exemplo “output”, uma listagem com as transportadoras e seus valores de frete. Se o produto não estiver de acordo com tal transportadora, ela não deverá ser retornada.

A requisição deverá ser via POST e as informações do produto deverão ser enviadas body da requisição, como JSON.


<h1 align="left"> Execução </h1> 

A execução é feita a partir da instalação das dependencias, sendo assim é só executar no terminal

yarn ou npm

Logo após a instalação a execução do codigo é feita pelo comando:

yarn dev

<h1 align="left"> Testes </h1> 

A execução é feita a partir do comando: 

yarn test


