/*函數
function aa(x,y) {
}

匿名函數
const a = function (x,y){
}

箭頭函數 v1
const b = (x,y) =>{
    return 123
}
箭頭函數 v2
const b = (x,y) =>123
箭頭函數 v2 (參數只有1個)
const b = x =>123

*/
const number5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//求偶數平方和
/*   
function getEven(n) {
  return n % 2 == 0;
}
function getSquare(n) {
  return n * n;
}
function plus(x, y) {
  return x + y;
}    */

//改寫成箭頭函數
const total2 = number5
  .filter((n) => n % 2 == 0)
  .map((n) => n * n)
  .reduce((x, y) => x + y);
console.log(total2);
