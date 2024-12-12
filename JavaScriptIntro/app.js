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

// 1) Filter Array by String Length

// -  Funksiya array və number qəbul edir. Uzunluğu minlength`dən böyük olan string`ləri console`a verin.

// filterByLength(strings, minLength)

// İnput : ["apple", "kiwi", "banana", "grape"], 4

// Output :

// "apple"
// "banana"
// "grape"

// let filterByLength = (arr, minLength) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > minLength) {
//       console.log(arr[i]);
//     }
//   }
// };

// filterByLength(["apple", "kiwi", "banana", "grape", "ananas"], 4);

// *******************************************************************

// 2) Help the Wizard Count Coins

// A wizard dropped his bag of coins and asked you to count only the gold coins (marked with the number 1). Can you help him count how many gold coins he has?

// countGoldCoins(coins)
// İnput  : [1, 0, 1, 1, 0, 1]
// Output : 4

// let countGoldCoins = (coins) => {
//   let counter = 0;

//   for (let i = 0; i < coins.length; i++) {
//     if (coins[i] === 2) {
//       counter = counter + 1;
//     }
//   }
//   console.log(counter);
// };

// countGoldCoins([2, 2, 0, 1, 1, 0, 1]);

// *******************************************************************

// 3) inspectBaskets(baskets, maxCapacity)

// - Büyük bir meyve bahçesinde meyveleri toplamak için sepetler kullanılır. Her sepetin maksimum kapasitesi vardır, ancak işçiler dikkatli değildir ve bazen sepetleri aşırı doldururlar, diğer sepetlerde ise hala daha fazla meyve için yer vardır. Yönetici bilmek istiyor:

//     Hangi sepetlerde ne kadar yer kaldı?
//     Hangi sepetler dolu.
//     Hangi sepetler aşırı dolu ve ne kadar.

// Sizin göreviniz sepetleri incelemek ve bu bilgileri yazdırmak için bir fonksiyon yazmak.

// Input : [3, 5, 8, 2, 10, 5], 5

// Output :

// 	Baskets with space left: Basket 1: 2 space(s), Basket 4: 3 space(s)

// 	Full baskets: Basket 2, Basket 6

// 	Overfilled baskets: Basket 3: 3 extra, Basket 5: 5 extra

// let inspectBaskets = (baskets, maxCapacity) => {
//   let order = 1;
//   let extra = 0;
//   let spaceLeft = 0;

//   for (let i = 0; i < baskets.length; i++) {
//     if (baskets[i] > maxCapacity) {
//       extra = baskets[i] - maxCapacity;

//       console.log(`Basket ${order} : ${extra} extra -  Overfilled basket`);
//     } else if (baskets[i] < maxCapacity) {
//       spaceLeft = maxCapacity - baskets[i];

//       console.log(`Basket ${order} : ${spaceLeft} - spaces left`);
//     } else {
//       console.log(`Basket ${order} : Full`);
//     }

//     order++;
//   }
// };

// inspectBaskets([3, 5, 8, 2, 10, 5], 5);

// *******************************************************************

// 4) Sum of Even Numbers

// Task:
// Write a function that takes an array of numbers and returns the sum of all even numbers in the array.

// -- Bir sayı dizisi alan ve dizideki tüm çift sayıların toplamını döndüren bir fonksiyon yazın.

// Input : [1, 2, 3, 4, 5]
// Output : 6

// function sumEvenNumbers(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       sum = sum + numbers[i];
//     }
//   }

//   console.log(sum);
// }

// sumEvenNumbers([1, 2, 3, 4, 5, 6]);

// *******************************************************************

// 2) Find the Sum of Digits of a Number

// Input: 123
// Output: 6

// function sumOfDigits(number) {
//   number = number + "";
//   let sum = 0;

//   for (let i = 0; i < number.length; i++) {
//     digit = number[i] * 1;
//     sum = sum + digit;
//   }

//   console.log(sum);
// }

// sumOfDigits(123);

// Students Data

let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];

// Şifrəsində rəqəm olmayan tələbələri tapın

// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].loginDetail.password.length; j++) {
//     let studentPassword = students[i].loginDetail.password[j];

//     if (studentPassword * 1 == studentPassword) {
//       console.log(
//         "Name : " +
//           students[i].name +
//           " || Password : " +
//           students[i].loginDetail.password
//       );
//       break;
//     }
//   }
// }

// let name = "gurban";
// console.log(name[0]);
// name[0] = "G";
// console.log(name);

// let newName = name.split("");

// newName[0] = newName[0].toUpperCase();
// newName = newName.join("");
// console.log(newName);

// Müəllimlərin baş hərflərini böyük hərflə yazın
// console.log(students);

// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i].teacher.length; j++) {
//     let teacherName = students[i].teacher[j].name;
//     teacherName = teacherName.split("");
//     teacherName[0] = teacherName[0].toUpperCase();
//     teacherName = teacherName.join("");
//     students[i].teacher[j].name = teacherName;
//   }
// }

// console.log(students);

// Qızların arasında id-si 3 olan müəllimlərin adını deyin

// for (let i = 0; i < students.length; i++) {
//   if (students[i].gender === "girl") {
//     for (let j = 0; j < students[i].teacher.length; j++) {
//       if (students[i].teacher[j].id === 3) {
//         console.log(students[i].teacher[j].name);
//       }
//     }
//   }
// }

// Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin

// for (let i = 0; i < students.length; i++) {
//   students[i].salaryUSD = Math.ceil(students[i].salaryAZN / 1.7);
// }

// console.log(students);

// let obj = {
//   name: "Gurban",
// };

// obj.age = 31;

// console.log(obj);

// - Tələbələrin name, username və passwrod ibarət yeni array yaradın
// [ {name:qurban,username:qurban123,password:qqq123} ]

// let studentLoginDetails = []; // ibarət yeni array yaradın

// for (let i = 0; i < students.length; i++) {
//   let currentStudent = students[i];

//   let studentDetail = {
//     name: currentStudent.name,
//     username: currentStudent.loginDetail.username,
//     password: currentStudent.loginDetail.password,
//   };

//   studentLoginDetails.push(studentDetail);
// }

// console.log(studentLoginDetails);

// 9. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

// Input : [1,2] [3,4] '*'
// Ouptut : 1*2*3*4

// let concatWithChar = (arr1, arr2, symbol) => {
//   // arr1.concat(arr2).join("*")

//   let concatArray = []; // 1,2,3,4 => arr1.concat(arr2)
//   let result = "";

//   // Start concat = arr1.concat(arr2)
//   for (let i = 0; i < arr1.length; i++) {
//     concatArray.push(arr1[i]); // 1,2
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     concatArray.push(arr2[i]); // 3,4
//   }
//   // Finish concat

//   // Start Join
//   for (let i = 0; i < concatArray.length; i++) {
//     if (i == concatArray.length - 1) {
//       // 3 == 4-1 // [1,2,3,4]
//       result += concatArray[i];
//     } else {
//       result += concatArray[i] + symbol;
//     }
//   }
//   // Finish Join

//   console.log(result);
// };

// concatWithChar([1, 2], [3, 4], "*"); // 1*2*3*4

// Şifrəsində rəqəm olmayan tələbələri tapın

// students.forEach((student) => {
//   let password = student.loginDetail.password;

//   let hasNumber = false;

//   for (let i = 0; i < password.length; i++) {
//     if (password[i] * 1 == password[i]) {
//       //  '1' * 1 == 1
//       hasNumber = true;
//       break;
//     }
//   }

//   if (!hasNumber) {
//     console.log(`Student name : ${student.name}, Password ; ${password}`);
//   }
// });

// let arr = [1, 2, 3, 4, 5, 9, 9, 1, 20, 2, 3, 4, 2, 30];
// console.log(Math.max(...arr));
// let maxNumber = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > maxNumber) {
//     maxNumber = arr[i]; //
//   }
// }

// console.log(maxNumber);

// let number = Math.floor(Math.random() * 10);
// let theNumberIsFound = true;

// while (theNumberIsFound) {
//   let guess = prompt("Please enter a number");

//   if (number == guess * 1) {
//     console.log("The number is found : " + number);
//     theNumberIsFound = false;
//   }
// }

// 2 . Password Encryptor

// Create a function that encrypts all passwords by reversing them and converting uppercase to lowercase and lowercase to uppercase.

// "Salam123" -> "321MALAs"
// 1. function yaziriq
// 2. loop
// 3. split
// 4. reverse
// 5. join
// 6. condition
// 7. variable olmalidir

// let passwords = [];
// let newPasswordArray = [];

// students.forEach((student) => {
//   passwords.push(student.loginDetail.password);
// });

// function encryptPassword(passwordArray) {
//   passwordArray.forEach((password) => {
//     newPasswordArray.push(
//       password
//         .split("")
//         .reverse()
//         .map((letter) => {
//           if (letter.toUpperCase() === letter) {
//             return letter.toLowerCase();
//           } else {
//             return letter.toUpperCase();
//           }
//         })
//         .join("")
//     );
//   });

//   console.log(passwords);
//   console.log(newPasswordArray);
// }

// encryptPassword(passwords);

// 4 . Replace Vowels in Surnames

// Write a function that replaces all vowels in the surnames with asterisks (*) and returns the updated array.

// Example:
// Input: "Ismayilzade"
// Output: "sm*y*lz*d*"

// let vowels = ["a", "e", "i", "o", "u"];
// let vowels = "aeiouAEIOU";

// function replaceVowels(studentArray) {
//   studentArray.forEach((student) => {
//     let surnameWithAsterisks = "";
//     let surname = student.surname;

//     surname = surname.split("").forEach((letter) => {
//       if (vowels.includes(letter)) {
//         surnameWithAsterisks += "*";
//       } else {
//         surnameWithAsterisks += letter;
//       }
//     });

//     console.log(surnameWithAsterisks);
//   });
// }

// replaceVowels(students);
