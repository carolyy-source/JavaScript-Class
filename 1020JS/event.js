//事件event (e)

const out = document.querySelector("#out")
const inner = document.querySelector("#inner")

out.addEventListener("click", (e) => {
  console.log("out")
  //console.log("out", e.currentTarget)
  // e.target.remove()
  // e.currentTarget.remove()
})

inner.addEventListener("click", (e) => {
  //e.target.remove()
  // console.log("in", e.currentTarget)
})

//e.target 看事件在哪裡轉彎
//e.currentTarget 看事件在哪裡註冊
//e.stopPropagation
