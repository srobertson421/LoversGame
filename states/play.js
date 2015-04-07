Play = function(game) {
  this.game = game;
  this.boy = new Player(game);
  this.girl = new Girl(game);
  this.bg = null;
  this.ground = null;
}

Play.prototype = {
  create: function() {
    
    this.bg = this.game.add.tileSprite(0, 0, 438, 136, 'background');
    this.ground = this.game.add.tileSprite(0, 125, 438, 44, 'ground');
    this.game.physics.arcade.enable(this.ground);
    this.ground.body.allowGravity = false;
    this.ground.body.immovable = true;
    this.ground.body.setSize(this.ground.width, this.ground.height - 10, 0, 10);
    
    this.boy.create();
    this.girl.create();
  },
  update: function() {
    
    this.game.physics.arcade.collide(this.boy.player, this.ground);
    
    this.bg.tilePosition.x -= 0.5;
    this.ground.tilePosition.x -= 1.5;
    
    this.boy.update();
    this.girl.update();
    
  }
}