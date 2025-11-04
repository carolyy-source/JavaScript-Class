console.log(123)

// <!--
// 找到id=​"hi"的內容
// document.querySelector("#hi")
// document.getElementById("hi")

// 替換id=​"hi"的文字內容
// document.querySelector("#hi").textContent = "123"

// 替換id=​"hi"的HTML內容(含格式....)
// document.querySelector("#hi").innerHTML = "<h1>123</h1>"
// -->

/* 需要把script src 該行程式碼置於hi後面，才抓得到
否則顯示null
*/
const d = document.querySelector("#hi")
console.log(d)

//----->加入 事件監聽器 event listener
// 可以加入多個點擊後效果
// 或是在script src 加上defer 將執行步驟移至最後
// document.addEventListener("DOMContentLoaded", () => {
//   const d = document.querySelector("#hi");
//   console.log(d);
// });

// //按鈕
// document.addEventListener("click", () => {
//   console.log(456);
// });

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   console.log(789);
// });

//文字變換按鈕
const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
  const div = document.querySelector("#hi")
  const currentText = div.textContent

  if (currentText == "Hello") {
    div.textContent = "World"
  } else {
    div.textContent = "Hello"
  }
})

//數量調整按鈕
const btnUp = document.querySelector("#btnUp")
const btnDown = document.querySelector("#btnDown")
const quantity = document.querySelector("#quantity")

btnUp.addEventListener("click", () => {
  const currentValue = Number(quantity.value) //轉型
  quantity.value = currentValue + 1
})

btnDown.addEventListener("click", () => {
  const currentValue = Number(quantity.value)
  //early return
  if (currentValue < 1) {
    return
  }

  quantity.value = currentValue - 1
  //   if (currentValue > 1) {
  //     quantity.value = currentValue - 1;
  //   }
})
