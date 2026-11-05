// Даалгавар 1: Хувьсагч, төрөл, хөрвүүлэлтийн жишиг туршилт

const name = "Болд";
let age = 20;
const gpa = 3.5;
const isStudent = true;
let nothing = null;
let notSet;
const items = [1, 2, 3];
const person = { name: "Болд", age: 20 };

// console.table + typeof
console.table([
  { хувьсагч: "name", утга: name, төрөл: typeof name },
  { хувьсагч: "age", утга: age, төрөл: typeof age },
  { хувьсагч: "gpa", утга: gpa, төрөл: typeof gpa },
  { хувьсагч: "isStudent", утга: isStudent, төрөл: typeof isStudent },
  { хувьсагч: "nothing", утга: nothing, төрөл: typeof nothing }, // "object" (JS-ийн алдаа)
  { хувьсагч: "notSet", утга: notSet, төрөл: typeof notSet },
  { хувьсагч: "items", утга: JSON.stringify(items), төрөл: typeof items }, // "object"
  { хувьсагч: "person", утга: JSON.stringify(person), төрөл: typeof person },
]);

// Төрөл хөрвүүлэлт
console.table([
  { илэрхийлэл: '"5" + 3', үр_дүн: "5" + 3 },          // "53"
  { илэрхийлэл: '"5" - 3', үр_дүн: "5" - 3 },          // 2
  { илэрхийлэл: 'Number("42")', үр_дүн: Number("42") },
  { илэрхийлэл: 'Number("abc")', үр_дүн: Number("abc") }, // NaN
  { илэрхийлэл: 'String(123)', үр_дүн: String(123) },
  { илэрхийлэл: 'Boolean("")', үр_дүн: Boolean("") },    // false
  { илэрхийлэл: 'true + 1', үр_дүн: true + 1 },         // 2
  { илэрхийлэл: '"5" == 5', үр_дүн: "5" == 5 },         // true
  { илэрхийлэл: '"5" === 5', үр_дүн: "5" === 5 },       // false
]);

// 0.1 + 0.2 — бодит тоо хадгалах нарийвчлалын асуудал
console.log("0.1 + 0.2 =", 0.1 + 0.2);                  // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3 ?", 0.1 + 0.2 === 0.3);  // false
console.log("toFixed(2):", (0.1 + 0.2).toFixed(2));     // "0.30"
console.log("Epsilon-оор харьцуулах:", Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
// Шалтгаан: 0.1, 0.2 нь хоёртын системд төгсгөлгүй бутархай тул IEEE 754 стандартаар ойролцоолж хадгалагддаг.