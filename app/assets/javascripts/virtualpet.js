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

  create: function(){
    this.background = this.game.add.sprite(0, 0, 'backyard');

    this.pet = this.game.add.sprite(100, 400, 'pet');
    this.pet.anchor.setTo(0.5);

    //custom properties - not built in phaser methods
    this.pet.customParams = {health: 100, fun: 100};

    this.apple = this.game.add.sprite(72, 570, 'apple');
    this.candy = this.game.add.sprite(144, 570, 'candy');
    this.toy = this.game.add.sprite(216, 570, 'toy');
    this.rotate = this.game.add.sprite(288, 570, 'rotate');
  },
};

var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('Gamestate', GameState);
game.state.start('GameState');

};