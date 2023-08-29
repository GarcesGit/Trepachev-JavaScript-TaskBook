

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
