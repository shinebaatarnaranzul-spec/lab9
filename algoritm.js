// Даалгавар 2: 8 функц (Бэлэн функц хэрэглэхгүй гэсэн шаардлагын дагуу гараар хэрэгжүүлсэн)

// 1 + 2 + ... + n
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

// n!
function factorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

// Анхны тоо эсэх
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 1..n: 3-д хуваагдвал Fizz, 5-д хуваагдвал Buzz, хоёуланд нь бол FizzBuzz
function fizzBuzz(n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) out.push("FizzBuzz");
    else if (i % 3 === 0) out.push("Fizz");
    else if (i % 5 === 0) out.push("Buzz");
    else out.push(i);
  }
  return out;
}

// Эгшгийн тоо (латин + кирилл)
function countVowels(str) {
  const vowels = "aeiouAEIOUаэиоуөүяеёюыАЭИОУӨҮЯЕЁЮЫ";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) count++;
  }
  return count;
}

// Палиндром эсэх (том/жижиг үсэг, зай, тэмдэгтийг үл тооно)
function isPalindrome(str) {
  const clean = [];
  for (const ch of str.toLowerCase()) {
    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9") || (ch >= "а" && ch <= "я") || ch === "ө" || ch === "ү" || ch === "ё") {
      clean.push(ch);
    }
  }
  for (let i = 0, j = clean.length - 1; i < j; i++, j--) {
    if (clean[i] !== clean[j]) return false;
  }
  return true;
}

// Массивын хамгийн их утга
function maxOf(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// Цифрүүдийн нийлбэр
function digitSum(n) {
  n = Math.abs(n);
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = (n - (n % 10)) / 10;
  }
  return sum;
}

// Туршилт (console дээр харах)
console.log("sumTo(10) =", sumTo(10));                 // 55
console.log("factorial(5) =", factorial(5));           // 120
console.log("isPrime(17) =", isPrime(17));             // true
console.log("fizzBuzz(15) =", fizzBuzz(15).join(", "));
console.log("countVowels('Hello world') =", countVowels("Hello world")); // 3
console.log("isPalindrome('А роза упала на лапу Азора') =", isPalindrome("А роза упала на лапу Азора")); // true
console.log("maxOf([3, 9, 2]) =", maxOf([3, 9, 2]));   // 9
console.log("digitSum(1234) =", digitSum(1234));       // 10