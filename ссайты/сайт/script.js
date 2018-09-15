function playGuess2() {
		
	var name = prompt("Игрок №1 введите имя")
	var name2 = prompt("Игрок №2 введите имя")

	var answer = parseInt(Math.random() * 100);
	var a = 0
	var a2 = 0
	while (true) {
	var userAnswer = prompt("Игрок "+name+" ваш ход, ведите число от 0 до 100,\nили нажмите q для выхода");

	if (userAnswer=="q") {
		alert("Пока")
		break;
	}
	userAnswer = parseInt(userAnswer);	
		a++;

	if (userAnswer > answer){
		alert(name+" Ваше число слишком велико");
	} else if (userAnswer < answer){
		alert(name+" Ваше число слишком мало");
	} else if (answer == userAnswer){
		alert("Игрок "+name+" угадал");
		alert("количество попыток игрока "+name+" :"+a)
		break;
	} else {
		alert("Игрок "+name2+" это, не число");
	}

	
	var userAnswer2 = prompt("Игрок "+name2+" ваш ход, ведите число от 0 до 100,\nили нажмите q для выхода");
	if (userAnswer2=="q") {
		alert("Пока")
		break;
	}
	userAnswer2 = parseInt(userAnswer2);	
		a2++;
	

	if (userAnswer > answer){
		alert(name2+" Ваше число слишком велико");
	} else if (userAnswer < answer){
		alert(name2+" Ваше число слишком мало");
	} else if (answer == userAnswer2){
		alert("Игрок "+name2+" угадал");
		alert("количество попыток игрока "+name2+" :"+a2)
		break;
	} else {
		alert("Игрок "+name2+" это, не число");
	}
}
	}
