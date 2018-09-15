		var correctAnswerCount=0;
	function askQuestion(textBoxId, answer) {
		var userAnswer = document.getElementById(textBoxId).value;
		if(userAnswer.toLowerCase() == answer) {
			correctAnswerCount++;
		}
	}
function playPuzzle(){
		correctAnswerCount=0;
		
		askQuestion("userAnswer1", "подушка");
		askQuestion("userAnswer2", "сорока");
		askQuestion("userAnswer3", "маяк");
		askQuestion("userAnswer4", "чайник");

		//alert("Правельных ответов: " + correctAnswerCount);
		document.getElementById("result").innerHTML = 
			"Правельных ответов: " + correctAnswerCount;

}
