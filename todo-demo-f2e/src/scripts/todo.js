/*原始code
// import { initPages } from "./pages"
// initPages()
*/

// 程式碼寫在這裡
//匯入 function changeSection

import Alpine from "alpinejs"
import { changeSection } from "./section.js"

Alpine.data("cs", changeSection)

Alpine.start()
