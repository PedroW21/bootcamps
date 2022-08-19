var participantes = gets();
var criancas;
var array = [];
let boysNumber = 0;

for(let i = 0; i < participantes; i++){
  criancas = gets().split(' ');
  array.push(criancas);
}

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i][j] === 'M') {
          boysNumber++
        }
    }
}
let meninos = boysNumber
let meninas = array.length - boysNumber;