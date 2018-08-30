let btnAdd = document.getElementById("btAdicionar");
let btnAddToEnd = document.getElementById("btAdicionarFim");
let inNome = document.getElementById("inNome");
let outLista = document.getElementById("outLista");
let outLista1 = document.getElementById("outLista1");
let outLista2 = document.getElementById("outLista2");
let btExcluir = document.getElementById("btExcluir");
let btExcluirU = document.getElementById("btExcluirU");
let btME = document.getElementById("btME");
let btMD = document.getElementById("btMD");
let btPesquisar = document.getElementById("btPesquisar");

let lista = new Deque();

let adicionarAluno = () => {
    let nome = inNome.value;

    if (nome == "") {
        alert("Informe o nome do Aluno");
        inNome.focus();
        return;
    }

    lista.append(nome);

    inNome.value = "";
    inNome.focus();

    outLista.textContent = lista.display();
}
let addToEnd = () => {
    let nome = inNome.value;

    if (nome == "") {
        alert("Informe o nome do Aluno");
        inNome.focus();
        return;
    }

    lista.appendFinal(nome);

    inNome.value = "";
    inNome.focus();

    outLista.textContent = lista.display();
}
let excluirAluno = () => {

    if (lista.remove()) {
        outLista.textContent = lista.display();
    } else {
        alert("Não há alunos na lista!");
    }
}
let excluirAlunoU = () => {
    
    if (lista.removeU()) {
        outLista.textContent = lista.display();
    } else {
        alert("Não há alunos na lista!");
    }
}
let pesquisarAluno = () => {
    let nome = inNome.value;

    if (nome == "") {
        alert("Informe o nome do Aluno");
        inNome.focus();
        return;
    }

    let posicao = lista.search(nome);
    if (posicao == 0){
        alert("Aluno não encontrado");
    } else {
        alert("Encontrado na posição: " + posicao);
    }

    inNome.focus();
    inNome.value = "";

}
let mostraesquerda = () => {  
    outLista1.textContent = lista.esquerda();
}
let mostradireita = () => { 
    outLista2.textContent = lista.direita();
}

btMD.addEventListener("click", mostradireita);
btnAddToEnd.addEventListener("click", addToEnd);
btnAdd.addEventListener("click", adicionarAluno);
btExcluir.addEventListener("click", excluirAluno);
btExcluirU.addEventListener("click", excluirAlunoU);
btPesquisar.addEventListener("click", pesquisarAluno);
btME.addEventListener("click", mostraesquerda);