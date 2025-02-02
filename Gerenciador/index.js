class Filme {
    constructor(titulo, ano, genero, nota) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.nota = nota;
    }
}

class CatalogoNetflix {
    constructor() {
        this.filmes = [];
    }

    adicionarFilme(filme) {
        this.filmes.push(filme);
    }

    removerFilme(titulo) {
        this.filmes = this.filmes.filter(filme => filme.titulo !== titulo);
    }

    listarFilmes() {
        return this.filmes;
    }

    buscarFilme(titulo) {
        return this.filmes.find(filme => filme.titulo === titulo);
    }
}

// Exemplo de uso:
const catalogo = new CatalogoNetflix();

const filme1 = new Filme('Inception', 2010, 'Ficção Científica', 8.8);
const filme2 = new Filme('Matrix', 1999, 'Ação', 8.7);

catalogo.adicionarFilme(filme1);
catalogo.adicionarFilme(filme2);

console.log('Filmes no catálogo:', catalogo.listarFilmes());
console.log('Buscar filme Inception:', catalogo.buscarFilme('Inception'));

catalogo.removerFilme('Inception');
console.log('Filmes no catálogo após remover Inception:', catalogo.listarFilmes());
