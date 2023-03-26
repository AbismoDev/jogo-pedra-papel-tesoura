const jogador = document.querySelectorAll('.escolha-jogador img')
const inimigo = document.querySelectorAll('.escolha-inimigo img')
let jogadorOpt
let inimigoOpt

const escolhaOpcao = () =>{
    if(jogadorOpt == 'pedra'){
        if(inimigoOpt == 'pedra'){
            return 'Empate!!'
        }else if(inimigoOpt == 'papel'){
            return 'Jogador 2 Ganhou!!'
        }else{
            return 'Jogador 1 Ganhou!!'
        }
    }else if(jogadorOpt == 'papel'){
        if(inimigoOpt == 'pedra'){
            return 'Jogador 1 Ganhou!!'
        }else if(inimigoOpt == 'papel'){
            return 'Empate!!'
        }else{
            return 'Jogador 2 Ganhou!!'
        }
    }else{
        if(inimigoOpt == 'pedra'){
            return 'Jogador 2 Ganhou!!'
        }else if(inimigoOpt == 'papel'){
            return 'Jogador 1 Ganhou!!'
        }else{
            return 'Empate!!'
        }
    }
}

const inimigoJogar = () =>{
    let numeroAleatorio = Math.floor(Math.random() * 3)
    resetarInimigo()
    inimigo[numeroAleatorio].style.opacity = 1
    inimigoOpt = inimigo[numeroAleatorio].getAttribute('opt')
}

const resetarJogador = () =>{
    for(let i = 0; i < jogador.length; i++){
        jogador[i].style.opacity = .3
    }
}

const resetarInimigo = () =>{
    for(let i = 0; i < inimigo.length; i++){
        inimigo[i].style.opacity = .3
    }
}

const exibeStatus = () =>{
    document.querySelector('.container-resultado')
    .innerHTML = `<p>${escolhaOpcao()}</p>`
}

for(let i = 0; i < jogador.length; i++){
    jogador[i].addEventListener('click', () =>{
        resetarJogador()
        jogador[i].style.opacity = 1
        jogadorOpt = jogador[i].getAttribute('opt')
        inimigoJogar()
        exibeStatus()
    })
}