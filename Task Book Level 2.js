

<script> //2.1.1
//Дана некоторая строка. Найдите позицию первого нуля в строке.
let str = '1908706';
console.log(str.indexOf('0'));
</script>

<script> //2.1.2
//Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
for (let i = 1; i<= 1000; i++) {
	let j = String(i);
	if (Number(j[0]) + Number(j[1]) == 5) {
		console.log(j);
}
}
</script>

<script> //2.1.3
//Дан массив. Удалите из него элементы с заданным значением.
let arr2 = [1, 2, 3, 4, 5, 3, 6];
let newArr = arr2.filter(function(elem) {
	return elem !== 3;
});
console.log(newArr);
</script>

<script> //2.1.4
//Найдите сумму первой половины элементов этого массива.
let arr3 = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i=0; i <=arr3.length/2; i++){
	sum += i;
}
console.log(sum);
</script>

<script> //2.2.1
//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
let arr = [1, -2, 3, -4, 5, -6];
let i = 0;
for (let elem of arr){
if (elem < 0){
	i++;
}
}
console.log(i);
</script>

<script> //2.2.2
//Дан массив с числами. Оставьте в нем только положительные числа.
let arr = [1, -2, 3, -4, 5, -6];
let newArr = arr.filter(function(elem) {
	if (elem > 0){
	return elem;
}
});
console.log(newArr);
</script>

<script> //2.2.3
//Дана строка. Удалите предпоследний символ из этой строки.
let str = 'строка';
let newStr = str.replace(str[str.length-2], "");
console.log(newStr);
</script>

<script> //2.2.5
//Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
let arr = [1, 2, 3, 4, 5, 6];
let sum1 = 0;
let sum2 = 0;
for (let i=0; i <=arr.length/2; i++){
	sum1 += i;
}
for (let elem of arr){
	sum2 += elem;
}
console.log(sum1/(sum2-sum1));
</script>

<script> //2.3.1
//Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
let str1 = 'Дэвид';
let str2 = 'дэмин';
if (str1[str1.length-1] == str2[0]){
	console.log(true);
} else {
	console.log(false);
}
</script>

//ЗАДАЧА60
<script> //2.3.2
//Дана некоторая строка. Найдите позицию третьего нуля в строке.
let str3 = '101010';
let indexes = [];
for(var i=0; i < str3.length; i++) {
  if (str3[i] == "0") {
	indexes.push(i);
	console.log(indexes[2]);
}
}
</script>

<script> //2.3.3
//Даны числа, разделенные запятыми: Найдите сумму этих чисел.
let str4 = '12,34,56';
let numbers = str4.split(',');
let sum = 0;
for (let elem of numbers){
sum += +elem;
}
console.log(sum);
</script>

//ЗАДАЧА61
<script> //2.3.4
//Преобразуйте эту дату в следующий объект: {year: '2025', month: '12', day: '31'}
let str5 = '2025-12-31';
let nums = str5.split('-');
let keys = ['year', 'month', 'day'];
let obj = {};
for (let i = 0; i < keys.length; i++) {
		obj[keys[i]] = nums[i];
}
console.log(obj);
</script>

<script> //2.4.1
//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
let str = 'abcd123';
let numbe1index = str.search(/\d/);
console.log(numbe1index);
</script>

<script> //2.4.2
//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let keys = [];
let values = [];
for (let elem in obj){
	keys.push(elem);
	values.push(obj[elem]);
}
console.log(keys, values);
</script>

<script> //2.4.3
//Дано число. Выведите в консоль количество четных цифр в этом числе.
let num = 12345678;
let str2 = String(num);
let i = 0;
for (let elem2 of str2){
	if (elem2 % 2 == 0){
		i++;
	}
	console.log(i);
}
</script>

<script> //2.4.4
//Переведите в верхний регистр все нечетные буквы этой строки.
let string = 'abcde';
let split = string.split('');
for (let i = 0; i < split.length; i++) {
	if (i % 2 == 0) {
  split[i] = split[i].slice(0, 1).toUpperCase();
}
let result = split.join('');
console.log(result);
}
</script>

<script> //2.4.5
//Сделайте заглавным первый символ каждого слова в этой строке.
let string = 'aaa bbb ccc';
let split = string.split(' ');
for (let i = 0; i < split.length; i++) {
  split[i] = split[i].slice(0, 1).toUpperCase() + split[i].slice(1);
}
let result = split.join(' ');
console.log(result);
</script>

<script> //2.5.1
//Получите массив позиций всех нулей в этой в строке.
let str = '023m0df0dfg0';
let indexes0 = [];
for(var i=0; i < str.length; i++) {
  if (str[i] == "0") {
	indexes0.push(i);
}
}
console.log(indexes0);
</script>

//ЗАДАЧА62
<script> //2.5.2
//Удалите из этой строки каждый третий символ.
let str = 'ab!cd!ef!g';
let arr = str.split('');

for (i = 0; i < arr.length; i++){
	if ((i+1) % 3==0) { // i=2,5,8
		delete arr[i];
  }
}
let arr2 = arr.filter(function(elem) {
	return elem !== 'empty';
});

let str2 = arr2.join('');
console.log(str2);
</script>

<script> //2.5.3
//Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
let arr = [1, 2, 3, 4, 5, 6];
let sumEven = 0;
let sumOdd = 0;
let res;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0){
		sumEven+= +arr[i];
	}
	if (arr[i] % 2 != 0 ) {
		sumOdd+= +arr[i];
	}
}
res = sumEven/sumOdd;
console.log(res);
</script>

//ЗАДАЧА63
<script> //2.6.1
//Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
let str = '1a1b1c1';
let arr = str.split('');
let indexes = [];
for (let i=0; i<arr.length; i++){
	if (isFinite(arr[i])){
		indexes.push(i);
	}
}
console.log(indexes);
</script>

//ЗАДАЧА64
<script> //2.6.2
//Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]
let arr2 = [123, 456, 789];
let arr3 = arr2.toString().split(',');
let result = arr3.map(function(arr4) {
	return arr4.split('').reverse().join('');
});
console.log(result);
</script>

//ЗАДАЧА65
<script> //2.6.3
//Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'
let str = '1234567';
let split = str.split('').reverse();

let arr  = [];
let chunks = Math.ceil(split.length / 3);
	for (let i = 0; i < chunks; i++) {
		let elems = split.splice(0, 3).reverse().join('');
		arr.push(elems);
}
arr.reverse();
console.log(arr);
</script>

<script> //2.6.4
//Смените регистр букв этой строки на противоположный. 'aBcDe'
let string = 'AbCdE';
let split = string.split('');
for (let i = 0; i < split.length; i++) {
	if (i % 2 !== 0) {
  split[i] = split[i].slice(0, 1).toUpperCase();
}
if (i % 2 == 0) {
split[i] = split[i].slice(0, 1).toLowerCase();
}
}
let result = split.join('');
console.log(result);
</script>

//ЗАДАЧА66
<script> //2.6.5
//Слейте пары элементов массива с числами вместе: [12, 34, 56]
let arr = [1, 2, 3, 4, 5, 6];
let arr2  = [];
let chunks = arr.length / 2;
	for (let i = 0; i < chunks; i++) {
		let elems = arr.splice(0, 2).join('');
		arr2.push(elems);
		}
		console.log(arr2);
</script>

<script> //2.6.6
//Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'
let string = 'aaa bbb ccc eee fff';
let split = string.split(' ');
for (let i = 0; i < split.length; i++) {
	if (i % 2 !== 0) {
  split[i] = split[i].slice(0, 1).toUpperCase() + split[i].slice(1);
}
}
let result = split.join(' ');
console.log(result);
</script>

<script> //2.7.1
//Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'
let str = 'a bc def ghij';
let split = str.split(' ');
for (let i = 0; i < split.length; i++) { 
	if (split[i].length <= 3) {
		split[i] = split[i].toUpperCase();
	}
}
console.log(split);
</script>

<script> //2.7.2
//Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
let str = 'abCD';
function defineCase(simbol) {
	if (simbol >= 'a' && simbol <= 'z') {
		return 'lowercase';
	} else if (simbol >= 'A' && simbol <= 'Z') {
		return 'uppercase';
	} else {
	return 'not english alphabet';
	}
}
console.log(defineCase(str[3]));
</script>

<script> //2.7.3
//Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:28
let num = 123789;
let split = String(num).split('');

let arr = split.filter(function(elem) {
	return elem % 2 == 0; //оставляет все четные
});
let str2 = arr.join('');
console.log(str2);
</script>

<script> //2.8.1
//Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
let string = 'Строка С Буквами';
let count = [];
	for (let i = 0; i < string.length; i++) { 
		if (string[i] >= 'А' && string[i] <= 'Я') {
			count.push(string[i]);
	  }
	}
	if (count.length > 2){
		console.log('FALSE - more than 2 uppercase');
	}
</script>

<script> //2.8.2
//Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:'1 22 333 22 1'
let str = '1 22 333 4444 22 5555 1';
let split = str.split(' ');
let arr = split.filter(function (elem) {
	return elem.length <= 3;
	});
let str2 = arr.join(' ');
console.log(str2);

</script>

<script> //2.8.3
//Слейте эти массивы в новый массив следующим образом:[1, 2, 'a', 'b', 'c', 3]
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let arr3 = [1, 2, ...arr2, 3];
console.log(arr3);
</script>

<script> //2.9.1
//Найдите сумму пар цифр этого числа: 12 + 34 + 56
let num = 123456;
let arr  = String(num).split('');

let arr2 = [];
let chunks = arr.length / 2;
	for (let i = 0; i < chunks; i++) {
		let elems = arr.splice(0, 2).join('');
		arr2.push(elems);
		}

let sum = 0;
for (let i = 0; i < arr2.length; i++) {
	sum += Number(arr2[i]);
}
console.log(sum);
</script>

<script> //2.9.2
//Выведите в консоль элементы этого массива в обратном порядке.
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());
</script>

<script> //2.10.1
//Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
let str = '1a2b3c4d';
let arr = str.split('');
let letters = [];
for (let i=0; i<arr.length; i++){
	if (isFinite(arr[i]) == false){
		letters.push(arr[i]);
	}
}
let condition = letters.length <= 3 ? true : false;
console.log(condition);
</script>

<script> //2.10.2
//Дано число. Получите первую четную цифру с конца этого числа.
let num = 123456;
let str2 = String(num).split('').reverse();
for (let i=0; i <str2.length; i++){
		if (str2[i] % 2 == 0){
		console.log(str2[i]);
		break;
}
}
</script>

<script> //2.10.3
//Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'
let str = 'abcde abcde abcde';
let arr = str.split(' ');
for (let i = 0; i < arr.length; i++) { 
arr[i] = arr[i].slice(0, 0) + '!' + arr[i].slice(1); 
}
let str2 = arr.join(' ');
console.log(str2);
</script>

<script> //2.10.4
//Проверьте, что в этом массиве есть два одинаковых элемента подряд.
function ifDifferent(arr) {
		for (let i = 0; i < arr.length; i++) { 
		if (arr[i] == arr[i+1]) {
			return false;
		}
	}
	return true;
}
console.log(ifDifferent([1,2,3,3,4,5]));
</script>
