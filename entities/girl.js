Girl = function(game) {
  this.game = game;
  this.girl = null;
  this.sparkles = null;
  //this.dropTimer = this.game.time.now() + 2500;
}

Girl.prototype = {
  create: function() {
    this.girl = this.game.add.sprite(this.game.world.width - 60, 30, 'girl');
    this.girl.anchor.setTo(0.5, 0.5);
    this.girl.scale.setTo(0.5, 0.5);
    this.game.add.tween(this.girl).to({y: 50}, 1500, Phaser.Easing.Elastic.Out, true, 0, -1, true);
    
    this.sparkles1 = this.game.add.sprite(this.girl.x, this.girl.y, 'effects');
    this.sparkles1.anchor.setTo(0.5, 0.5);
    this.sparkles1.scale.setTo(0.5, 0.5);
    this.sparkles1.animations.add('sparkle', ['shiny_1', 'shiny_2', 'shiny_3', 'shiny_4'], 1000, true, false);
    this.game.add.tween(this.sparkles1).to({y: 50}, 1500, Phaser.Easing.Elastic.Out, true, 100, -1, true);
    
    this.sparkles2 = this.game.add.sprite(this.girl.x, this.girl.y + 10, 'effects');
    this.sparkles2.anchor.setTo(0.5, 0.5);
    this.sparkles2.scale.setTo(0.5, 0.5);
    this.sparkles2.animations.add('sparkle', ['shiny_1', 'shiny_2', 'shiny_3', 'shiny_4'], 1000, true, false);
    this.game.add.tween(this.sparkles2).to({y: 60}, 1500, Phaser.Easing.Elastic.Out, true, 150, -1, true);
  },
  update: function() {
    this.sparkles1.animations.play('sparkle');
    this.sparkles2.animations.play('sparkle');
  }
}