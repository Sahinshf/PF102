// 1) 18 yaşından olanları girişinə icazə verin.

// let name = prompt("Adınızı daxil edin:");
// let age = prompt("Yaşınızı daxil edin:");

// if (age * 1 == age) {
//   if (age > 18) {
//     alert(
//       `Salam ${name}, 18-dən çox yaşınız olduğu üçün  daxil ola bilərsiz.`
//     );
//   } else {
//     alert(`Bağışlayın ${name},  daxil ola bilməzsiniz.`);
//   }
// } else {
//   alert("Zəhmət olmasa yaşınızı düzgün daxil edin (rəqəmlə).");
// }

// 2) Doğum tarixinə əsasən yaşını ekrana verin

// let birthYear = prompt("Doğulduğunuz ili daxil edin:");
// let currentYear = 2024;
// if (birthYear * 1 == birthYear) {
//   let age = currentYear - birthYear;
//   if (age > 0) {
//     alert(`Siz ${age} yaşınızdasınız.`);
//   } else {
//     alert("Daxil etdiyiniz il düzgün deyil!");
//   }
// } else {
//   alert("Zəhmət olmasa düzgün bir il daxil edin.");
// }

// 3) Daxil edilən rəqəmə görə həftənin gününü ekrana verin

// let dayNumber = prompt("Həftənin gününü daxil edin"); // 2

// switch (true) {
//   case dayNumber == "1":
//     alert("Monday");
//     break;
//   case dayNumber == "2":
//     alert("Tuesday");
//     break;
//   case dayNumber == "3":
//     alert("Wednesday");
//     break;
//   case dayNumber == "4":
//     alert("Thursday");
//     break;
//   case dayNumber == "5":
//     alert("Friday");
//     break;
//   case dayNumber == "6":
//     alert("Saturday");
//     break;
//   case dayNumber == "7":
//     alert("Sunday");
//     break;
//   default:
//     alert("Zəhmət olmasa 1 ilə 7 arasında bir dəyər daxil edin.");
// }

// İzah && ||

// && - və
// || - və ya

// let number = 7;

// if (number == 7 && number < 9  ) {
//   console.log(" Eded 7 ile 9 intervalindadir");
// }

// let number2 = 11;

// if (number == 11 || number < 9 || number*2 == 14 ) {
//   console.log(" Eded 7 ile 9 intervalindadir");
// }

// if (true) {
//   console.log("Salam");
// }

// console.log("Salam");

// 4) Imtahan nəticəsinə görə tələbənin grade`ini ekrana verin

// let score = prompt("İmtahandan aldığınız balı daxil edin (0-100 arasında):");
// score = score * 1;
// // Balın qiymətə çevrilməsi

// switch (true) {
//   case score >= 90 && score <= 100:
//     alert("A qiymətini aldınız.");
//     break;
//   case score >= 80 && score < 90:
//     alert("B qiymətini aldınız.");
//     break;
//   case score >= 70 && score < 80:
//     alert("C qiymətini aldınız.");
//     break;
//   case score >= 60 && score < 70:
//     alert("D qiymətini aldınız.");
//     break;
//   case score >= 0 && score < 60:
//     alert("E qiymətini aldınız.");
//     break;
//   default:
//     alert("Zəhmət olmasa 0 ilə 100 arasında bir bal daxil edin.");
// }

// 6) İstifadəçinin nə qədər müddətdir gözlədiyini və hansı avtobusdan istifadə edəcəyini bilərək, növbəti avtobus üçün nə qədər gözləməli olduğunu ekrana verin. Avtobuslar müəyyən intervalla hərəkət edir.

// let busNumber = prompt("Avtobus nömrəsini daxil edin (135 və ya 199):");
// let waitTime = prompt("Gözlədiyiniz vaxtı (dəqiqə) daxil edin:");
// busNumber = busNumber * 1; //135
// waitTime = waitTime * 1; //15

// let bus135Interval = 20;
// let bus199Interval = 30;

// let remainingWaitTime;

// if (waitTime === bus135Interval && busNumber === 135) {
//   alert("Avtobus artıq gəlib!");
// } else if (waitTime === bus199Interval && busNumber === 199) {
//   alert("Avtobus artıq gəlib!");
// } else if (busNumber === 135) {
//   remainingWaitTime = bus135Interval - waitTime; // remainingWaitTime = 30 - 15 = 15
//   alert(`Növbəti avtobus ${remainingWaitTime} dəqiqədən sonra gələcək.`);
// } else if (busNumber === 199) {
//   remainingWaitTime = bus199Interval - waitTime; // remainingWaitTime = 30 - 15 = 15
//   alert(`Növbəti avtobus ${remainingWaitTime} dəqiqədən sonra gələcək.`);
// } else {
//   alert("Yanlış avtobus nömrəsi daxil etdiniz!");
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// let string = "Shahin Sharifzada";
// let counter = 0;

// for (let i = 0; string[i] != undefined; i++) {
//   counter++;
// }

// console.log(counter);

// let letter = "";
// for (let i = 65; i <= 90; i++) {
//   letter += String.fromCharCode(i);
// }
// console.log(letter);

// *******************************************************************

// 1) Factorial of a Number
//Write a function factorial(n) to calculate the factorial of a number.

// let factorial = (reqem) => {
//   let sum = 1;
//   for (let i = 1; i <= reqem; i++) {
//     sum *= i;
//   }
//   console.log(sum);
// };

// factorial(5);

// *******************************************************************

// 2) Funksiya iki parameter qəbul edir. Ad və Hərf.
//    Hərfin indeksini tapın funksiya yazın
// input  : gurban , u
// output : index : 1

// let getLetter = (text, letter) => {
//   //   console.log(text, letter);

//   for (let i = 0; i < text.length; i++) {
//     // console.log(text[i]);

//     if (text[i] == letter) {
//       console.log("Bu hərf var, index : ", i + 1);
//     }
//   }
// };

// getLetter("Ruqeyya", "e");

// *******************************************************************

// 3) Check Even or Odd
// Create a function that returns "Even" if a number is even and "Odd" if it's odd.

// Input  : 2 || Output : Even
// Input  : 3 || Output : Odd

// let number = (reqem) => {
//   //   console.log(reqem);

//   if (reqem % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// };

// number(21);
// number(22);
// number(0);

// *******************************************************************

// 4) Check if Number is Positive or Negative
// Write a function that returns "Positive", "Negative", or "Zero" for a number.

// Input : 1  || Output  : Positive
// Input : 0  || Output  : Zero
// Input : -1 || Output  : Negative

// *******************************************************************
