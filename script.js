let order = [];
let clickedOrder = [];
let score = 0;

/*__________________________ 
0 - Verde
1 - vermelho
2 - amarelo
3 - azul
____________________________*/

const green = document.querySelector('.green');
const red = document.querySelector('.red'); 
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//CRIAR ORDEM ALEATÓRIA
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//ACENDE A PRÓXIMA COR
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout (() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//CHECA SE OS BOTÕES CLICADOS SÃO OS MESMOS DA ORDEM GERADA NO JOGO
let checkOrder = () => {
    for(let i in clickOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert('Pontuação: ${score} \n Você acertou! Iniciando Próximo nível! ');
        nextLevel();
    }
}

//FUNÇÃO PARA O CLIQUE DO USUÁRIO
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//FUNÇÃO QUE RETORNA A COR
let createColorElement = (color) => {
        if(color == 0){
            return green;
        } else if(color == 1){
            return red;
        } else if(color == 2) {
            return yellow;
        } else if(color == 3) {
            return blue;
        }
}

//FUNÇÃO PARA PRÓXIMO NÍVEL DO JOGO
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//FUNÇÃO PARA GAME OVER
let gameOver = () => {
    alert('Pontuação: ${score}! \n Você perdeu o jogo! \n Clique em OK para iniciar um novo jogo');
    order = [];
    clickedOrder = [];

    playGame();
}

//FUNÇÃO DE INICIO DO JOGO
let playGame = () => {
    alert('Bem vindo ao Choice! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}


//CLICK PARA AS CORES
green.oncliCk = () => click(0);
red.oncliCk = () => click(1);        
yellow.oncliCk = () => click(2);
blue.oncliCk = () => click(3);


//INICIO DO JOGO
playGame();