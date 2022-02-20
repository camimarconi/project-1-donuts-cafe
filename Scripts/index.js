
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

const gamepointsElement = document.querySelector('.points');

const rightSymbol = document.querySelector('.right');
const wrongSymbol = document.querySelector('.wrong');
const winnerImg = document.querySelector('.winner');


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


function hideDonuts(){
  document.querySelectorAll('.donuts').forEach(donut => {
    donut.style.display = 'none';
  });
  console.log('hide')
};

function checkDonutUserAndRandom (){
    if (game.currentDonut.sprinkle === user.userSprinkle && game.currentDonut.cover === user.userCover){
      hideDonuts();
      rightSymbol.style.display = 'block';
      game.points++

    }else{
      hideDonuts();
      wrongSymbol.style.display = 'block';
    }

    // console.log(game);
    // console.log(user);

    updateUserPoints();
};


function updateUserPoints() {
  gamepointsElement.innerText = `${game.points}`;
};


function showCard() {
  hideDonuts();

  let currentDonut = document.querySelector(game.currentDonut.class);

  currentDonut.style.display = 'block';

  setTimeout(() => {currentDonut.style.display = 'none'}, 2000);
};


function plusOneRound(){
  game.currentRound++

  if(game.currentRound === 5){
    winner();
  }
};


function winner(){
  //mostrar uma imagem de ganhou!? pensando ainda.
};


//event listerners

btnNewOrder.addEventListener('click', function () {
  game.pickCardDonutsToMake();
  showCard();
  
// console.log(game);
// console.log(document.querySelector(game.donutCardRandom.class));
});

btnBaseDonut.addEventListener('click', function(){
  baseDonut.style.display = 'block';
});


//escutar na página toda o clique
window.document.addEventListener('click', (event) => {
 
  const toppingTargetElement = event.target;
  // console.log(toppingTargetElement);

  //COVER POSSIBILITIES
  if (toppingTargetElement.classList.contains('cover')){
    hideDonuts();    

    if(toppingTargetElement.classList.contains('cover-btn-brown')){
      baseDonut.style.display = 'none';
      coverBrownImg.style.display = 'block';
      user.userCover = 'brown';
      user.userSprinkle = 'none';
    }

    if(toppingTargetElement.classList.contains('cover-btn-pink')){
      baseDonut.style.display = 'none';
      coverPinkImg.style.display = 'block';
      user.userCover = 'pink';
      user.userSprinkle = 'none';
    }

    if(toppingTargetElement.classList.contains('cover-btn-green')){
      baseDonut.style.display = 'none';
      coverGreenImg.style.display = 'block';
      user.userCover = 'green';
      user.userSprinkle = 'none';
    }

    if(toppingTargetElement.classList.contains('cover-btn-violet')){
      baseDonut.style.display = 'none';
      coverVioletImg.style.display = 'block';
      user.userCover = 'violet';
      user.userSprinkle = 'none';
    }
  }

    //SPRINKLES POSSIBILITIES
    //BLUE SPRINLE POSSIBILITIES
    if(toppingTargetElement.classList.contains('sprinkle-bottle-blue')){
      
      //USUÁRIO NÃO CONSEGUE ALTERAR O SPRINKLE


      if(coverBrownImg.style.display == 'block'){
        coverBrownImg.style.display = 'none';
        coverBrownBlueSprinkleImg.style.display = 'block';
        user.userCover = 'brown';
        user.userSprinkle = 'blue';        
      
      }else if(coverPinkImg.style.display == 'block'){
        coverPinkImg.style.display = 'none';
        coverPinkBlueSprinkleImg.style.display = 'block';
        user.userCover = 'pink';
        user.userSprinkle = 'blue';
    
      }else if(coverGreenImg.style.display == 'block'){
        coverGreenImg.style.display = 'none';
        coverGreenBlueSprinkleImg.style.display = 'block';
        user.userCover = 'green';
        user.userSprinkle = 'blue';
        
      }else if(coverVioletImg.style.display == 'block'){
        coverVioletImg.style.display = 'none';
        coverVioletBlueSprinkleImg.style.display = 'block';
        user.userCover = 'violet';
        user.userSprinkle = 'blue';

      }
    }

    //PINK SPRINKLE POSSIBILITIES
    if(toppingTargetElement.classList.contains('sprinkle-bottle-pink')){
      if(coverBrownImg.style.display == 'block'){
        coverBrownImg.style.display = 'none';
        coverBrownPinkSprinkleImg.style.display = 'block';
        user.userCover = 'brown';
        user.userSprinkle = 'pink';
      }

      if(coverPinkImg.style.display == 'block'){
        coverPinkImg.style.display = 'none';
        coverPinkPinkSprinkleImg.style.display = 'block';
        user.userCover = 'pink';
        user.userSprinkle = 'pink';
      }

      if(coverGreenImg.style.display == 'block'){
        coverGreenImg.style.display = 'none';
        coverGreenPinkSprinkleImg.style.display = 'block';
        user.userCover = 'green';
        user.userSprinkle = 'pink';
      }

      if(coverVioletImg.style.display == 'block'){
        coverVioletImg.style.display = 'none';
        coverVioletPinkSprinkleImg.style.display = 'block';
        user.userCover = 'violet';
        user.userSprinkle = 'pink';
      }
    }

    //WHITE SPRINKLE POSSIBILITIES
    if(toppingTargetElement.classList.contains('sprinkle-bottle-white')){

      if(coverBrownImg.style.display == 'block'){
        coverBrownImg.style.display = 'none';
        coverBrownWhiteSprinkleImg.style.display = 'block';
        user.userCover = 'brown';
        user.userSprinkle = 'white';
      }

      if(coverPinkImg.style.display == 'block'){
        coverPinkImg.style.display = 'none';
        coverPinkWhiteSprinkleImg.style.display = 'block';
        user.userCover = 'pink';
        user.userSprinkle = 'white';
      }

      if(coverGreenImg.style.display == 'block'){
        coverGreenImg.style.display = 'none';
        coverGreenWhiteSprinkleImg.style.display = 'block';
        user.userCover = 'green';
        user.userSprinkle = 'white';
      }

      if(coverVioletImg.style.display == 'block'){
        coverVioletImg.style.display = 'none';
        coverVioletWhiteSprinkleImg.style.display = 'block';
        user.userCover = 'violet';
        user.userSprinkle = 'white';
      }
    }

    //YELLOW SPRNKLE POSSIBILITIES
    if(toppingTargetElement.classList.contains('sprinkle-bottle-yellow')){

      if(coverBrownImg.style.display == 'block'){
        coverBrownImg.style.display = 'none';
        coverBrownYellowSprinkleImg.style.display = 'block';
        user.userCover = 'brown';
        user.userSprinkle = 'yellow';
      }

      if(coverPinkImg.style.display == 'block'){
        coverPinkImg.style.display = 'none';
        coverPinkYellowSprinkleImg.style.display = 'block';
        user.userCover = 'pink';
        user.userSprinkle = 'yellow';
      };

      if(coverGreenImg.style.display == 'block'){
        coverGreenImg.style.display = 'none';
        coverGreenYellowSprinkleImg.style.display = 'block';
        user.userCover = 'green';
        user.userSprinkle = 'yellow';
      };

      if(coverVioletImg.style.display == 'block'){
        coverVioletImg.style.display = 'none';
        coverVioletYellowSprinkleImg.style.display = 'block';
        user.userCover = 'violet';
        user.userSprinkle = 'yellow';
      };
    };

});



// escuto um por um o click no botão - exemplo que deu certo - um por um
// sprinkleBottleBlueImg.addEventListener('click', function() {
//   userMakingDonut('sprinkleBottleBlueImg'); 
//   // console.log('ola');
// });


btnDeliver.addEventListener('click', function () {
  checkDonutUserAndRandom();
  plusOneRound();
});


btnNewGame.addEventListener('click', function(){
  game.newGame();
  document.location.reload(true); // Recarrega a página atual sem usar o cache
});