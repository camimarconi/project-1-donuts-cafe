
const optionsDonuts = [
  {class: '.donutBase-blue-spk',
   sprinkle: 'blue',
   cover: 'none'
  },

  {class: '.donutBase-pink-spk',
   sprinkle: 'pink',
   cover: 'none'
  },

  {class: '.donutBase-white-spk',
  sprinkle: 'white',
  cover: 'none'
  },

  {class: '.donutBase-yellow-spk',
  sprinkle: 'yellow',
  cover: 'none'
  },

  {class: '.donuts-green-cover',
  sprinkle: 'none',
  cover: 'green'
  },

  {class: '.donuts-green-blue-sprinkle',
  sprinkle: 'blue',
  cover: 'green'
  },

  {class: '.donuts-green-white-sprinkle',
  sprinkle: 'white',
  cover: 'green'
  },

  {class: '.donuts-green-yellow-sprinkle',
  sprinkle: 'yellow',
  cover: 'green'
  },

  {class: '.donuts-green-pink-sprinkle',
  sprinkle: 'pink',
  cover: 'green'
  },

  {class: '.donuts-brown-cover',
  sprinkle: 'none',
  cover: 'brown'
  },

  {class: '.donuts-brown-blue-sprinkle',
  sprinkle: 'blue',
  cover: 'brown'
  },

  {class: '.donuts-brown-white-sprinkle',
  sprinkle: 'white',
  cover: 'brown'
  },

  {class: '.donuts-brown-yellow-sprinkle',
  sprinkle: 'yellow',
  cover: 'brown'
  },

  {class: '.donuts-violet-cover',
  sprinkle: 'none',
  cover: 'violet'
  },

  {class: '.donuts-violet-blue-sprinkle',
  sprinkle: 'blue',
  cover: 'violet'
  },

  {class: '.donuts-violet-white-sprinkle',
  sprinkle: 'white',
  cover: 'violet'
  },

  {class: '.donuts-violet-yellow-sprinkle',
  sprinkle: 'yellow',
  cover: 'violet'
  },

  {class: '.donuts-violet-pink-sprinkle',
  sprinkle: 'pink',
  cover: 'violet'
  },

  {class: '.donuts-pink-cover',
  sprinkle: 'none',
  cover: 'pink'
  },

  {class: '.donuts-pink-blue-sprinkle',
  sprinkle: 'blue',
  cover: 'pink'
  },

  {class: '.donuts-pink-white-sprinkle',
  sprinkle: 'white',
  cover: 'pink'
  },

  {class: '.donuts-pink-yellow-sprinkle',
  sprinkle: 'yellow',
  cover: 'pink'
  },

  {class: '.donuts-pink-pink-sprinkle',
  sprinkle: 'pink',
  cover: 'pink'
  }
];

class Game {
    constructor() {
      this.currentDonut = '';
      this.points = 0;
      this.timer = 2;
      this.baseDonut = false;
    };

    pickCardDonutsToMake() {

      let numRandom = Math.floor(Math.random() * optionsDonuts.length);
      
      this.currentDonut = optionsDonuts[numRandom];
    };
};

class User {
  constructor() {
    this.userCover = 'none';
    this.userSprinkle = 'none';
  };
};