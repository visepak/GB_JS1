// Домашнее задание №3

/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. 
*/
///*
var simplNumberArr = [0, 1, 2];
var i = 3;
var count = 0;
while(i <= 100) {
	for(var j = 2; j < i; j++) {
	  if(i % j === 0) {
		  count++;
	  }
	}
	if(count === 0) {
		simplNumberArr.push(i);		
	} else {
		count = 0;
	}
i++;
}
console.log(simplNumberArr);
//*/

/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
Организовать такой массив для хранения товаров в корзине;
Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
/*
var basket = [3, 4, 6, 78, 34, 2];

function countBasketPrice(arr) {
	var basketSum = 0;
	for(i = 0; i < arr.length; i++) {
		basketSum = basketSum + parseInt(arr[i]);
	}
	return basketSum;
}
console.log(countBasketPrice(basket));
//*/
/*
3. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть должно так:
for(…){// здесь пусто} 
*/
//for(var i = 0; i < 10; console.log(i++)) {}

/*
4. * Нарисовать пирамиду из 20 рядов с помощью console.log, как показано на рисунке:
*/

/*
var arr = 'x';

for(var i = 0; i < 20; i++) {
	console.log(arr);
	arr += 'x';
}
//*/

//Для быков и коров генератор 4хзначного числа с неповторяющимися цифрами
var templ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var rndNum = '';
var rndPos = 0;

while(rndNum.length < 4) { 
	rndPos = Math.floor(Math.random()*(templ.length - 1));
	console.log(rndPos);
	rndNum += templ[rndPos];
	templ[rndPos] = templ[(templ.length-1)];
	templ.pop();
}
console.log(rndNum);
























