const inputTarefa = document.getElementById('nova-tarefa');

const btnAdicionar = document.getElementById('adicionar-tarefa');

const listaTarefas = document.getElementById('lista-tarefas');


btnAdicionar.addEventListener('click', function () {
    const tarefaTexto = inputTarefa.value;

    if (tarefaTexto === '') {
        alert('Digite uma tarefa antes de adicionar.');
        return;
    }


    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = tarefaTexto;

    const btnRemover = document.createElement('button');
    btnRemover.innerText = 'Remover';
    btnRemover.classList.add('remover-tarefa');


    btnRemover.addEventListener('click', function () {
        listaTarefas.removeChild(novaTarefa);
    });

    novaTarefa.appendChild(btnRemover);

    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = '';


    inputTarefa.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            btnAdicionar.click();

        }
    });






});