document.addEventListener('DOMContentLoaded', function(){
    const botaoAumentarFonte = document.getElementById('aumentar-fonte')
    //Pega o botão de aumentar fonte e coloca na constante

    let tamanhoDaFonte = 1
    // define o tamanho da fonte na variável

    botaoAumentarFonte.addEventListener('click', function(){
        tamanhoDaFonte = tamanhoDaFonte + 0.1
        document.body.style.fontSize = `${tamanhoDaFonte}rem`
    })
  
    const botaoacessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesacessibilidade = document.getElementById('botao-acessibilidade')

    botaoacessibilidade.addEventListener('click' , function()){
      botaoacessibilidade.classList.toggle(rotacao-botao)
      botaoacessibilidade.classList.toggle(r)
    }
})