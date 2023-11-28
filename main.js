//27. Argument sifatida raqamlar massivini oladigan va alohida elementlarga ega yangi massivni qaytaradigan funksiya yarating. 
//function separateNumbers(arr) {
    //let separatedNumbers = [];
  
    //arr.forEach(number => {
      //const digits = number.toString().split('');
      //digits.forEach(digit => {
       // separatedNumbers.push(parseInt(digit));
      //});
    //});
  
    //return separatedNumbers;
  //}
  //const numbers = [123, 456, 789];
  //const separated = separateNumbers(numbers);
  //console.log(separated); // Natija: [1, 2, 3, 4, 5, 6, 7, 8, 9]
 
  //28. Birinchi 100 ta tub sonning yig‘indisini hisoblang va ularni massivda qaytaring 
  //function isPrime(num) {
   // if (num <= 1) return false;
   // if (num === 2) return true;
   // if (num % 2 === 0) return false;
   // const sqrtNum = Math.sqrt(num);
   // for (let i = 3; i <= sqrtNum; i += 2) {
   //   if (num % i === 0) return false;
   // }
//return true;
 // }
  
 // function sumOfFirst100Primes() {
 //   let count = 0;
 //   let sum = 0;
 //   let primes = [];
  
 //   for (let i = 2; count < 100; i++) {
 //     if (isPrime(i)) {
 //       primes.push(i);
 //       sum += i;
 //       count++;
 //     }
 //   }
  
 //   return { sum, primes };
 // }
  
 // const result = sumOfFirst100Primes();
 // console.log("Birinchi 100 ta tub sonning yig'indisi:", result.sum);
 // console.log("Ular massiv ko'rinishida:", result.primes);

 //29. Birinchi 100 ta tub son orasidagi masofani chop eting 
 //function isPrime(num) {
    //if (num <= 1) return false;
   // if (num === 2) return true;
   // if (num % 2 === 0) return false;
   // const sqrtNum = Math.sqrt(num);
   // for (let i = 3; i <= sqrtNum; i += 2) {
   //   if (num % i === 0) return false;
   // }
   // return true;
  //}
  
 // function findPrimeGaps() {
 //   let previousPrime = 2;
 //   let primeGaps = [];
  
 //   for (let i = 3; i <= 100; i++) {
 //     if (isPrime(i)) {
 //       primeGaps.push(i - previousPrime);
 //       previousPrime = i;
 //     }
 //   }
  
 //   return primeGaps;
 // }
  
//  const primeGaps = findPrimeGaps();
//  console.log("Birinchi 100 ta tub sonlar orasidagi masoflar:", primeGaps);

//30. Noaniq o‘lchamdagi ikkita musbat son qo‘shiladigan funksiya yarating. Raqamlar satr sifatida qabul qilinadi va natija ham qator sifatida taqdim etilishi kerak 
//function addBigNumbers(a, b) {
//    const num1 = BigInt(a);
//    const num2 = BigInt(b);
//    const sum = num1 + num2;
  
//    return sum.toString();
//  }
//  const number1 = "1515";
//  const number2 = "95856";
//  const result = addBigNumbers(number1, number2);
//  console.log("Natija:", result);
  
//31.Matndagi so‘zlar sonini qaytaruvchi funksiya yarating
//function countWordsAndAlert() {
//    const userInput = prompt("Iltimos, matn kiriting:");
    
//    if (userInput !== null && userInput.trim() !== '') {
//      const wordCount = countWords(userInput);
//      alert("Siz kiritgan matnda " + wordCount + " ta so'z bor.");
//    } else {
//      alert("Siz matn kiritmadingiz yoki bekor qildingiz.");
//    }
//  }
  
//  function countWords(text) {
//    const cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
//    const wordsArray = cleanedText.split(/\s+/);
//    return wordsArray.length;
//  }
//  countWordsAndAlert();

//32.Matndagi har bir so‘zning birinchi harfini bosh harf bilan yozadigan funksiya yarating
//function capitalizeFirstLetterOfEachWord(text) {
//    const words = text.split(' ');
  
//    for (let i = 0; i < words.length; i++) {
//      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//    }
  
//    return words.join(' ');
//  }
  
//  const inputText = "matndagi har bir so‘zning birinchi harfini bosh harf bilan yozadigan funksiya yarating.";
//  const result = capitalizeFirstLetterOfEachWord(inputText);
//  console.log("Natija:", result);
  
 //33. Vergul bilan ajratilgan qatorda olingan sonlar yig‘indisini hisoblang 
// function sumNumbersInString(text) {
//    const numbersArray = text.split(',').map(Number);
//    const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//    return sum;
//  }

  //const inputString = "1, 2, 3, 4, 5";
  //const result = sumNumbersInString(inputString);
  //console.log("Yig'indi:", result);

  //34. Matn ichidagi so‘zlar bilan massivni qaytaruvchi funksiya yarating 
  //function getWordsArray(text) {
    //const wordsArray = text.split(/\s+/);
    //return wordsArray;
 // }
  //const inputText = "Bu JavaScript dasturidagi funksiya matnini tuzish uchun yaratilgan";
  //const words = getWordsArray(inputText);
  //console.log("So'zlar massivi:", words);

  //35. CSV matnini “ikki o‘lchovli” massivga aylantirish funksiyasini yarating 
 // function csvToArray(csvString) {
 //   const rows = csvString.split('\n');
 //   const result = [];
  
 //   rows.forEach(row => {
 //     const values = row.split(',');
 //     result.push(values);
 //   });
  
 //   return result;
 // }
  
 // const csvData = `John,Doe,30\nJane,Smith,25\nBob,Johnson,35`;
 // const arrayFromCSV = csvToArray(csvData);
  //console.log("Massiv:", arrayFromCSV);

  //36. Satrni belgilar massiviga aylantiruvchi funksiya yarating 
 // function stringToArray(str) {
 //   return Array.from(str);
 // }

  //const text = "salomat";
  //const arrayFromString = stringToArray(text);
  //console.log("Belgilar massivi:", arrayFromString);
  
 //37. Har bir belgining ASCII kodlarini o‘z ichiga olgan massivdagi satrni o‘zgartiruvchi funksiya yarating. 
// function stringToAsciiArray(str) {
//    const asciiArray = [];
    
//    for (let i = 0; i < str.length; i++) {
//      const asciiCode = str.charCodeAt(i);
//      asciiArray.push(asciiCode);
//    }
  
//    return asciiArray;
//  }
  
//  const text = "Apple";
//  const asciiArray = stringToAsciiArray(text);
//  console.log("ASCII kodlar massivi:", asciiArray);
   
//38. Satrdagi ASCII kodlarini o'z ichiga olgan massivni o'zgartiruvchi funksiya yarating 
//function asciiArrayToString(asciiArray) {
//    return String.fromCharCode(...asciiArray);
//  }
  
//  const asciiCodes = [65, 112, 112, 108, 101];
//  const stringFromAscii = asciiArrayToString(asciiCodes);
//  console.log("Matn:", stringFromAscii);
  
//39. Tsezar shifrini amalga oshiring 
//function caesarCipher(text, shift) {
//    let result = '';
  
//    for (let i = 0; i < text.length; i++) {
//      let char = text[i];
      
//      if (char.match(/[a-z]/i)) {
//        const code = text.charCodeAt(i);
  
//        if ((code >= 65) && (code <= 90)) {
//          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
//        } else if ((code >= 97) && (code <= 122)) {
//          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
//        }
//      }
//      result += char;
//    }
  
//    return result;
//  }
//  const text = "Hello, World!";
//  const shiftAmount = 3;
//  const encryptedText = caesarCipher(text, shiftAmount);
//  console.log("Shifrlangan matn:", encryptedText);
  
//40. Sonlar massivi uchun pufakchali tartiblash algoritmini amalga oshiring 
//function bubbleSort(arr) {
//    const length = arr.length;
//  
//    for (let i = 0; i < length - 1; i++) {
//      for (let j = 0; j < length - i - 1; j++) {
//        if (arr[j] > arr[j + 1]) {
//          const temp = arr[j];
//          arr[j] = arr[j + 1];
//          arr[j + 1] = temp;
//        }
//      }
//    }
//  
//   return arr;
//  }
  
//  const numbers = [64, 34, 25, 12, 22, 11, 90];
//  console.log("Boshlang'ich massiv:", numbers);
//  const sortedNumbers = bubbleSort(numbers);
//  console.log("Pufakchali tartiblash natijasi:", sortedNumbers);

//41. Ikki nuqta orasidagi masofani ularning x, y koordinatalari bilan hisoblab chiqish funksiyasini tuzing 
//function distanceBetweenPoints(x1, y1, x2, y2) {
//    const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
//    return distance;
//  }

//  const x1 = 3, y1 = 5;
//  const x2 = 7, y2 = 9;
//  const result = distanceBetweenPoints(x1, y1, x2, y2);
//  console.log("Ikki nuqta orasidagi masofa:", result);
  
//42. Markaz koordinatalari va radiusi bilan aniqlangan ikkita doira kesishganligini ko‘rsatadigan mantiqiy qiymatni qaytaradigan funksiya yarating.
///function circlesIntersect(x1, y1, r1, x2, y2, r2) {
///    const distanceBetweenCenters = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
///    const sumOfRadii = r1 + r2;
  
///    if (distanceBetweenCenters < sumOfRadii) {
///      return true;
///    } else {
///      return false;
///    }
///  }

///  const x1 = 0, y1 = 0, r1 = 5;
///  const x2 = 8, y2 = 0, r2 = 5;
///  const result = circlesIntersect(x1, y1, r1, x2, y2, r2);
///  console.log("Doira kesishishi:", result);
  
//43. Ikki o‘lchovli massivni argument va raqam sifatida qabul qiladigan va t raqami bilan belgilangan ustunni bir o‘lchovli massiv sifatida ajratib oladigan funksiya yarating. 
//function extractColumn(matrix, t) {
//    const column = [];
  
//    for (let i = 0; i < matrix.length; i++) {
//      if (matrix[i].length > t) {
//        column.push(matrix[i][t]);
//      } else {
//        column.push(undefined);
//      }
//    }
  
//    return column;
//  }
  
//  const arr = [
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]
//  ];
  
//  const columnIndex = 1;
//  const result = extractColumn(arr, columnIndex);
//  console.log(`Ustun ${columnIndex} ma'lumoti:`, result);
  
//44. Ikkilik sondan iborat qatorni songa aylantiruvchi funksiya yarating 
//function binaryToDecimal(binaryString) {
//    const decimalNumber = parseInt(binaryString, 2);
//    return decimalNumber;
//  }
  
//  const binary = '1010'; 
//  const decimalResult = binaryToDecimal(binary);
//  console.log(`Desyatlik (decimal) son: ${decimalResult}`);

//45. Tir-qirrali massivdagi barcha sonlar yig‘indisini hisoblash funksiyasini yarating (cheksiz darajadagi darajalarda raqamlar yoki boshqa raqamlar massivlarini o‘z ichiga oladi 
//function sumNestedArrays(arr) {
//    let sum = 0;
  
//    function sumArray(array) {
//      array.forEach(element => {
//        if (Array.isArray(element)) {
//          sumArray(element);
//        } else {
//          sum += element;
//        }
//      });
//    }
  
 //   sumArray(arr);
 //   return sum;
 // }

 // const nestedArray = [1, 2, [3, 4, [5, 6]], [7, 8], 9];
 // const result = sumNestedArrays(nestedArray);
 // console.log("Tir-qirrali massivdagi barcha sonlar yig'indisi:", result);

//46. ​​Tir-qirrali sonlar yoki sonlar massividagi maksimal sonni toping 
//function findMaxNumber(arr) {
//    let maxNumber = Number.MIN_SAFE_INTEGER;
  
//    function findMax(array) {
//      array.forEach(element => {
//        if (Array.isArray(element)) {
 //         findMax(element);
 //       } else {
 //         if (element > maxNumber) {
 //           maxNumber = element;
 //         }
 //       }
 //     });
 //   }
  
 //   findMax(arr);
 //   return maxNumber;
 // }

 // const nestedNumbers = [1, 20, [3, 40, [5, 60]], [70, 8], 90];
 // const max = findMaxNumber(nestedNumbers);
 // console.log("Tir-qirrali massivdagi maksimal son:", max);

 //47. Yangi massivdagi raqamlar yoki boshqa massivlar bilan qirrali massivni chuqur nusxalash 
 //function deepClone(arr) {
 //   if (!Array.isArray(arr)) {
 //     return arr;
 //   }
  
 //   const clonedArray = [];
 //   arr.forEach(element => {
 //     if (Array.isArray(element)) {
 //       clonedArray.push(deepClone(element));
 //     } else {
 //       clonedArray.push(element);
 //     }
 //   });
  
 //   return clonedArray;
 // }

 // const originalArray = [1, [2, 3], [4, [5, 6]]];
 // const clonedArray = deepClone(originalArray);
  
 // console.log("Asl massiv:", originalArray);
 // console.log("Nusxalangan massiv:", clonedArray);

 //48. Satrdagi eng uzun so‘zni qaytarish funksiyasini yarating 
 //function findLongestWord(sentence) {
 //   const words = sentence.split(/\s+/);
 //   let longestWord = '';
  
 //   words.forEach(word => {
 //     if (word.length > longestWord.length) {
 //       longestWord = word;
 //     }
 //   });
  
 //   return longestWord;
 // }

 // const text = "Post uzun lekin foydali, aynisa dasturchi bo’lmoqchi yoki farzandini dasturchi qilmoqchi bo’lganlarga";
 // const longest = findLongestWord(text);
 // console.log("Eng uzun so'z:", longest);

 //50. Argument sifatida n ni qabul qiladigan va I dan n gacha bo‘lgan n ta tasodifiy sonli massivni qaytaradigan funksiya yarating. Raqamlar arra ichida yagona bo'lishi kerak 
// function generateRandomNumbers(n) {
//    const randomNumbers = [];
  
//    for (let i = 0; i < n; i++) {
//      const randomNumber = Math.floor(Math.random() * 100); 
//      randomNumbers.push(randomNumber);
//    }
  
//    return randomNumbers;
//  }

//  const n = 5; 
//  const generatedArray = generateRandomNumbers(n);
//  console.log(`Tasodifiy sonli massiv (${n} ta):`, generatedArray);

//51. Satr ichidagi harflar chastotasini toping. Natijani massivlar qatori sifatida qaytaring. Har bir pastki qatorda 2 ta element mavjud: harf va hodisalar soni. 
//function calculateCharacterFrequency(text) {
//    const frequencyMap = {};
  
//    for (let char of text) {
//      if (/[a-zA-Z]/.test(char)) {
//        char = char.toLowerCase();
//        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
//      }
//    }
  
//    const result = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);
//    const formattedResult = result.map(([char, frequency]) => [char, frequency]);
  
//    return formattedResult;
// }

//  const sentence = "Satr ichidagi harflar chastotasini toping. Natijani massivlar qatori sifatida qaytaring. Har bir pastki qatorda 2 ta element mavjud: harf va hodisalar soni";
//  const frequencies = calculateCharacterFrequency(sentence);
  
//  console.log("Harflar chastotasi:");
//  console.log(frequencies);

//52. Fibonachchi(500) ni yuqori aniqlik bilan hisoblang (barcha raqamlar)
//function bigFibonacci(n) {
//    let a = BigInt(0);
//    let b = BigInt(1);
//    let c = BigInt(1);
    
//    for (let i = BigInt(2); i <= BigInt(n); i++) {
//      c = a + b;
//      a = b;
//      b = c;
//    }
    
//    return c.toString();
//  }
  
//  const result = bigFibonacci(500);
//  console.log("Fibonachchi(500):", result);

//53. 70 ni hisoblang! yuqori aniqlik bilan (barcha raqamlar).
//function bigFactorial(n) {
//    let result = BigInt(1);
//    
//    for (let i = BigInt(2); i <= BigInt(n); i++) {
//      result *= i;
//    }
    
//    return result.toString();
//  }
  
//  const factorial = bigFactorial(70);
//  console.log("70 faktoriali:", factorial);
  
  
  
  
  
  
  
   
  
  
  
  