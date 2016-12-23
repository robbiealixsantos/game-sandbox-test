function virtualPet(){

var GameState = {
  init: function(){
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },

  preload: function(){
    this.load.image('backyard', 'assets/virtualpet/backyard.png');
    this.load.image('apple', 'assets/virtualpet/apple.png');
    this.load.image('candy', 'assets/virtualpet/candy.png');
    this.load.image('rotate', 'assets/virtualpet/rotate.png');
    this.load.image('toy', 'assets/virtualpet/rubber_duck.png');
    this.load.image('arrow', 'assets/virtualpet/arrow.png');
    this.load.spritesheet('pet', 'assets/virtualpet/pet.png', 97, 83, 5, 1, 1);
  },

  create: function() {
    this.background = this.game.add.sprite(0, 0, 'backyard');

    this.pet = this.game.add.sprite(100, 400, 'pet');
    this.pet.anchor.setTo(0.5);

    //custom properties
    this.pet.customParams = {health: 100, fun: 100};

    //draggable pet
    this.pet.inputEnabled = true;
    this.pet.input.enableDrag();

    this.apple = this.game.add.sprite(72, 570, 'apple');
    this.apple.anchor.setTo(0.5);
    this.apple.inputEnabled = true;
    this.apple.customParams = {health: 20};
    this.apple.events.onInputDown.add(this.pickItem, this);

    this.candy = this.game.add.sprite(144, 570, 'candy');
    this.candy.anchor.setTo(0.5);
    this.candy.inputEnabled = true;
    this.candy.customParams = {health: -10, fun: 10};
    this.candy.events.onInputDown.add(this.pickItem, this);

    this.toy = this.game.add.sprite(216, 570, 'toy');
    this.toy.anchor.setTo(0.5);
    this.toy.inputEnabled = true;
    this.toy.customParams = {fun: 20};
    this.toy.events.onInputDown.add(this.pickItem, this);

    this.rotate = this.game.add.sprite(288, 570, 'rotate');
    this.rotate.anchor.setTo(0.5);
    this.rotate.inputEnabled = true;
    this.rotate.events.onInputDown.add(this.rotatePet, this);

    this.buttons = [this.apple, this.candy, this.toy, this.rotate];

    //nothing is selected
    this.selectedItem = null;

  },
  pickItem: function(sprite, event) {
    console.log('pick item');
  },
  rotatePet: function(sprite, event) {
    console.log('rotating..');
  }
};

var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');

};