class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        this.#definirTipoAtaque();
    }

    #exibirMensagem(tipoAtaque) {
        console.log(`O ${this.tipo} atacou usando ${tipoAtaque}`)
    }

    #definirTipoAtaque() {
        switch (this.tipo.toLowerCase()) {
            case "mago":
                this.#exibirMensagem("magia");
                break;
            case "guerreiro":
                this.#exibirMensagem("espada");
                break;
            case "monge":
                this.#exibirMensagem("artes marciais");
                break;
            case "ninja":
                this.#exibirMensagem("shuriken");
                break;
            default:
                console.log("Algo deu errado.")

        }
    }
}

const heroi1 = new Heroi("Pedro", 30, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Carlos", 25, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("João", 20, "ninja");
heroi3.atacar();