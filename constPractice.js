//map練習

console.log("----map練習1----");
const chars = ["a", "b", "c", "d"];
const doubleChars = chars.map(function (n) {
  //return n + n;
  return n.repeat(2);
});
console.log(doubleChars);

console.log("----map2---");
const number = [1, 2, 3, 4, 5];
const result = number.map(function (n) {
  return n > 2; //boolean值
});
console.log(result);

console.log("----map3----");
const number2 = [1, 2, 3, 4, 5];
const result2 = number.map(function (n) {
  return n % 2;
});
console.log(result2);

console.log("----filter練習----");
const number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//留下偶數
const result3 = number3.filter(function (n) {
  return n % 2 == 0;
});
console.log(result3);

console.log("--reduce練習--");
const result4 = number.reduce(function (x, y) {
  //累加1+2+3+4+5=15 ,初始值=0
  return x + y;
}, 0);
console.log(result4);

console.log("***綜合練習***");
//求偶數平方和
const number5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = number5.filter(function (n) {
  return n % 2 == 0;
});
const square = even.map(function (n) {
  return n * n;
});
const answer = square.reduce(function (x, y) {
  //累加4+16+36+64+100 ,初始值=0
  return x + y;
}, 0);
console.log("--印出結果--");
console.log(answer);

console.log("--數列/答案CHECK--");
console.log(square);
console.log("4 + 16 + 36 + 64 + 100 = " + (4 + 16 + 36 + 64 + 100));

//精簡方法1
const total = number5
  .filter(function (n) {
    return n % 2 == 0;
  })
  .map(function (n) {
    return n * n;
  })
  .reduce(function (x, y) {
    return x + y;
  });
console.log(total);

//精簡方法2
function getEven(n) {
  return n % 2 == 0;
}
function getSquare(n) {
  return n * n;
}
function plus(x, y) {
  return x + y;
}
const total2 = number5.filter(getEven).map(getSquare).reduce(plus);
console.log(total2);
