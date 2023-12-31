

<script> ////4.1.1
////Сделайте функцию, которая вернет текущий день недели словом.
function getWeekDay() {
	let date = new Date();
	let weekDay  = date.getDay();
	let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	return days[weekDay];
	}
console.log(getWeekDay());
</script>

<script> ////4.1.2
////Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.
function getWeekDay(str) {
	let [year, month, day] = str.split('.').reverse();
	month = month-1;
	let date = new Date(year, month, day);
	let weekDay  = date.getDay();
	let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	return days[weekDay];
	}
console.log(getWeekDay('19.08.2023'));
</script>

<script> ////4.1.3
////Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function getDays(str) {
	let days = str/60/60/24;
	return days;
	}
console.log(getDays('172800'));
</script>

<script> ////4.1.4
////Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.
function cutStr(num, str) {

	let cutted = str.slice(0, num);
	return cutted;
	}
console.log(cutStr(5, '123456789'));
</script>

<script> ////4.1.5
////Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.
function defineSign(date) {
	let birthday = date.split('.').reverse().join('-').slice(5);
	console.log(birthday);
	  if (birthday >= '03-21' && birthday <= '04-19') {
		  console.log('Овен');
	  } else if (birthday >= '04-20' && birthday <= '05-20') {
		  console.log('Телец');
	  } else if (birthday >= '05-21' && birthday <= '06-20') {
		  console.log('Близнецы');
	  } else if (birthday >= '06-21' && birthday <= '07-22') {
		  console.log('Рак');
	  } else if (birthday >= '07-23' && birthday <= '08-22') {
		  console.log('Лев');
	  } else if (birthday >= '08-23' && birthday <= '09-22') {
		  console.log('Дева');
	  } else if (birthday >= '09-23' && birthday <= '10-22') {
		  console.log('Весы');
	  } else if (birthday >= '10-23' && birthday <= '11-21') {
		  console.log('Скорпион');
	  } else if (birthday >= '11-22' && birthday <= '12-21') {
		  console.log('Стрелец');
	  } else if (birthday >= '02-19' && birthday <= '03-20') {
		  console.log('Рыбы');
	  } else if (birthday >= '01-20' && birthday <= '02-18') {
		  console.log('Водолей');
	  } else {
		  console.log('Козерог');
	  }
	}
defineSign('19.08.1985')
</script>

<script> ////4.1.6
////Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.
function getDivisorsSum(num) {
	let arr = [];

	for (let i=1; i<=num; i++){
		if (num % i == 0) {
			arr.push(i);
		}
	}

	let sum = arr.reduce((a,b)=> a+b );
	return sum;
	}
console.log(getDivisorsSum(10));
</script>


<script> ////4.2.1
////Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
function getDidgitsSum(num) {
	let sum = num.toString().split('').reduce((a,b)=> Number(a)+Number(b));

	return sum;
	}
console.log(getDidgitsSum(12345));
</script>

<script> ////4.2.2
////Сделайте функцию, которая параметром будет принимать число и удалять из него нули.
function removeNull(num) {
	let filt = String(num).split('').filter((el) => el !== '0').join('');

	return filt;
}
console.log(removeNull(1030507));
</script>

<script> ////4.2.3
////Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.
function getDays(somedate) {
	let [year, month, day] = somedate.split('.').reverse();
	let date = new Date(year, month-1, day);
	let dateNow  = new Date();
	let days = Math.floor((dateNow-date)/1000/60/60/24);

	return days;
}
console.log(getDays('31.08.2023'));
</script>

</script>

<script> ////4.2.4
////Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
function isLeap(year) {
	let date = new Date(year, 2, 0);
	if (date.getDate() == 29) {
		console.log('високосный');
	} else {
		console.log('не високосный');
	}
}
isLeap(2020);
</script>

<script> ////4.2.5
////Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.
function getArrLeap() {
	let arrLeap = [];
	for (let i = 1900; i <= 2000; i++){
		let date = new Date(i, 2, 0);
	if (date.getDate() == 29){
		arrLeap.push(i);
	}
	}
	return arrLeap;
}
console.log(getArrLeap());
</script>

<script> ////4.2.6
////Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.
function getRestDays(somedate) {
	let [year, month] = somedate.split('.').reverse();
	let monthEnd = new Date(year, month, 0, 23,59,59);
	let dateNow  = new Date();
	let days = Math.floor((monthEnd-dateNow)/1000/60/60/24);

	return days;
}
console.log(getRestDays('31.08.2023'));
</script>

<script> ////4.2.7
/*Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
{
	next: 'пн',
	curr: 'вс',
	prev: 'сб',
}*/
function getWeekDay() {
	let date = new Date();
	let weekDay  = date.getDay();
	let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	let obj = {	prev: days[weekDay-1],
				curr: days[weekDay],
				next: days[weekDay+1]
			}
	return obj;
	}
console.log(getWeekDay());
</script>


<script> ////4.3.1
////Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.
function getUniqueValue(arr){
return [...new Set(arr)];
}
console.log(getUniqueValue([1,1,2,2,3,3]));
</script>

<script> ////4.3.2
//// !!!! Сделайте функцию, которая параметром будет принимать массив и удалять из него все повторяющиеся дубли, которые встречаются больше трех раз.
function removeDoubles(arr){
	arr.sort();
	for (let i=0; i < arr.length; i++){
		if (arr[i] == arr[i+3]) {
			delete arr[i+3];
		}
	}
	let filt = arr.filter(function(elem) {
		return elem != 'empty';
	});
	return filt;
}
console.log(removeDoubles(['c','c','a','b','c','c','d','d','d','d']));
</script>

<script> ////4.3.3
////!!!! Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.
function removeDoubles(arr){
	let split = String(arr).split(',');
	for (let i=0; i < split.length; i++){
		if (split[i] == split[i+1]) {
			delete split[i], delete split[i+1];
		}
	}
	let filt = split.filter(function(elem) {
		return elem != 'empty';
	});
	let res = filt.map(Number)
	return res;
}
console.log(removeDoubles([1,3,1,2,2,3,3]));
</script>

<script> ////4.3.4
/*Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
{
	max: 9,
	min: 1,
}*/
function getMinMax(obj) {
	obj = {	max: Math.max.apply(null, arr),
			min: Math.min.apply(null, arr)
            }
	return obj;
	}
console.log(getMinMax([1,2,3,4,5]));
</script>


<script> ////4.4.1
////Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.
function getDivisorsNumber(num){
let arr = [];
for (let i = 1; i <= num; i++) {
if (num % i == 0){
	arr.push(i);
	}
}
return arr.length;
}
console.log(getDivisorsNumber(50));
</script>

<script> ////4.4.2
////Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
//// = 4.1.5
</script>

<script> ////4.4.3
////Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
function getDivisors(num){
let arr = [];
for (let i = 1; i <= num; i++) {
if (num % i == 0){
	arr.push(i);
	}
}
return arr;
}
console.log(getDivisors(50));
</script>

<script> ////4.4.4
////Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function isPrime(num) {
	for (let i = 2; i <= num; i++) {
		if (num % i == 0) {
			return false;
			break;
		}else{
			return true;
		}
	}
}
console.log(isPrime(11));
</script>

<script> ////4.4.5
////Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
function deleteEven(num) {
	let spl = num.toString().split('');
	let res = spl.filter((el)=> el % 2 != 0).join('');
	return res;
}
console.log(deleteEven(123456));
</script>

<script> ////4.4.6
////Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
function getRandomArr(min, max) {
	let arr = [];
	for (let i = 1; i <= 5; i++) {
	arr.push(Math.floor(Math.random()*(max - min + 1)+min));
}
	return arr;
}
console.log(getRandomArr(10, 100));
</script>


<script> ////4.5.1
////Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.
let val = '12345 dd';
let isNum = /^\d+$/.test(val);
console.log(isNum);
</script>

<script> ////4.5.2
////Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.
let str = '100/20';
let isFraction = /^\d+\/\d+$/.test(str);
console.log(isFraction);

</script>

<script> ////4.5.3
////Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.
function getSecondMax(arr) {
	arr.sort();
	return arr[1];
}
console.log(getSecondMax([2,4,6,5,1,3]));
</script>

<script> ////4.5.4
////Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.
function getArrNumbers(min,max) {
	let arr = [];
	for (let i=min; i <= max; i++){
		arr.push(i)
	}
return arr;
}
console.log(getArrNumbers(3,15));
</script>

<script> ////4.5.5
////Сделайте функцию, которая заполнит массив случайными латинскими буквами.
////ЗАДАЧА76
function getRandomString(length) {
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = [];
	let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
console.log(getRandomString(7));
</script>

<script> ////4.5.6
////Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.
function fib(n){
	let a= 1;
	let b= 1;
	for (let i=3; i<=n; i++){
		let c=a+b;
		a=b;
		b=c;
	}
	return b;
}
console.log(fib(6));////8
</script>


<script> ////4.6.1
////Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.
function isValidDate(d) {
	let [year, month, day] = d.split('-');
	let monthActual = Number(month)-1;

	let date = new Date(year, monthActual, day);
	if (date.getFullYear() == year && date.getMonth() == monthActual && date.getDate() == day) {
		console.log('Дата корректна');
	} else {
		console.log('Дата некорректна');
	}
}
isValidDate('2024-06-31');////пересчитывает в корректную дату
</script>

<script> ////4.6.2
////Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.
//// = 4.5.5
</script>

<script> ////4.6.3
////Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.
function getАcronym(str) {
	let split = str.split(' ');
	for (let i = 0; i < split.length; i++) {
	  split[i] = split[i].slice(0, 1).toUpperCase();
	}
	let result = split.join('');

	return result;
 };
console.log(getАcronym('Союз советских социалистических республик'));
</script>

<script> ////4.6.4
////Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.
function getDivisors(arr) {
	let divs = [];
	for (let num of arr){
		let div = [];
			for (let i = 1; i <= num; i++) {
				if (num % i == 0){
				div.push(i);
				}
			}
		divs.push(div);
	}
	return divs;
}
console.log(getDivisors([10, 25, 50]));
</script>

<script> ////4.6.5
/*Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:
{
	d: 12,
	h: 10,
	m: 59,
	s: 59,
}
*/
function getDaysHoursMinsSecs(secs) {
	let days = Math.floor(secs/60/60/24);
	let hours = Math.floor(secs/60/60) - days*24;
	let minutes = Math.floor(secs/60) - days*24*60-hours*60;
	let seconds = secs % 60;

	let obj = {	d: days,
				h: hours,
				m: minutes,
				s: seconds,
			}
	return obj;
}
console.log(getDaysHoursMinsSecs(90150));////1 1 2 30
</script>


<script> //4.7.1
//Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.
function sortWords(str) {
  let sort = str.toLowerCase().split(' ').sort().join(' ');
  return sort;
}
console.log(sortWords('Сделайте Функцию, которая параметром будет принимать текст со словами, а возвращать слова отсортированые в алфавитном порядке'));
</script>

<script> //4.7.2
//Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
function getCommonElems(arr, arr2) {
	let merge = [...arr, ...arr2].sort();
	let common = [];

	for (let i=0; i <merge.length; i++){
		if (merge[i] == merge[i+1]){
			common.push(merge[i]);
		}
	}
	return [...new Set(common)]
}
console.log(getCommonElems( [1, 2, 3, 4, 5], [0, 2, 2, 3, 3]));
</script>

<script> //4.7.3
// !!!!!!!! Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
function getRandomNumberNoRepeats(min, max) {
	let lastNumber;
	const getRandomNumber = () => Math.floor(Math.random()*(max - min+1)+min);
	const result = () => {
		let number = getRandomNumber();
		if (number === lastNumber) {
			return result();
		}
		lastNumber = number;
		return number;
	};
return result;
};

const getRandomNumber = getRandomNumberNoRepeats(1, 5);
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
</script>

<script> //4.7.4 ????
/*Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:
let arr = [1, 2, 3, 4, 5];

func(arr, 1); // 2
func(arr, 4); // 5
func(arr, 5); // 1
*/
function getNextElement(arr, elem) {
	for (let i=0; i <arr.length; i++){
		if (elem == arr[i]){
			return arr[i+1];
		}
		if (i == arr.length){
			return arr[0];
		}
	}
}
console.log(getNextElement([1, 2, 3, 4, 5], 5));
</script>

<script> //4.8.1
//Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
function getRandomNumOfArr(arr){
	for (let elem of arr){
		let min = arr[0];
		let max = arr[arr.length-1];
	let result = Math.floor(Math.random()* (max-min+1)) + min;
	return result;
	}
}
console.log(getRandomNumOfArr([1,2,3,4,5,6,7]));
</script>

<script> //4.8.2
//Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
function getRandomNumsFromArr(arr){
	let numsArr = [];
	let min = arr[0];
	let max = arr[arr.length-1];

	for (let i=0; i < 3; i++) {
		numsArr.push(Math.floor(Math.random()*(max-min+1))+min);
	}
	return numsArr;
}
console.log(getRandomNumsFromArr([1,2,3,4,5,6,7]));
</script>

<script> //4.8.3
//Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.
function getRandomNumOfArrNoRepeats(arr){
	let min = arr[0];
	let max = arr[arr.length-1];
	let lastNumber;
	const getRandomNumber = () => Math.floor(Math.random()*(max - min+1)+min);
	const result = () => {
		let number = getRandomNumber();
		if (number === lastNumber) {
			return result();
		}
		lastNumber = number;
		return number;
	};
return result;
};

const getRandomNumber = getRandomNumOfArrNoRepeats([1,2,3,4,5,6,7]);
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());
</script>

<script> //4.8.4 ЗАДАЧА77
// !!!! Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
function isPrime(num) {
	let prime = [];
	for (let i = 11; i <= num; i++) { // числа
		for (let j = 2; j <= i; j++) { // делители кроме 1 и числа
			if (i % j == 0 && j < i) {
				break;
				} else if (j == i) {
					prime.push(i);
			}
		}
	}
	return prime;
}
console.log(isPrime(20));
</script>

<script> //4.8.5
//Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвщать их сумму.
function sumNums(num) {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}
console.log(sumNums(20));
</script>

<script> //4.8.6 ????
//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

</script>

<script> //4.8.7
//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
function getRandomNumberNoRepeats(min, max, length) {
	let arr = [];

	for (let i = 0; i <= length; i++){
		let randomNumber = Math.floor(Math.random()*(max - min+1)+min);
			arr.push(randomNumber);
		let filter = Array.from(new Set(arr));


		if (filter.length < length){
			arr.push(randomNumber); //ЭТО НЕ РАБОТАЕТ
		}else{
			return filter;
		}
	}
}
console.log(getRandomNumberNoRepeats(1, 10, 5));
</script>


<script> //4.9.1
	//Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.
	function getDaysTo29Feb(){
		let arrLeap = [];
		for (let i = 2024; i <= 2030; i++){
			let date = new Date(i, 2, 0);
			if (date.getDate() == 29){
				arrLeap.push(i);
				break;
			}
		}
		let next29Feb = new Date(arrLeap[0], 2, 0);
		let now = new Date();
		let days = Math.floor((next29Feb-now)/1000/60/60/24);
		return days;
	}
	console.log(getDaysTo29Feb());
</script>


<script> //4.9.2
//Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.
function getDaysToShrovetide(){

}
console.log(getDaysToShrovetide());
</script>


<script> //4.9.3
//Сделайте функцию, которая будет возвращать случайный цвет.
let colors = ['Beige', 'Black', 'Blue', 'Brown', 'Fuchsia', 'Golden', 'Green', 'Grey', 'Khaki', 'Lilac', 'Lime', 'Magenta', 'Mahogany', 'Nacreous', 'Orange', 'Pink', 'Purple', 'Red', 'Rosy', 'Salmon', 'Silver', 'Teal', 'Turquoise', 'White', 'Yellow'];

function randomColor(arr) {
	let random = Math.floor(Math.random() * arr.length);
	return arr[random];
}
console.log(randomColor(colors));
</script>


<script> //4.9.4
//Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.
function getCommonDivisors(arr) {
	let divisors = [];
	let commonDivisors = [];

	for (let num of arr) {
		for (let i = 1;  i < num; i++) {
			if (num % i == 0) {
				divisors.push(i);
			}
		}
	}
	divisors.sort();
	for (let i = 0;  i < divisors.length; i++) {
		if (divisors[i] == divisors[i+2]) {
			commonDivisors.push(divisors[i]);
		}
	}
	return commonDivisors;
}
console.log(getCommonDivisors([12, 15, 21]));
</script>


<script> //4.9.5
//Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
function getMaxNumbers(arr) {
	let maxNumbers = [];
	for (let i = 0; i < arr.length; i++){
		for (let j = 0; j < arr[i].length; j++){
		}
		maxNumbers.push(Math.max.apply(null, arr[i]));
	}
	return maxNumbers;
}
console.log(getMaxNumbers([[2, 7, 4], [5, 8, 7]]));
</script>
