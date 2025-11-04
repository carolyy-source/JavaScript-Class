//陣列Const
const nums = ["A", "B", "C", "D", "E"];

//索引值
console.log(nums[4]); //輸出E
console.log(nums[nums.length - 1]); //輸出E

console.log("-----印出序列------");
//印出所有的值 A B C D E
//1. for迴圈
for (let i = 0; i < nums.length; i += 1) {
  console.log(nums[i]);
}

//2. forEach寫法
nums.forEach(function (x) {
  console.log(x);
});

console.log("----splice替換/插入----");
//splice 序列替換/插入值
// (第幾個數字開始,換掉幾個數字,替換值)
nums.splice(2, 1, "Z");
for (let i = 0; i < nums.length; i += 1) {
  console.log(nums[i]);
}

/*高階函數
 1.使用別的函數當參數
 2.函數中使用函數

例子 1.
function a(x) {}
function cc() {}
a(cc); 

例子 2.
function aa() {
  function bb() {}
}
*/

const number = [1, 2, 3, 4, 5];
console.log("原始數列number：");
console.log(number);

console.log("----數列應用----");
//[1,2,3,4,5]-->[2,4,6,8,10]
const result = [];
for (let i = 0; i < nums.length; i += 1) {
  const n = number[i];
  result.push(n * 2);
}
console.log(result);

//map = 收集成陣列
console.log("--map調整數字--");
const result2 = number.map(function (n) {
  return n * 2;
});
console.log(result2);

//filter篩選
console.log("--filter篩選--");
const result3 = number.filter(function (n) {
  return n <= 3;
});
console.log(result3); //印出[ 1, 2, 3 ]

//reduce歸納 callback function
//reduce(累進,每回合)
console.log("--reduce歸納--");

const result4 = number.reduce(function (x, y) {
  //累加1+2+3+4+5=15 ,初始值=1 ,結果=15+1=16
  return x + y;
}, 1);
console.log(result4);
