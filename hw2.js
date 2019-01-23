/*
var randomNumber = Math.floor(Math.random() * 99);
var count=0;
function getGame () {	
	var resolve = prompt('Попробуй угадать число');
	if (resolve == randomNumber) {
		alert('Верно! Угадал за ' + count + ' попыток');
		return
	} else {
		var delta = ( resolve < randomNumber) ? 'Загаданное число больше' : 'Загаданное число меньше';
		count++;
		alert('Не верно! Загаданное число '+ delta + '-' + randomNumber);
		getGame();		
	}
}
getGame();

*/
/*
function Akkerman(m, n) {
if (m == 0 ) {
	return n + 1;
} else if ( m > 0 && n == 0) {
	return Akkerman((m-1), 1);
} else if ( m > 0 && n > 0 ) {
	return Akkerman((m-1), Akkerman(m, (n-1)));
}
}

var m = +prompt('Введите m');
var n = +prompt('Введите n');
alert( 'Значение функции - ' + Akkerman(m, n));
*/

/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (применить switch). SUM SUB MUL DIV*/
/*
function mathOperation(arg1, arg2, operation) {
	var result = 0;
	switch(operation) {
		case 'sum':
		  result = arg1 + arg2;
		  break;
		case 'sub': 
		  result = arg1 - arg2;
		  break;
		case 'mul': 
		  result = arg1 * arg2;
		  break;
		case 'div': 
		  result = arg1 / arg2;
		  break;  
		default:
			result = 'неверная операция';
	}
	return result;
}

arg1 = prompt('Введите arg1');
arg2 = prompt('Введите arg2');
operation = prompt('Введите operation');

alert('Результат - ' + mathOperation(arg1, arg2, operation));
*/

/*
function power(val, pow) {
	if (pow == 0) {
		return 1;
	} else {
		return val * power(val, (pow-1));
	}
}


val = +prompt('введите val');
pow = +prompt('введите pow');

alert(val + ' в степени ' + pow + ' равно ' + power(val, pow));
*/


//седьмая часть ДЗ

if (null==0) {
    if (null===0){console.log('null абсолютно равно 0')}//в операторе абстрактного сравнения равенств не предусмотрен случай сравнения null и числа, поэтому возвращается fslse по умолчанию, хотя если преобразовывать null в число то получаем +0 по спецификации.
    else {
        console.log('null равно 0, кроме формата')
    }

}

else if (null>0) {
    console.log('null больше 0')
}
else if (null<0) {
    console.log('null меньше 0')
}
else if (null>=0) {
    console.log('БРЕД!! Если null < 0 принимает значение false, то null >= 0 принимает значение true')
}
else    {
    console.log('null невозможно сравнить с 0')
}
if (null<=0) {
    console.log('Обратный БРЕД!!')
}

console.log('Конец пункта №7 ДЗ ')

