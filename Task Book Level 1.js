

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

<script> //1.5.1
//Найдите сумму всех целых чисел от 1 до 100.
let sum =0;
for (let j = 1; j <=100; j++) {
sum += j;
}
console.log (sum);

</script>

<script> //1.5.2
//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
let sum2 =0;
for (let i = 1; i <=100; i++) {
    if (i % 2 == 0) {
    sum2 += i;
}
}
console.log (sum2);
</script>

<script> //1.5.3
//Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
let sum2 =0;
for (let i = 1; i <=100; i++) {
    if (i % 2 != 0) {
    sum2 += i;
}
}
console.log (sum2);
</script>

<script> //1.5.4
//Даны два целых числа. Найдите остаток от деления первого числа на второе.
let num = 10;
let num2 = 3;
let rest;
rest = num % num2;
console.log (rest);
</script>

<script> //1.5.4
//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
let str = 'abcde'
for (let i =str.length-1; i >=0; i--) {
    console.log (str[i]);
}
</script>

<script> //1.6.1
//Дан массив с числами. Найдите сумму квадратов элементов этого массива.
let arr = [1,2,3,4,5];
let sum= 0;
for (let elem of arr){
    sum += elem**2;
}
console.log(sum);
</script>

<script> //1.6.2
//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
let arr = [4,9];
let sum= 0;
for (let elem of arr){
    sum += (Math.sqrt(elem));
}
console.log(sum**2);
</script>

<script> //1.6.3
//Дан массив с числами. Найдите сумму положительных элементов этого массива.
let arr = [1,-2,3,-4,-5];
let sum= 0;
for (let elem of arr){
    if (elem >0){
    sum += +elem;
}
}
console.log(sum);
</script>

<script> //1.6.4
//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
let arr = [1, -2, -3, 4, 15];
let sum= 0;
for (let elem of arr){
    if (elem >0 && elem <10){
    sum += +elem;
}
}
console.log(sum);
</script>

<script> //1.7.1
//Получите массив букв этой строки.
let str = 'abcde';
let arr = [...str];
console.log(arr);
</script>

<script> //1.7.2
//Получите массив цифр этого числа.
let num = 12345;
let str = String(num);
let arr3 = [];
for (let elem of str){
arr3.push(+elem);
}
console.log(arr3);
</script>

<script> //1.7.3
//Дано некоторое число: Переверните его:
let num2 = 12345;
let arra = String(num2).split('').reverse().join('');
console.log(arra);
</script>

<script> //1.7.4
//Дано некоторое число: Найдите сумму цифр этого числа.
let num3 = 12345;
let str = String(num3);
let sum = 0;
for (let i of str){
    sum += +i;
}
console.log(sum);
</script>

<script> //1.8.1
//Заполните массив целыми числами от 1 до 10.
let arr = [];
for (let i = 1; i<=10; i++){
    arr.push(i);
}
console.log(arr);
</script>

<script> //1.8.2
//Заполните массив четными числами из промежутка от 1 до 100.
let arr2 = [];
for (let j = 1; j<=100; j++){
    if (j % 2 ==0){
    arr2.push(j);
}
}
console.log(arr2);
</script>

<script> //1.8.3
//Округлите эти дроби до одного знака в дробной части.
let arr3 = [1.456, 2.125, 3.32, 4.1, 5.34];
let arr4 = [];
for (let elem of arr3){
arr4.push(elem.toFixed(1));
}
console.log(arr4);
</script>

<script> //1.9.1
//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://
let arr = ['http://aaa','http: bbb','http ccc',]
let arr2 = [];
for (let elem of arr){
    if (elem.startsWith('http://')) {
arr2.push(elem);
}
}
console.log(arr2);
</script>

<script> //1.9.2
//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
let arr = ['http://aaa.html','http: bbb','http ccc',]
let arr2 = [];
for (let elem of arr){
    if (elem.endsWith('.html')) {
arr2.push(elem);
}
}
console.log(arr2);
</script>

<script> //1.9.3
//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
let arr3 = [100,200,300];
for (let elem of arr3){
elem = Math.floor(elem*1.1);
console.log(elem);
}
</script>

<script> //1.10.1
//Заполните массив случайными числами из промежутка от 1 до 100.
    let arr = [];
    for (let i = 0; i <= 10; i++){
        arr.push(Math.floor(Math.random()*(100-1+1)+1));
    }
    console.log(arr);
</script>

<script> //1.10.2
//Дано некоторое число: Выведите в консоль все его символы с конца.
    let num = 12345;
    let str = String(num).split('').reverse();
    console.log(str);
</script>

<script> //1.10.3
//По очереди выведите в консоль подмассивы из двух элементов нашего массива:
    let arr2 = [1, 2, 3, 4, 5, 6];
    for (let i=0; i<=arr2.length; i++){
    let arrs = arr2.splice(0,2);
    console.log(arrs);
}
</script>

<script> //1.10.4
//Даны два массива: Слейте эти массивы в новый массив:
let arr11 = [1, 2, 3];
let arr22 = [4, 5, 6];
let arr3 = [].concat(arr11, arr22);
console.log(arr3);
</script>
