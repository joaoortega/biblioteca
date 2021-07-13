# Biblioteca
 <strong>Exercício de desenvolvimento do curso da Gama Academy</strong>

A atividade pediu para montar um sistema simples de consulta de livros em um banco de dados disponível no arquivo database.js.

A consulta é feita escrevendo o nome da categoria no prompt. Esta categoria deve ser validada em uma string que contém todas as categorias listadas e retornar todos os livros daquela respectiva categoria que estiverem no banco de dados. O usuário ainda pode escolher ver todos os livros disponíveis, listados por ordem ascendente do número de páginas.

Atividade realizada com sucesso.


## Incrementos no projeto
1) Adicionei listagem dinâmica e única das categorias.
    Com este recurso, cada nova categoria inserida no bd é listada automaticamente e não é necessário ficar atualizando a string de categorias a cada nova categoria inserida.
2) Adicionei indexação e pesquisa por número.
    Adicionei numeração às categorias para não precisar escrever o nome da categoria para fazer a busca. Cada categoria tem um número e o usuário pode apenas digitar o número para selecionar aquela determinada categoria. Isso agiliza a pesquisa e ainda evita problemas na pesquisa por erro de digitação e uso de caracteres especiais.

