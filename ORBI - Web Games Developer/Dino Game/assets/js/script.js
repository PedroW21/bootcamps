const dino = document.querySelector(".dino");
const bgGame = document.querySelector(".bg-game");
let dinoJumping = false; // controlar o pulo, não deixar dar um jump antes de voltar a posição original
let positionDino = 0;

function catchSpace(event) {
  if (event.keyCode === 32) {
    if (!dinoJumping) {
      jumpDino();
    }
  }
}

function jumpDino() {
  dinoJumping = true;

  let intervalToJump = setInterval(() => {
    if (positionDino >= 150) {
      clearInterval(intervalToJump);

      // Fazendo o dino descer

      let downInterval = setInterval(() => {
        if (positionDino <= 0) {
          clearInterval(downInterval);
          dinoJumping = false;
        } else {
          positionDino -= 20;
          dino.style.bottom = positionDino + "px";
        }
      }, 40); // Modificando esse valor tornara a descida mais rapida ou devagar;
    } else {
      // Dino Sobe
      positionDino += 20;
      dino.style.bottom = positionDino + "px";
    }
  }, 20); //milisegundos
}

function createCactus() {
  const cactus = document.createElement("div");
  cactus.classList.add("cactus");
  bgGame.appendChild(cactus);

  let randomTimeToAppearCactus = Math.random() * 6000;

  let cactusPosition = 1000;
  cactus.style.left = 1000 + "px";

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      bgGame.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && positionDino < 60) {
        // Fim de Jogo =)

        clearInterval(leftInterval);
        document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
    } else {
      cactusPosition -= 10; // velocidade que ele se move para esquerda
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);

  setTimeout(createCactus, randomTimeToAppearCactus);
}

createCactus();
document.addEventListener("keyup", catchSpace);
