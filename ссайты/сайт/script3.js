function playGuess2() {
		
	var name = prompt("Игрок введите имя")
	

	var answer = parseInt(Math.random() * 100);
	var a = 0
	while (true) {
	
	var userAnswer = prompt(name+", ведите число от 0 до 100,\nили нажмите q для выхода");

	if (userAnswer=="q") {
		alert("Пока")
		break;
	}
	userAnswer = parseInt(userAnswer);	
		a++;

	if (userAnswer > answer){
	alert(name+" ваше число слишком велико");
	} else if (userAnswer < answer){
		alert(name+" Ваше число слишком мало");
	} else if (answer == userAnswer){
		alert("Вы угодали");
		alert("количество попыток игрока "+name+" :"+a)
		break;
	} else {
		alert(userAnswer+"это не число");
	}

	
	

}
	}
