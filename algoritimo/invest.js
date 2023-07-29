let valorAtual = 1000;
for (let i = 0; i < 600; i++) {
    valorAtual = (valorAtual + 1000) + (valorAtual / 100);
    console.log(valorAtual)
}

// console.log(1000 + (1000 / 100))