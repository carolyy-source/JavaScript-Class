//原始code
// import { initPages } from "./pages"
// initPages()

// 程式碼寫在這裡

//匯入 function changeSection
import { changeSection } from "./section.js"

import Alpine from "alpinejs"
window.Alpine = Alpine //非必須

Alpine.data("cs", changeSection)
Alpine.start()
