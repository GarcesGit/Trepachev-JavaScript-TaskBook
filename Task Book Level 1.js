

//Задачник JavaScript по уровням

// Task Book Level 1



<script> //1.1.1
//Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

let num = 0;a
if (num < 0) {
  console.log('negative');
} else if (num > 0) {
  console.log('positive');
} else {
console.log('equal to zero');
}
</script>

<script> //1.1.2
//Дана строка. Выведите в консоль длину этой строки.

let str = 'abcde';
console.log(str.length);
</script>

<script> //1.1.3
//Дана строка. Выведите в консоль последний символ строки.

let str2 = 'abcde';
console.log(str2[str2.length-1]);
</script>

<script> //1.1.4
//Дано число. Проверьте, четное оно или нет.

let num2 = 3;
if (num2 % 2 != 0) {
  console.log('odd');
} else {
  console.log('even');
}
</script>

<script> //1.1.5
//Даны два слова. Проверьте, что первые буквы этих слов совпадают.

let word1 = 'чета';
let word2 = 'там';
if (word1[0] == word2[0]) {
  console.log(true);
} else {
  console.log(false);
}
</script>

<script> //1.1.6
//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

let word3 = 'пить';
if (word3[word3.length-1] != 'ь') {
  console.log(word3[word3.length-1]);
} else {
  console.log(word3[word3.length-1-1]);
}
</script>

<script> //1.2.1
//Дано число. Выведите в консоль первую цифру этого числа.
let num = 12345;
console.log(String(num)[0]);
</script>

<script> //1.2.2
//Дано число. Выведите в консоль последнюю цифру этого числа.
let num2 = 12345;
let str = String(num2);
console.log(str[str.length-1]);
</script>

<script> //1.2.3
//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
let num3 = 12345;
let str3 = String(num3);
console.log((+str3[0])+(+str3[str3.length-1]));
</script>

<script> //1.2.4
//Дано число. Выведите количество цифр в этом числе.
let num4 = 12345;
let str4 = String(num4);
console.log(str4.length);
</script>

<script> //1.2.5
//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
let num5 = 12345;
let str5 = String(num5);
let num6 = 22345;
let str6 = String(num6);
if (str5[0] == str6[0]) {
  console.log(true);
} else {
  console.log(false);
}
</script>

<script> //1.3.1
//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
let str = 'abcde';
console.log(str[str.length-2]);
</script>

<script> //1.3.2
//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
let num1 = 5;
let num2 = 3;

if (num1 % num2 == 0) {
  console.log(true);
} else {
  console.log(false);
}
</script>

<script> //1.4.1
//Выведите в консоль все целые числа от 1 до 100.
let i = 1;
while (i<=100) {
	console.log (i);
	i++;
}
</script>

<script> //1.4.2
//Выведите в консоль все целые числа от -100 до 0.
for (let j = -100; j <=0; j++) {
	console.log (j);
}
</script>

<script> //1.4.3
//Выведите в консоль все целые числа от -100 до 0.
for (let j = 100; j >=1; j--) {
	console.log (j);
}
</script>

<script> //1.4.4
//Выведите в консоль все четные числа из промежутка от 1 до 100.
for (let j = 1; j <=100; j++) {
	if (j % 2 == 0) {
	console.log (j);
}
}
</script>

<script> //1.4.5
//Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
for (let j = 1; j <=100; j++) {
	if (j % 3 == 0) {
console.log (j);
}
}
</script>
