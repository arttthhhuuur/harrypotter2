class Varinha {
    private madeira: string;
    private nucleo: string;
    private tamanho: number;

    constructor(madeira: string, nucleo: string, tamanho: number) {
        this.madeira = madeira;
        this.nucleo = nucleo;
        this.tamanho = tamanho;
    }

    //getters e setters (protege o valor dos dados)
    getMadeira(): string {
        return this.madeira;
    }

    setMadeira(madeira: string): void {
        this.madeira = madeira;
    }

    getNucleo(): string {
        return this.nucleo;
    }

    setNucleo(nucleo: string): void {
        this.nucleo = nucleo;
    }

    getTamanho(): number {
        return this.tamanho;
    }

    setTamanho(tamanho: number): void {
        this.tamanho = tamanho;
    }

    // Método exibirDetalhes 
    exibirDetalhes(): void { //void significa que o método NÃO retorna nada
        console.log(`Varinha de madeira de ${this.madeira}, núcleo de ${this.nucleo} e tamanho ${this.tamanho}`);
    }
}

// Classe ChapeuSeletor
class ChapeuSeletor {
    private casa: string;

    constructor() {
        this.casa = ""; //a casa ainda não foi definida inicialmnte por isso ta vazio
    }

    // Método selecionarCasa
    selecionarCasa(): void {
        const casas = ["Grifinória", "Sonserina", "Lufa-Lufa", "Corvinal"];
        const indiceAleatorio = Math.floor(Math.random() * 4);
        this.casa = casas[indiceAleatorio];
    }

    // Método exibirCasa
    exibirCasa(): void {
        console.log(`A casa escolhida é: ${this.casa}`);
    }
}

// Classe Feitiço
class Feitico {
    private nome: string;
    private tipo: string;
    private poder: number;

    constructor(nome: string, tipo: string, poder: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.poder = poder;
    }

    // Getters e Setters
    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getTipo(): string {
        return this.tipo;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    getPoder(): number {
        return this.poder;
    }

    setPoder(poder: number): void {
        this.poder = poder;
    }

    //funçao de soltar Feitico
    soltarFeitico(): void {
        console.log(`O feitiço ${this.nome} do tipo ${this.tipo} com poder level ${this.poder} foi lançado!`);
    }
}

// Testando as classes
const minhaVarinha = new Varinha("Betula", "Pena de Fenix", 35); //35 tamanho em cm
minhaVarinha.exibirDetalhes();

const chapeu = new ChapeuSeletor();
chapeu.selecionarCasa();
chapeu.exibirCasa();

const meuFeitico = new Feitico("Wingardium Leviosa", "Levitação", 80); //numero em cm 80 cmmmmmmmmmmmmmmmmm
meuFeitico.soltarFeitico();
