<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Личный сайт студента GeekBreains</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
	<div id="head">
	<a href="index.html">Главная</a> <span> </span>/
	<a href="puzzles.html">Загадки</a> <span> </span>/ 
	<a href="guess.html">Угадайка</a> <span> </span>/ 
	<a href="guess-2.html">Угадайка мультиплеер</a>  
	</div>
		
		<div id="content">
		<h1> Личный сайт студента GeekBreains </h1><br>
		
			

		<div id="center1">
		<img src="img/puzzles.png">
		
			
		</div>

		<div id="box">
		<p>
			<?php			
				$score = 0;
				$userAnswer = $_Get['userAnswer1'];
				if ($userAnswer == 'подушка' ||$userAnswer == 'Подушка' ||$userAnswer == 'ПОДУШКА') {
					echo 'Ответ на первый вопрос верный.';
					$score++;
				} else {
				echo 'Ответ на первый вопрос неверный.';
				}

			
			echo '<br>';

			
			
				$userAnswer = $_Get['userAnswer2'];
				if($userAnswer == 'сорока' ||$userAnswer == 'Сорока' ||$userAnswer == 'СОРОКА') {
					echo 'Ответ на второй вопрос верный.';
					$score++;
				} else {
				echo 'Ответ на второй вопрос неверный.';
				}

			echo '<br>';
			

				$userAnswer = $_Get['userAnswer3'];
				if($userAnswer == 'маяк' ||$userAnswer == 'Маяк' ||$userAnswer == 'МАЯК') {
					echo 'Ответ на третий вопрос верный.';
					$score++;
				} else {
				echo 'Ответ на третий вопрос неверный.';
				}

			echo '<br>';
			

				$userAnswer = $_Get['userAnswer4'];
				if($userAnswer == 'чайник' ||$userAnswer == 'Чайник' ||$userAnswer == 'ЧАЙНИК') {
					echo 'Ответ на четвёртый вопрос верный.';
					$score++;
				} else {
				echo 'Ответ на четвёртый вопрос неверный.';
				}

				echo '<br><br>';
				echo 'Правильных ответов: ' . $score;
			echo'<br><br>'

			?>
		
		

	</div>
			
			</p>
		</div>

		</div>

	<div id="footer1">Copyright © 2017 <a href="https://geekbrains.ru/" target="_blank">GeekBrains</a></div>






</body>

</html>