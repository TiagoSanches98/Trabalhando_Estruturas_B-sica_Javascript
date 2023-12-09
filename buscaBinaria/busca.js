const livros = require('./arrays');

function busca(array, de, ate, valorBuscado){
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if(valorBuscado === atual.preco){
        return meio;
    }
    if(valorBuscado < atual.preco){
        return busca(array, de, meio - 1, valorBuscado);
    }
    if(valorBuscado > atual.preco){
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

console.log(busca(livros, 0, livros.length - 1, 40));