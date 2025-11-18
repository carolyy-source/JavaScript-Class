/* 
TypeScript>透過增加型別定義來擴展 JavaScript。
*/
/*part1*/
// let a: number = 1;
// a = 2;

// const nums: any[] = [];
// nums.push(1);
// nums.push("2");
// nums.push("a");

/*part2
加上"?"表示非必要
*/

// type Person = {
//   name: string;
//   age: number;
//   magic?: boolean;
//   status?: "a" | "b" | "c";
// };

// interface Person {
//   name: string;
//   age: number;
//   magic?: boolean;
//   status?: "a" | "b" | "c";
// }

// const hero: Person = {
//   name: "cc",
//   age: 20,
//   status: "a",
// };

// const mage: Person = {
//   name: "dd",
//   age: 25,
//   magic: true,
// };

// console.log(hero, mage);

/*part3
void 空的->不需回報程式
*/
function hi(a: string, b: string): void {
  console.log(a, b);
  console.log(123);
}
const aa = hi("aa", "bb");
aa;
