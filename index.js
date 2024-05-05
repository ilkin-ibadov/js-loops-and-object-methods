// JS number methods

/* toFixed(n): Float number-i nöqtədən sonra n rəqəminə qədər yuvarlaqlaşdırır,
string olaraq qaytarır.
*/
let num = 10.345;
let roundedNum = num.toFixed(2);
// console.log(roundedNum)

// toString(): Number-i string-ə çevirir.
let str = num.toString();
// console.log(typeof str)

// parseInt(): String-i number-ə çevirir.
let numAgain = parseInt(str);
// console.log(typeof numAgain)
// console.log(numAgain)

// parseFloat():  String-i float-a çevirir.
let flt = parseFloat(str);
// console.log(flt);

// isNaN(): Ötürülən value number deyilsə true, number olduqda false qaytarır.
// console.log(isNaN(num))

// Math object methods
Math.round(10.49); // Adi qaydada yuvarlaqlaşdırma edir.
Math.ceil(10.01); // Yuvarlaqlaşdırdığı rəqəmi bir üst tam rəqəmə tamamlayıb qaytarır.
Math.floor(10.99); // Yuvarlaqlaşdırdığı rəqəmin tam hissəsini qaytarır.

//------------------- JS Loops ----------------------------------------------------------------------------------

// Javascript-də looplar müəyyən şərt ödənənə qədər təkrarlanan kodlardır.

/*
for loop

Ümumi loop yazmaq üçün və ya array-ları iterate etmək üçün istifadə olunur

for (expression 1; expression 2; expression 3) {
  code block
}

expression 1: Code block run olmamışdan qabaq 1 dəfə işləyir

expression 2: Code block-un run olması üçün ödənməli olan şərti müəyyən edir

expression 3: Code block run olduqdan hər dəfə sonra işləyir

*/

for (let i = 0; i < 5; i++) {
  //   console.log("i=" + i);
}

// for in loop-u object property-lərini iterate etmək üçün istifadə olunur
const person = { name: "Ilkin", surname: "Ibadov", age: 23 };

// x object-in key adları, person[x] həmin key-in sahib olduğu dəyərdir.
for (let x in person) {
//   console.log(x);
//   console.log(person[x]);
}

// for in loop-una oxşardır, sadəcə burda x index yox, birbaşa həmin iteration-dakı value-dır
let language = "JavaScript";
let text = "";
for (let x of language) {
  text += x;
}
// console.log(text)

// forEach loop-u array-in hər elementi üçün callback function call edir.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach((value, index, array) => {
  txt += value;
});
// console.log(txt)

// bu formada da yazıla bilər
// numbers.forEach(myFunction);
// function myFunction(value, index, array) {
//   txt += value;
// }

// verilmiş şərt doğru olduğu müddətcə while loop-u işləyir
let i = 11;
while (i < 10) {
  text += "The number is " + i;
  //   console.log(text)
  i++;
}

// do while loop-u şərtin ödənib ödənmədiyini yoxlamazdan əvvəl həmişə code block-u 1 dəfə run edir
do {
  text += "The number is " + i;
  //   console.log(text)
  i++;
} while (i < 10);

/* .map(): loop məntiqi ilə işləyən array method-udur, array-i iterate edib elementlər
üzərində proseslər etmək üçün istifadə olunur
*/
const arrayToBeMapped = [65, 44, 12, 4];

arrayToBeMapped.map((item, index, array) => {
  //   console.log(item * 10);
});

// .filter(condition): Verilmiş array-i loop edib yalnız condition-u ödəyən element-ləri qaytarır
const filteredItems = arrayToBeMapped.filter((item) => item > 43);
// console.log(filteredItems);

/* .every(condition): Verilmiş array-i loop edir, condition bütün array elementləri üçün
 ödənirsə true, biri üçün belə ödənmədikdə false qaytarır.
*/
const ages = [32, 33, 16, 40];

function checkAge(age) {
  return age > 18;
}

const allAgesOver18 = ages.every(checkAge);

// console.log(allAgesOver18)
