Player = function(game) {
  this.game = game;
  this.player = null;
  this.cursors = null;
}

Player.prototype = {
  create: function() {
    this.player = this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2, 'boy')
    this.player.anchor.setTo(0.5, 0.5);
    this.player.scale.setTo(0.5, 0.5);
    this.game.physics.arcade.enable(this.player);
    this.player.body.collideWorldBounds = true;
    
    this.player.animations.add('run', ['run1', 'run3', 'run2', 'run4'], 8, true, false);
    this.player.animations.add('jump', ['jump1', 'jump2'], 2, true, false);
    this.player.animations.add('fall', ['fall1', 'fall2', 'fall3'], 8, false, false);
    
    this.cursors = this.game.input.keyboard.createCursorKeys();
  },
  update: function() {
    
    this.player.body.velocity.x = 0;
    
    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -100;
    } else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = 100;
    }
    
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.body.velocity.y = -150;
    } else {
      this.player.animations.play('run');
    }
    
    if (this.player.body.velocity.y < 0) {
      this.player.frameName = 'jump1';
    }
    
    if (this.player.body.velocity.y > 0) {
      this.player.frameName = 'jump2';
    }
  }
}