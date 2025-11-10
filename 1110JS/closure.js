//closure 閉包: 可以「記住」它被建立時所在的作用域環境，即使那個作用域已經結束。
// break point 中斷點

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//印出3 3 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//印出0 1 2

for (var i = 0; i < 3; i++) {
  ((j) => {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
//印出0 1 2
