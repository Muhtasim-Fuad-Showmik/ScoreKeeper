let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let resetButton = document.querySelector("#reset");

let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
})

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
})