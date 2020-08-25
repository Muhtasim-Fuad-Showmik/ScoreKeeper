let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let resetButton = document.querySelector("#reset");

let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");

let numInput = document.querySelector("input[type = 'number']");
let winningScoreDisplay = document.querySelector("p span");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("text-success");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
})

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("text-success");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
})

resetButton.addEventListener("click", function(){
	reset();
})

numInput.addEventListener("click", function(){
	if(this.value > 0){
		winningScoreDisplay.textContent = this.value;
		winningScore = Number(numInput.value);
		reset();
	}
})

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("text-success");
	p2Display.classList.remove("text-success");
	gameOver = false;
}