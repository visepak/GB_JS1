// Домашнее задание №4
/*
var numb = prompt('Введите 3х значное число');

	
	
function getObjNumb(number) {
	var numbObj = {
	hundreds: number[0],
	dozen: number[1],
	units: number[2]}
	
	 return numbObj
}

	console.log(getObjNumb(numb));
*/
/*	
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
Организовать такой массив для хранения товаров в корзине;
Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
///*
var basket = {
	item1: +3,
	item2: +4,
	item3: +6,
    item4: +78,
    item5: +34,
	};
console.log(basket);
function countBasketPrice(obj) {
	var basketSum = 0;
	for (var key in obj) {
		console.log(obj[key]);
	basketSum = basketSum + parseInt(obj[key]);
	}
	return basketSum;
}
console.log(countBasketPrice(basket));
//*/