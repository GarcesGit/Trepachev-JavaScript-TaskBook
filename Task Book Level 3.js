


<script> //3.1.1
//Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
let num = 1234567;
let str = String(num);
for (let i=0; i < str.length; i++) {
	if (Number(str[i]) == i+1){
		console.log(true);
	}else {
		console.log(false);
	}
}
</script>

<script> //3.1.2
//Удалите из массива все пустые строки.
let arr = [1, '', 2, 3, '', 5];
let arr3 = arr.filter(function(elem) {
	return elem !== '';
});
console.log(arr3);
</script>

//ЗАДАЧА67
<script> //3.1.3
//Отсортируйте элементы в каждом подмассиве.
let arr4 = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
];

let arr5 = arr4.map(function(arr){
	return arr.sort();
});
console.log(arr5);
</script>

<script> //3.1.4
//Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
let arr6 = arr2.splice(0,3);
console.log(arr6);
</script>



<script> //3.2.1
//Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
for (let i = 1; i<= 1000; i++) {
	let j = String(i);
	if (Number(j[j.length-2] % 2 == 0)) {
		console.log(j);
}
}
</script>

<script> //3.2.2
//Дан массив. Удалите из него каждый пятый элемент.
let arr = [1,1,1,1,5,1,1,1,1,5];

let arr2 = arr.filter(function(elem, i) {
	return (i+1) % 5 !==0;
});
console.log(arr2);
//ИЛИ
for (let i = 4; i < arr.length; i+= 4) {
    arr.splice(i, 1);
}
console.log(arr);
</script>

<script> //3.2.3
//Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:'00000'
let num = 5;
let str = '';
for (let i = 0; i < num; i++) {
	str += '0';
}
console.log(str);
</script>

<script> //3.2.4
//Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:'aaa ccc fff'
let str2 = 'aaa bbb ccc eee fff'
let arr = str2.split(' ');

let arr2 = arr.filter(function(elem, i) {
	return i % 2 == 0;
});
let str3 = arr2.join(' ');
console.log(str3);
//ИЛИ
let str3 = str2.split(' ');
for (let i = 1; i < str3.length; i+= 1) {
    str3.splice(i, 1);
}
let str4 = str3.join(' ');
console.log(str4);
</script>

<script> //3.2.5
//Найдите сумму элементов этого массива.
let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

let sum = 0;
for (let subArr of arr) {
	for (let elem of subArr) {
    sum += elem;
	}
}
console.log(sum);
//ИЛИ
let merge = [].concat(...arr);
let res = merge.reduce(function(a, b) {
  return a + b;
});
console.log(res);
</script>

<script> //3.3.1
//Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
let arr = ['Дан', 'массив', 'со', 'словами'];
		arr3 = arr.filter(function (el){
			return el.length <= 3;
		});
		console.log(arr3);
</script>

<script> //3.3.2
//Проверьте, что все цифры этого числа являются нечетными.
let num = 1357;
let spl = String(num).split('');
for (let i = 0; i <spl.length; i++) {
	console.log(spl[i] % 2 !== 0 ? true : false);
}
</script>

<script> //3.3.3
//Проверьте, что это слово читается одинаково с любой стороны.
let str2 = 'abcba';
let str3 = str2.split('').reverse().join('');
console.log(str2 == str3 ? true : false);
</script>

<script> //3.3.4
//Найдите сумму элементов этого массива.
let arr2 =
[
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
];

let sum = 0;
  for (let subArr of arr2) {
	   for (let subsubArr of subArr) {
       for (let elem of subsubArr) {
       sum += elem;
	}
}
}
	console.log(sum);
</script>

<script> //3.4.1
//Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.
for (let i=10; i<=1000; i++){
	i = String(i);
	if (i[0] %2 == 0){
		console.log(i);
	}
}
</script>

<script> //3.4.1
//Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5]
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [];
while (arr.length >0){
arr2.push(arr.splice(0, 2).reverse());
}
let merge = [].concat(...arr2);
console.log(merge);
</script>

<script> //3.4.1
//Найдите сумму элементов этого объекта.
let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let sum = 0;
for (let key in obj){
let subObj = obj[key];
for (let subKey in subObj){
	sum += subObj[subKey];
}
}
console.log(sum);
</script>

<script> //3.5.1
//Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
let str = 'Авгиевы конюшни. Очень грязное помещение; а также сильная запущенность в делах, требующих больших усилий для наведения порядка. Обширные конюшни Авгия, мифического древнегреческого царя Элиды, никто не убирал 30 лет, поэтому в них скопилось немыслимое количество навоза.'
let arr = [];
let split = str.split(' ');
for (let elem of split){
	if (elem[0] == 'а' || elem[0] == 'А'){
		arr.push(elem);
	}
}
console.log(arr);
</script>

<script> //3.5.2
//Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
let arr = [1,2,3,5,10];
let newArr = arr.filter(function(elem) {
	return elem % 5 == 0;
});
console.log(newArr);
</script>

<script> //3.5.3
//Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль. !!!!
let arr = [11, 21, 110, 210];
let arr3 = [];

for (let i = 0; i = arr.length; i++){
		let arr2 = arr.splice(0, 1);

		let split = String(arr2).split('');

  	for (let j = 0; j <= split.length; j++) {
	    if (split[j] === '0') {
				let number = split.join('');

				arr3.push(Number(number));
			}
		}
}
console.log(arr3);
</script>

<script> //3.5.4
//Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
let arr = [11, 21, 110, 210, 3];
	let split = String(arr).split('');

	for (let i = 0; i <= split.length; i++) {
		if (split[i] == '3') {
			console.log('есть')
			} else {
			console.log('неа')
		}
	}
</script>

<script> //3.5.5
//Отсортируйте цифры этого числа. В нашем случае должно получится следующее:12345
let num = 35142;
let split = String(num).split('');
let num2 = split.sort().join('');
console.log(num2);
</script>

<script> //3.5.6
//Напишите программу, которая сформирует следующую строку:'-1-2-3-4-5-'
let str2 = '';
for (let i = 1; i <= 5; i++) {
	str2 += '-' + i;
}
str2 += '-';

console.log(str2);
</script>

<script> //3.5.7
//Найдите сумму элементов этого объекта.
let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}

let sum = 0;
for (let key in obj){
	 let obj2 = obj[key];

	 for (let key2 in obj2){
		 let obj3 = obj2[key2];

		 for (let key3 in obj3){
			 sum += obj3[key3];
		 }
	 }
}
console.log(sum);
</script>

<script> //3.6.1
//Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
let arr = [123, 1234, 12345];
let split = String(arr).split(',');
let newArr = split.filter(elem => elem.length < 4);
console.log(newArr);
</script>

<script> //3.6.2
//Проверьте, что все цифры этого числа больше нуля.
let num = 123450;
let spl = String(num).split('');
for (let i = 0; i <= spl.length; i++) {
console.log(spl[i] > 0 ? true : false);
}
</script>

<script> //3.6.3
//Слейте все элементы этого массива в один массив, разбив их посимвольно:[1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr = [123, 456, 789];
let split = String(arr).split('');
console.log(split.filter(elem => elem >= 0));
</script>

<script> //3.6.4
//Найдите сумму элементов этой структуры.
let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
let sum = 0;
for (let subObj of data){
for (let key in subObj){
	sum += subObj[key];
}
}
console.log(sum);
</script>


<script> //3.7.1
//Дана строка со словами. Отсортируйте слова в алфавитном порядке.
let str = 'Дана строка со словами. Отсортируйте слова в алфавитном порядке.';
let sort = str.toLowerCase().split(' ').sort();
console.log(sort);
</script>

<script> //3.7.2
//Дано число. Получите массив делителей этого числа.
let num = 50;
let div = [];
for (let i = 1; i <= num; i++) {
if (num % i == 0){
	div.push(i);
	}
}
console.log(div);
</script>

<script> //3.7.3
//Даны два числа. Получите массив общих делителей этих чисел.
let num1 = 50;
let div1 = [];
for (let i = 1; i <= num1; i++) {
if (num1 % i == 0){
	div1.push(i);
	}
}

let num2 = 25;
let div2 = [];
for (let j = 1; j <= num2; j++) {
if (num2 % j == 0){
	div2.push(j);
	}
}

let commonDiv = [];
	for (let elem1 of div1){
		for (let elem2 of div2){
			if (elem1 == elem2){
				commonDiv.push(elem2);
			}
		}
	}
console.log(commonDiv);
</script>

<script> //3.7.4
//Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
let num = 4;
let div = [];

for (let i = 2; i < num; i++) {
	if (num % i == 0){
		div.push(i);
		}
	}

if (div.length == 1){
	console.log(true);
	} else {
		console.log(false);
	}
console.log(div);
</script>

<script> //3.7.5
//Через запятую написаны числа. Получите максимальное из этих чисел.
let nums = '12, 123, 1234';
let arr = nums.split(',');
console.log(Math.max.apply(null, arr));
</script>

<script> //3.7.6
//ЗАДАЧА68 !!!!
//Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
let arr = [121, 1, 121, 1];

let split = String(arr).split(',');

let double = split.map(function(elem) {
  if (elem.length == 1){
  	return elem + elem;
    } else {
    	return elem;
  }
});
let result = double.map(Number);
console.log(result);
</script>


<script> //3.7.7
//Дана строка. Удалите из нее все гласные буквы.
let str = 'Remove all vowel letters from it';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let split = str.split('');
let novowels = split.filter(function(elem) {
	return !vowels.includes(elem);
});
let res = novowels.join('');
console.log(res);
</script>

<script> //3.7.8
//ЗАДАЧА69 !!!!
//Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
let str = 'Сделайте заглавной последнюю букву каждого слова';
let split = str.split(' ');
let up = 	split.map((elem) => {
	return elem.slice(0, -1) + elem.slice(-1).toUpperCase();
});
let result = up.join(' ');
console.log(result);
</script>

<script> //3.7.9
//ЗАДАЧА70 !!!!
//Найдите сумму элементов этой структуры.
let data = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];
	let sum = 0;
	for (let objs of data){
		for (let keys in objs){
			for (let nums of objs[keys]){
				sum += nums;
			}
		}
	}
	console.log(sum);
</script>
