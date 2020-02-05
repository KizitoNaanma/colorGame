var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var displayMessage = document.querySelector('#displayMessage');
var h1 = document.querySelector('h1');
var reset = document.querySelector("#reset");
var easy = document.querySelector("#Easy");
var hard = document.querySelector("#Hard");


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
			//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
		if (clickedColor === pickedColor){
			displayMessage.textContent = "Correct!"
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again?";
		}else{
			displayMessage.textContent = "Try again!";
			this.style.backgroundColor = "#232323";
		}
	});
};

function changeColor(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	};
};

function pickColor() {
	var random = Math.floor(Math.random() * squares.length);
	return colors[random]
};

function generateRandomColor(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
};

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}

reset.addEventListener("click", function(){
	//generate new random colors
	colors = generateRandomColor(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of squares
	
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";

	
});

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}	
	}
});

hard.addEventListener("click", function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	}
});






