// . um jogador
//. jogador vê a carta e monta donut
// . se acerta, ganha ponto
// . se erra, perde ponto
// . ganha quando somar 5 pontos
// . Contabilizar quantidade de vitórias e tirar a de erros

// criar minhas constantes conectadas no html
//spk bottles
const sprinkleBottleBlueImg = document.querySelector('.sprinkle-bottle-blue');
const sprinkleBottleWhiteImg = document.querySelector('.sprinkle-bottle-white');
const sprinkleBottleYellowImg = document.querySelector('.sprinkle-bottle-yellow');
const sprinkleBottlePinkImg = document.querySelector('.sprinkle-bottle-pink');

//cover bottles
const btnCoverGreenBottle = document.querySelector('.cover-btn-green');
const btnCoverBrownnBottle = document.querySelector('.cover-btn-brown');
const btnCoverVioletnBottle = document.querySelector('.cover-btn-violet');
const btnCoverPinknBottle = document.querySelector('.cover-btn-pink');

//no cover possobilities
const donutBaseBlueSpk = document.querySelector('.donutBase-blue-spk');
const donutBasePinkSpk = document.querySelector('.donutBase-pink-spk');
const donutBaseWhiteSpk = document.querySelector('.donutBase-white-spk');
const donutBaseYellowSpk = document.querySelector('.donutBase-yellow-spk');

//green possibilities
const coverGreenImg = document.querySelector('.donuts-green-cover');
const coverGreenBlueSprinkleImg = document.querySelector('.donuts-green-blue-sprinkle');
const coverGreenWhiteSprinkleImg = document.querySelector('.donuts-green-white-sprinkle');
const coverGreenYellowSprinkleImg = document.querySelector('.donuts-green-yellow-sprinkle');
const coverGreenPinkSprinkleImg = document.querySelector('.donuts-green-pink-sprinkle');

//brown possibilities
const coverBrownImg = document.querySelector('.donuts-brown-cover');
const coverBrownBlueSprinkleImg = document.querySelector('.donuts-brown-blue-sprinkle');
const coverBrownWhiteSprinkleImg = document.querySelector('.donuts-brown-white-sprinkle');
const coverBrownYellowSprinkleImg = document.querySelector('.donuts-brown-yellow-sprinkle');
const coverBrownPinkSprinkleImg = document.querySelector('.donuts-brown-pink-sprinkle');

//violet possibilities
const coverVioletImg = document.querySelector('.donuts-violet-cover');
const coverVioletBlueSprinkleImg = document.querySelector('.donuts-violet-blue-sprinkle');
const coverVioletWhiteSprinkleImg = document.querySelector('.donuts-violet-white-sprinkle');
const coverVioletYellowSprinkleImg = document.querySelector('.donuts-violet-yellow-sprinkle');
const coverVioletPinkSprinkleImg = document.querySelector('.donuts-violet-pink-sprinkle');

//pink possibilities
const coverPinkImg = document.querySelector('.donuts-pink-cover');
const coverPinkBlueSprinkleImg = document.querySelector('.donuts-pink-blue-sprinkle');
const coverPinkWhiteSprinkleImg = document.querySelector('.donuts-pink-white-sprinkle');
const coverPinkYellowSprinkleImg = document.querySelector('.donuts-pink-yellow-sprinkle');
const coverPinkPinkSprinkleImg = document.querySelector('.donuts-pink-pink-sprinkle');

// btns
const btnBaseDonut = document.querySelector('.btn-base-donut');
const btnNewOrder = document.querySelector('.new-order-btn');
const btnDeliver = document.querySelector('.deliver-btn');
const btnNewGame = document.querySelector('.new-game-btn');

//elements
const pointsElement = document.querySelector('.points');

const baseDonut = document.querySelector('.donutBase');


let game = new Game();
let user = new User();



function userMakingDonut(clickOption) {

// user.userSelecting(clickOption);
// console.log(toppingTargetElement);
// console.log(toppingTargetElement);

//possibilidades de cover
  if(clickOption.alt === 'cover-btn-pink'){
    baseDonut.style.display = 'none';
    coverPinkImg.style.display = 'block';
    return;
  };


// falta if do brown cover

//   if(clickOption.alt === 'cover-btn-pink'){
//     baseDonut.style.display = 'none';
//     coverPinkImg.style.display = 'block';
//     return;
//   };

//   if(clickOption.alt === 'cover-btn-green'){
//     baseDonut.style.display = 'none';
//     coverGreenImg.style.display = 'block';
//     return;
//   };

//   if(clickOption.alt === 'cover-btn-violet'){
//     baseDonut.style.display = 'none';
//     coverVioletImg.style.display = 'block';
//     return;
//   };


// //possibilidade de sprinkle
//   if(clickOption.alt === 'blue-sprinkle-bottle'){
//     baseDonut.style.display = 'none';
//     donutBaseBlueSpk.style.display = 'block';
//     return;
//   };

//   if(clickOption.alt === 'blue-sprinkle-bottle'){
//     baseDonut.style.display = 'none';
//     donutBaseBlueSpk.style.display = 'block';
//     return;
//   };





//EXEMPLO QUE DEU CERTO DE UM POR UM:
// function userMakingDonut(clickOption) {
//   user.userSelecting(clickOption);

//   if(user.userCurrentSelection === 'sprinkleBottleBlueImg'){
//     baseDonut.style.display = 'none';
//     donutBaseBlueSpk.style.display = 'block';
//     return;
//   };





}

//CHECAR SE FUNCIONA!! AINDA NÃO FIZ CONSOLE LOG  
function checkDonutUserAndRandom (){
  //aqui estou checando se as imgs são as mesmas e pontuação +/- 
  // currentCard vai existir neste escopo?
    if (currentCard.sprinkle === game.userSprinkle && currentCard.cover === game.userCover){
      game.points++
    }else{
      game.points--
    }
};

 
//event listerners

btnNewOrder.addEventListener('click', function () {

  let currentCard = document.querySelector(game.donutCardRandom.class);

  currentCard.style.display = 'block';

  setTimeout(() => {currentCard.style.display = 'none'}, 3000);
// console.log(game);
// console.log(document.querySelector(game.donutCardRandom.class));
});

btnBaseDonut.addEventListener('click', function(){  
  baseDonut.style.display = 'block';
});


//escutar na página toda o clique
document.addEventListener('click', (event) => {
  const toppingTargetElement = event.target;
  console.log(toppingTargetElement);

  if (toppingTargetElement.classList.contains('topping')){
   userMakingDonut(toppingTargetElement);
  };
});


// escuto um por um o click no botão
// sprinkleBottleBlueImg.addEventListener('click', function() {
//   userMakingDonut('sprinkleBottleBlueImg'); 
//   // console.log('ola');
// });




btnDeliver.addEventListener('click', function () {
  
  
});
