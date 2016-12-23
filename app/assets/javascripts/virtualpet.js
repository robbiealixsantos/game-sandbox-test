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

  },
};

var game = new Phaser.Game(360, 640, Phaser.AUTO);

game.state.add('Gamestate', GameState);
game.state.start('GameState');

};