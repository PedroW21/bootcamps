var player = null;
var winner = null;
var playerSelected = document.getElementById('selected-player');
var winnerSelected = document.getElementById('winner');


changePlayer(value="X"); // Seta o primeiro jogador

function selectSquare (id) {
    if(winner !== null) { // PARA A EXECUÇÃO AQUI
        return;
    }

    var square = document.getElementById(id);
    
    if(square.innerHTML !== "-") return; //não permite trocar o contéudo após uma jogada

    square.innerHTML = player; // todo o conteudo  que tiver dentro da div será trocado pelo player (no caso o simbolo X ou O)

    square.style.color = "#000"; //alterando a cor da fonte do X ou O

    player === "X" ? player = "O" : player="X"; //checa o jogador da vez

    changePlayer(player);
    checkWinner();
}

function changePlayer(value){ 
    //funçao que troca o jogador no HTML

    player = value;
    playerSelected.innerHTML = player;
}

function checkWinner() {
    // Modo menos eficiente porem mais didatico

    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);

    /* VERIFICA HORIZONTAL */
    if(checkSequence(square1,square2,square3)) { // SE OS QUADRADOS TIVEREM VALORES IGUAIS, ENTAO CHAMA AS FUNÇOES DE TROCA COR E TROCA GANHADOR (TROCA NULO PELO GANHADOR)
        changeSquaresColor(square1,square2,square3);
        changeWinner(square1);
        return;
    };

    if(checkSequence(square4,square5,square6)) { 
        changeSquaresColor(square4,square5,square6);
        changeWinner(square4);
        return;
    };

    if(checkSequence(square7,square8,square9)) { 
        changeSquaresColor(square7,square8,square9);
        changeWinner(square7);
        return;
    };

    if(checkSequence(square1,square4,square7)) { 
        changeSquaresColor(square1,square4,square7);
        changeWinner(square1);
        return;
    };

    /* VERIFICA DIAGONAL */
    if(checkSequence(square1,square5,square9)) {
        changeSquaresColor(square1,square5,square9);
        changeWinner(square1);
        return;
    };

    if(checkSequence(square3,square5,square7)) { 
        changeSquaresColor(square3,square5,square7);
        changeWinner(square3);
        return;
    };

    /* VERIFICA VERTICAL */
    if(checkSequence(square1,square4,square7)) { 
        changeSquaresColor(square1,square4,square7);
        changeWinner(square1);
        return;
    };
    if(checkSequence(square2,square5,square8)) { 
        changeSquaresColor(square2,square5,square8);
        changeWinner(square2);
        return;
    };
    if(checkSequence(square3,square6,square9)) { 
        changeSquaresColor(square3,square6,square9);
        changeWinner(square3);
    };
}

function changeSquaresColor(squares1,squares2,squares3){ //MUDA A COR DOS QUADRADOS QUANDO SE TEM VITORIA
    squares1.style.background = "#0F0";
    squares2.style.background = "#0F0";
    squares3.style.background = "#0F0";
}

function changeWinner(squareWinner) { // MOSTRA GANHADOR (ALTERA NO HTML DE VAZIO PARA O ATUAL)
    winner = squareWinner.innerHTML;
    winnerSelected.innerHTML = winner;
}

function checkSequence(squares1,squares2,squares3){ // VERICIA SE HÁ UMA SEQUENCIA, SE FOR UMA SEQUENCIA X OU "O" RETORNA TRUE
    var equals = false;

    if(squares1.innerHTML !== "-" && squares1.innerHTML === squares2.innerHTML && squares2.innerHTML === squares3.innerHTML) equals = true;

    return equals;
}

function restart(){
    winner = null;
    winnerSelected.innerHTML = "";

    for(var i=1 ; i <= 9; i++){ //LAÇO QUE PERCORRERA TODOS OS QUADRADOS PARA "LIMPAR"

        var cleanSquare = document.getElementById(i);

        cleanSquare.style.background ="#EEE";
        cleanSquare.style.color="#EEE";
        cleanSquare.innerHTML = "-";
    }

    changePlayer("X");
}