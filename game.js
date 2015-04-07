var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
var gameRatio = innerWidth/innerHeight;	
//var game = new Phaser.Game(Math.floor(480*gameRatio), 480, Phaser.CANVAS);
var game = new Phaser.Game(438, 160, Phaser.CANVAS);

game.state.add('boot', new Boot(game));
game.state.add('load', new Load(game));
game.state.add('menu', new Menu(game));
game.state.add('play', new Play(game));
game.state.add('win', new Win(game));
game.state.add('lose', new Lose(game));
game.state.start('boot');