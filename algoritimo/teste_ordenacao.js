const listaLivros = require("./listaLivros")

function ordenacao(livros) {
    let posicaoInicial;
    let posicaoAtual;
    for (posicaoAtual = 0; posicaoAtual < livros.length; posicaoAtual++) {
        if(livros[posicaoAtual].preco < livros[posicaoAtual].preco){
            console.log(livros[posicaoAtual])
        }
    }
}

ordenacao(listaLivros);