let snake;
let rez=20;
let food;
let w;
let h;

function setup() {
	createCanvas(400, 400);
	w = floor(width / rez);
	h = floor(height/ rez);
	frameRate	(10);
	snake = new Snake();
	foodLocation();
}
function foodLocation(){
	let x = floor(random(w));
	let y = floor(random(h));
	food = createVector(x,y)
}
function keyPressed(){
	if(keyCode===LEFT_ARROW){
		snake.setDir(-1,0);
	}else if(keyCode===RIGHT_ARROW){
		snake.setDir(1,0);
	}else if (keyCode===UP_ARROW) {
		snake.setDir(0,-1);
	}else if (keyCode===DOWN_ARROW) {
		snake.setDir(0,1);
	}
}
function draw() {
	scale(rez);
	background(70);
	textSize(1);
	text('Score:',14,2);
	text(snake.returnLength(),17,2);
	if(snake.eat(food)){
			foodLocation();
	}
	snake.update();
	snake.show();

	if(snake.endGame()){

	noLoop();
	noStroke();
	fill(0,255,0);
	rect(food.x,food.y,1,1);
}
