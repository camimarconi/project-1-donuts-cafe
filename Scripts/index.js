// criar minhas constantes conectadas no html
//spk bottles
const sprinkleBottleBlueImg = document.querySelector(".sprinkle-bottle-blue");
const sprinkleBottleWhiteImg = document.querySelector(".sprinkle-bottle-white");
const sprinkleBottleYellowImg = document.querySelector(".sprinkle-bottle-yellow");
const sprinkleBottlePinkImg = document.querySelector(".sprinkle-bottle-pink");

//cover bottles
const btnCoverGreenBottle = document.querySelector(".cover-btn-green");
const btnCoverBrownnBottle = document.querySelector(".cover-btn-brown");
const btnCoverVioletnBottle = document.querySelector(".cover-btn-violet");
const btnCoverPinknBottle = document.querySelector(".cover-btn-pink");

//no cover possobilities
const donutBaseBlueSpk = document.querySelector(".donutBase-blue-spk");

const donutBasePinkSpk = document.querySelector(".donutBase-pink-spk");
const donutBaseWhiteSpk = document.querySelector(".donutBase-white-spk");
const donutBaseYellowSpk = document.querySelector(".donutBase-yellow-spk");
//green possibilities
const coverGreenImg = document.querySelector(".donuts-green-cover");
const coverGreenBlueSprinkleImg = document.querySelector(".donuts-green-blue-sprinkle");
const coverGreenWhiteSprinkleImg = document.querySelector(".donuts-green-white-sprinkle");
const coverGreenYellowSprinkleImg = document.querySelector(".donuts-green-yellow-sprinkle");
const coverGreenPinkSprinkleImg = document.querySelector(".donuts-green-pink-sprinkle");

//brown possibilities
const coverBrownImg = document.querySelector(".donuts-brown-cover");
const coverBrownBlueSprinkleImg = document.querySelector(".donuts-brown-blue-sprinkle");
const coverBrownWhiteSprinkleImg = document.querySelector(".donuts-brown-white-sprinkle");
const coverBrownYellowSprinkleImg = document.querySelector(".donuts-brown-yellow-sprinkle");
const coverBrownPinkSprinkleImg = document.querySelector(".donuts-brown-pink-sprinkle");

//violet possibilities
const coverVioletImg = document.querySelector(".donuts-violet-cover");
const coverVioletBlueSprinkleImg = document.querySelector(".donuts-violet-blue-sprinkle");
const coverVioletWhiteSprinkleImg = document.querySelector(".donuts-violet-white-sprinkle");
const coverVioletYellowSprinkleImg = document.querySelector(".donuts-violet-yellow-sprinkle");
const coverVioletPinkSprinkleImg = document.querySelector(".donuts-violet-pink-sprinkle");

//pink possibilities
const coverPinkImg = document.querySelector(".donuts-pink-cover");
const coverPinkBlueSprinkleImg = document.querySelector(".donuts-pink-blue-sprinkle");
const coverPinkWhiteSprinkleImg = document.querySelector(".donuts-pink-white-sprinkle");
const coverPinkYellowSprinkleImg = document.querySelector(".donuts-pink-yellow-sprinkle");
const coverPinkPinkSprinkleImg = document.querySelector(".donuts-pink-pink-sprinkle");

// btns
const btnBaseDonut = document.querySelector(".btn-base-donut");
const btnNewOrder = document.querySelector(".new-order-btn");
const btnDeliver = document.querySelector(".deliver-btn");
const btnNewGame = document.querySelector(".new-game-btn");

//elements
const pointsElement = document.querySelector(".points");

const baseDonut = document.querySelector(".donutBase");

const gamepointsElement = document.querySelector(".points");

const rightSymbol = document.querySelector(".right");
const wrongSymbol = document.querySelector(".wrong");
const winnerImg = document.querySelector(".winner");

const music = document.querySelector(".audio");
music.play();
music.loop = true;
music.volume = 0.3;

let game = new Game();
let user = new User();

//EXEMPLO QUE DEU CERTO DE UM POR UM:
// function userMakingDonut(clickOption) {
//   user.userSelecting(clickOption);

//   if(user.userCurrentSelection === 'blueSprinkleBottle'){
//     baseDonut.style.display = 'none';
//     donutBaseBlueSpk.style.display = 'block';
//     return;
//   };

function hideDonuts() {
  document.querySelectorAll(".donuts").forEach((donut) => {
    donut.style.display = "none";
  });
}

function checkDonutUserAndRandom() {
  if (
    game.currentDonut.sprinkle === user.userSprinkle &&
    game.currentDonut.cover === user.userCover
  ) {
    hideDonuts();
    rightSymbol.style.display = "block";
    game.points++;
  } else {
    hideDonuts();
    wrongSymbol.style.display = "block";
  }

  // console.log(game);
  // console.log(user);

  updateUserPoints();
}

function updateUserPoints() {
  gamepointsElement.innerText = `${game.points}`;
}

function showCard() {
  hideDonuts();

  let currentDonut = document.querySelector(game.currentDonut.class);

  currentDonut.style.display = "block";

  setTimeout(() => {
    currentDonut.style.display = "none";
  }, 2000);
}

function plusOneRound() {
  game.currentRound++;

  if (game.points === 2) {
    winner();
  }
}

function winner() {
  hideDonuts();
  winnerImg.style.display = "block";

  //FECHAR PÁGINA PARA CLIQUE OU APARECER POP UP???

  window.document.addEventListener('click', function (){
    alert("Press 'New Game' to play again!!");
    
  });

}

//event listerners

btnNewOrder.addEventListener("click", function () {
  game.pickCardDonutsToMake();
  showCard();
});

btnBaseDonut.addEventListener("click", function () {
  hideDonuts();
  baseDonut.style.display = "block";
});

btnCoverGreenBottle.addEventListener("click", function () {
  hideDonuts();
  coverGreenImg.style.display = "block";
  user.userCover = "green";
  user.userSprinkle = "none";
});

btnCoverBrownnBottle.addEventListener("click", function () {
  hideDonuts();
  coverBrownImg.style.display = "block";
  user.userCover = "brown";
  user.userSprinkle = "none";
});

btnCoverVioletnBottle.addEventListener("click", function () {
  hideDonuts();
  coverVioletImg.style.display = "block";
  user.userCover = "violet";
  user.userSprinkle = "none";
});

btnCoverPinknBottle.addEventListener("click", function () {
  hideDonuts();
  coverPinkImg.style.display = "block";
  user.userCover = "pink";
  user.userSprinkle = "none";
});

//SPRINKLES POSSIBILITIES
//BLUE SPRINLE POSSIBILITIES
sprinkleBottleBlueImg.addEventListener("click", function () {
  if (
    baseDonut.style.display == "block" ||
    donutBaseWhiteSpk.style.display == "block" ||
    donutBasePinkSpk.style.display == "block" ||
    donutBaseYellowSpk.style.display == "block"
  ) {
    hideDonuts();
    donutBaseBlueSpk.style.display = "block";
    user.userCover = "none";
    user.userSprinkle = "blue";
    console.log("olaaaaa");
  }

  if (
    coverBrownImg.style.display == "block" ||
    coverBrownWhiteSprinkleImg.style.display == "block" ||
    coverBrownYellowSprinkleImg.style.display == "block" ||
    coverBrownPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverBrownBlueSprinkleImg.style.display = "block";
    user.userCover = "brown";
    user.userSprinkle = "blue";
  }

  if (
    coverPinkImg.style.display == "block" ||
    coverPinkWhiteSprinkleImg.style.display == "block" ||
    coverPinkYellowSprinkleImg.style.display == "block" ||
    coverPinkPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverPinkBlueSprinkleImg.style.display = "block";
    user.userCover = "pink";
    user.userSprinkle = "blue";
  }

  if (
    coverGreenImg.style.display == "block" ||
    coverGreenWhiteSprinkleImg.style.display == "block" ||
    coverGreenYellowSprinkleImg.style.display == "block" ||
    coverGreenPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverGreenBlueSprinkleImg.style.display = "block";
    user.userCover = "green";
    user.userSprinkle = "blue";
  }

  if (
    coverVioletImg.style.display == "block" ||
    coverVioletWhiteSprinkleImg.style.display == "block" ||
    coverVioletYellowSprinkleImg.style.display == "block" ||
    coverVioletPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverVioletBlueSprinkleImg.style.display = "block";
    user.userCover = "violet";
    user.userSprinkle = "blue";
  }
});

//WHITE SPRINKLE POSSIBILITIES
sprinkleBottleWhiteImg.addEventListener("click", function () {
  if (
    baseDonut.style.display == "block" ||
    donutBaseBlueSpk.style.display == "block" ||
    donutBasePinkSpk.style.display == "block" ||
    donutBaseYellowSpk.style.display == "block"
  ) {
    hideDonuts();
    donutBaseWhiteSpk.style.display = "block";
    user.userCover = "none";
    user.userSprinkle = "white";
  }

  if (
    coverBrownImg.style.display == "block" ||
    coverBrownBlueSprinkleImg.style.display == "block" ||
    coverBrownYellowSprinkleImg.style.display == "block" ||
    coverBrownPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverBrownWhiteSprinkleImg.style.display = "block";
    user.userCover = "brown";
    user.userSprinkle = "white";
  }

  if (
    coverPinkImg.style.display == "block" ||
    coverPinkBlueSprinkleImg.style.display == "block" ||
    coverPinkYellowSprinkleImg.style.display == "block" ||
    coverPinkPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverPinkWhiteSprinkleImg.style.display = "block";
    user.userCover = "pink";
    user.userSprinkle = "white";
  }

  if (
    coverGreenImg.style.display == "block" ||
    coverGreenBlueSprinkleImg.style.display == "block" ||
    coverGreenYellowSprinkleImg.style.display == "block" ||
    coverGreenPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverGreenWhiteSprinkleImg.style.display = "block";
    user.userCover = "green";
    user.userSprinkle = "white";
  }

  if (
    coverVioletImg.style.display == "block" ||
    coverVioletBlueSprinkleImg.style.display == "block" ||
    coverVioletYellowSprinkleImg.style.display == "block" ||
    coverVioletPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverVioletWhiteSprinkleImg.style.display = "block";
    user.userCover = "violet";
    user.userSprinkle = "white";
  }
});

//YELLOW SPRNKLE POSSIBILITIES
sprinkleBottleYellowImg.addEventListener("click", function () {
  if (
    baseDonut.style.display == "block" ||
    donutBaseBlueSpk.style.display == "block" ||
    donutBaseWhiteSpk.style.display == "block" ||
    donutBasePinkSpk.style.display == "block"
  ) {
    hideDonuts();
    donutBaseYellowSpk.style.display = "block";
    user.userCover = "none";
    user.userSprinkle = "yellow";
  }

  if (
    coverBrownImg.style.display == "block" ||
    coverBrownBlueSprinkleImg.style.display == "block" ||
    coverBrownWhiteSprinkleImg.style.display == "block" ||
    coverBrownPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverBrownYellowSprinkleImg.style.display = "block";
    user.userCover = "brown";
    user.userSprinkle = "yellow";
  }

  if (
    coverPinkImg.style.display == "block" ||
    coverPinkBlueSprinkleImg.style.display == "block" ||
    coverPinkWhiteSprinkleImg.style.display == "block" ||
    coverPinkPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverPinkYellowSprinkleImg.style.display = "block";
    user.userCover = "pink";
    user.userSprinkle = "yellow";
  }

  if (
    coverGreenImg.style.display == "block" ||
    coverGreenBlueSprinkleImg.style.display == "block" ||
    coverGreenWhiteSprinkleImg.style.display == "block" ||
    coverGreenPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverGreenYellowSprinkleImg.style.display = "block";
    user.userCover = "green";
    user.userSprinkle = "yellow";
  }

  if (
    coverVioletImg.style.display == "block" ||
    coverVioletBlueSprinkleImg.style.display == "block" ||
    coverVioletWhiteSprinkleImg.style.display == "block" ||
    coverVioletPinkSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverVioletYellowSprinkleImg.style.display = "block";
    user.userCover = "violet";
    user.userSprinkle = "yellow";
  }
});

//PINK SPRINKLE POSSIBILITIES
sprinkleBottlePinkImg.addEventListener("click", function () {
  if (
    baseDonut.style.display == "block" ||
    donutBaseBlueSpk.style.display == "block" ||
    donutBaseWhiteSpk.style.display == "block" ||
    donutBaseYellowSpk.style.display == "block"
  ) {
    hideDonuts();
    donutBasePinkSpk.style.display = "block";
    user.userCover = "none";
    user.userSprinkle = "pink";
  }

  if (
    coverBrownImg.style.display == "block" ||
    coverBrownBlueSprinkleImg.style.display == "block" ||
    coverBrownWhiteSprinkleImg.style.display == "block" ||
    coverBrownYellowSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverBrownPinkSprinkleImg.style.display = "block";
    user.userCover = "brown";
    user.userSprinkle = "pink";
  }

  if (
    coverPinkImg.style.display == "block" ||
    coverPinkBlueSprinkleImg.style.display == "block" ||
    coverPinkWhiteSprinkleImg.style.display == "block" ||
    coverPinkYellowSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverPinkPinkSprinkleImg.style.display = "block";
    user.userCover = "pink";
    user.userSprinkle = "pink";
  }

  if (
    coverGreenImg.style.display == "block" ||
    coverGreenBlueSprinkleImg.style.display == "block" ||
    coverGreenWhiteSprinkleImg.style.display == "block" ||
    coverGreenYellowSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverGreenPinkSprinkleImg.style.display = "block";
    user.userCover = "green";
    user.userSprinkle = "pink";
  }

  if (
    coverVioletImg.style.display == "block" ||
    coverVioletBlueSprinkleImg.style.display == "block" ||
    coverVioletWhiteSprinkleImg.style.display == "block" ||
    coverVioletYellowSprinkleImg.style.display == "block"
  ) {
    hideDonuts();
    coverVioletPinkSprinkleImg.style.display = "block";
    user.userCover = "violet";
    user.userSprinkle = "pink";
  }
});

// escuto um por um o click no botão - exemplo que deu certo - um por um
// sprinkleBottleBlueImg.addEventListener('click', function() {
//   userMakingDonut('sprinkleBottleBlueImg');
//   // console.log('ola');
// });

btnDeliver.addEventListener("click", function () {
  checkDonutUserAndRandom();
  plusOneRound();
});

btnNewGame.addEventListener("click", function () {
  document.location.reload(true); // Recarrega a página atual sem usar o cache
});
