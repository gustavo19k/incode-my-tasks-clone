# Documentação do Código

Este é um exemplo de uma aplicação de lista de tarefas (ou "to-do list") em JavaScript. Vamos analisar cada parte:

1. `document.addEventListener('DOMContentLoaded', function () {...})`: Este código está escutando o evento `DOMContentLoaded`, que é disparado quando todo o HTML foi completamente carregado e analisado. Quando esse evento é disparado, a função anônima dentro dele é executada.

2. `document.querySelector('.task-input')`: Este método retorna o primeiro elemento dentro do documento que corresponde ao seletor CSS especificado. Neste caso, ele está selecionando o elemento com a classe `task-input`.

3. `document.createElement('li')`: Este método cria um novo elemento HTML do tipo especificado. Neste caso, ele está criando um novo elemento de lista (`li`).

4. `checkButton.addEventListener('click', function () {...})`: Este código está adicionando um ouvinte de evento ao botão de verificação. Quando o botão é clicado, a função anônima é executada.

5. `taskList.appendChild(newTask)`: Este método insere um nó ao final da lista de filhos de um nó pai especificado. Neste caso, ele está adicionando a nova tarefa à lista de tarefas.

6. `taskInput.addEventListener('keypress', function (eventKeyboard) {...})`: Este código está adicionando um ouvinte de evento ao campo de entrada da tarefa. Quando uma tecla é pressionada, a função anônima é executada.

7. `taskClear.addEventListener('click', function () {...})`: Este código está adicionando um ouvinte de evento ao botão de limpar tarefas. Quando o botão é clicado, a função anônima é executada.
