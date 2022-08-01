/* 
OBJTIVO 1 - quando clicarmos na seta de anvançar temos que mostarar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento de HTML da seta avançar

    - passo 2 - dar um jeito de identificar o clique do usuario na seta avançar

    - passo 3 - fazer aparecer o proximo cartão da lista

    - passo 4 - buscar o cartão selecionado e esconder

    OBJTIVO 2 - quando clicarmos na seta de voltar temos que mostarar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento de HTML da seta avançar

    - passo 2 - dar um jeito de identificar o clique do usuario na seta avançar

    - passo 3 - fazer aparecer o proximo cartão da lista

    - passo 4 - buscar o cartão selecionado e esconder
*/
const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll('.cartao');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;

function escondercrtaoselecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
function mostararcartao(indicecartao){
    cartoes[indicecartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;

    escondercrtaoselecionado();

    cartaoAtual++;
    mostararcartao(cartaoAtual);
});

btnVoltar.addEventListener('click',function () {

    if(cartaoAtual === 0) return;
    escondercrtaoselecionado();
    cartaoAtual --;
    console.log(cartaoAtual);
    mostararcartao(cartaoAtual)
});













