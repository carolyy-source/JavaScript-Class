//setTimeout會進入瀏覽器暫存區(WebAPI),即便延遲0秒,一樣會最後執行

//call stack => FILO
//WebAPI暫存區 -> Queue 區
//Queue 區 => FIFO

console.log(1)

//延遲3000毫秒=3秒
setTimeout(() => {
  console.log(2)
}, 1000)

console.log(3)
