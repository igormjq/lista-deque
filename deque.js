class Node {
    constructor(nome) {
        this.nome = nome;
        this.prox = null;
        this.ant = null;
    }
}

class Deque {
    constructor() {
        this.tamanho = 0;
        this.cab = null;
        this.ultimo = null;
    }

    append(nome) {
        var novo = new Node(nome);

        if (this.cab == null) {
            this.cab = novo;
            this.ultimo = novo;
        }
        else {
            var atual = this.cab;

            atual.ant = novo;
            novo.prox = atual;
            this.cab = novo;
        }
        this.tamanho++;
    }

    appendFinal(nome) {
        var novo = new Node(nome);

        if (this.cab == null) {
            this.ultimo = novo;
            this.cab = novo;
        } else {
            var atual = this.cab;

            while (atual.prox) {
                atual = atual.prox;
            }

            atual.prox = novo;
            this.ultimo = novo;
            novo.ant = atual;
        }

        this.tamanho++;
    }

    display() {
        var lista = "";

        var atual = this.cab;
        var num = 0;

        while (atual) {
            num++;
            lista = lista + num + ". " + atual.nome + "\n";
            atual = atual.prox;
        }
        return lista;
    }

    esquerda() {
        var lista = "";

        var atual = this.cab;

        while (atual) {
            lista = lista + atual.nome + " 🔙 ";
            atual = atual.prox;
        }
        return lista;
    }

    direita() {
        var lista = "";

        var atual = this.ultimo;

        while (atual) {
            lista = lista + atual.nome + " 🔜 ";
            atual = atual.ant;
        }
        return lista;
    }

    search(pesq) {

        var atual = this.cab;
        var num = 0;

        var posicao = 0;

        while (atual) {
            num++;
            if (atual.nome.toUpperCase() == pesq.toUpperCase()) {
                posicao = num;
                break;
            }
            atual = atual.prox;
        }
        return posicao;
    }

    remove() {
        if (this.cab == null) {
            return false;
        } else {
            var atual = this.cab;

            this.cab = atual.prox;
            this.tamanho--;
            return true;
        }
    }
    
    removeU() {
        if (this.cab == null) {
            return false;
        }
        if (this.tamanho == 1) {
            this.cab = null;
            this.ultimo = null;
            this.tamanho--;
            return true;
        } else {
            var atual = this.cab;

            while (atual.prox) {

                if (atual.prox == this.ultimo) {
                    this.ultimo = atual;
                    atual.prox = null;
                    this.tamanho--;

                    return true;
                }

                atual = atual.prox;
            }
        }
    }
}