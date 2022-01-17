const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;


function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

}

function mostrarImagens(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

// Quando clicar na seta pra avançar temos que esconder 
// todas as imagens e mostrar a proxima imagem

setaAvancar.addEventListener('click', function() { 

    /*
    Testa se o contador da imagem atual é igual ao total de imagens
    */
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {
        return;
    }

    /*
         imagem atual começa em 0 porque é a primeira imagem
    assim que for clicado no avançar, eu preciso adicionar
    mais 1 no contador de imagens, pra saber qual imagem
    irei mostrar na ordem
    */
   imagemAtual++;

    /*
      esconder todas a imagens
        pegar todas as imagens e usando o DOM e remover a classe mostrar
    */
    esconderImagens();

    /*
    mostrar a proxima imagem
    pegar todas as imagens, descubrir qual a proxima, e adicionar a classe 
    mostrar nela
    */

    mostrarImagens();

})


setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0)
    return;

    imagemAtual--;

    esconderImagens();
    mostrarImagens();


})

    
