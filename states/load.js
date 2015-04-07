Load = function(game) {
  this.game = game;
}

Load.prototype = {
  preload: function() {
    this.game.load.image('background', 'assets/bg.png');
    this.game.load.image('ground', 'assets/ground.png');
    this.game.load.atlasJSONHash('boy', 'assets/boy.png', 'assets/boy.json');
    this.game.load.atlasJSONHash('girl', 'assets/girl.png', 'assets/girl.json');
    this.game.load.atlasJSONHash('bomb', 'assets/bomb.png', 'assets/bomb.json');
    this.game.load.atlasJSONHash('effects', 'assets/effects.png', 'assets/effects.json');
    this.game.load.atlasJSONHash('heart', 'assets/heart.png', 'assets/heart.json');
    this.game.load.image('box', 'assets/box.png');
    this.game.load.image('bush', 'assets/bush.png');
    this.game.load.image('rock', 'assets/rock.png');
    this.game.load.image('log', 'assets/log.png');
  },
  
  create: function() {
    this.game.stage.backgroundColor = '000000';
    
    this.game.state.start('menu');
  }
}
