var Ball = require('./ball');
var Paddle = require('./paddle.js');
var Block = require('./block');


var World = function() {
  this.width = 600;
  this.height = 500;
  this.ball = new Ball(400, 400, "rgba(0, 255, 0, 1)");
  this.paddle = new Paddle(300, 450, '#C84848');
  this.blocks = [new Block()];
}




module.exports = World;