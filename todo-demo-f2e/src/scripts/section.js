import axios from "axios"
import { debounce } from "throttle-debounce"

/*
x-data 用來宣告 Alpine 的元件。
x-show 用來根據布林值（true 或 false）來切換元素的顯示與隱藏狀態。
x-model 替元素附加「雙向資料繫結」，可以用來做雙向綁定
x-model.trim 可以去除頭尾的空白  -->密碼欄位不要用

find->找到物件  findindex->找到索引值
debounce 在事件「停止一段時間」後才執行。
throttle 固定間隔時間內，只允許執行一次。

*/

//把使用的code全部放在changeSection中，一起打包到todo.js

//利用debounce阻止惡意連點->在toggleTask使用

function changeSection() {
  return {
    change_section: "",
    email: "",
    nickname: "",
    password: "",
    isLogin: false,
    taskName: "",
    tasks: [],
    //後續可以用this讀取或修改

    init() {
      const token = localStorage.getItem("todoToken")

      if (token) {
        this.isLogin = true

        // 抓 TODO
        this.getTasks()
      }

      if (this.isLogin) {
        this.gotoTask()
      } else {
        this.gotoSignUp()
      }
    },

    async getTasks() {
      const config = this.setConfig()
      const resp = await axios.get("https://todoo.5xcamp.us/todos", config)

      this.tasks = resp.data.todos
    },

    setConfig() {
      const token = localStorage.getItem("todoToken")
      const config = {
        headers: {
          Authorization: token,
        },
      }

      return config
    },

    async doLogin() {
      // 取得使用者輸入的資訊
      //   const email = this.email
      //   const password = this.password
      //   解構寫法 =>
      const { email, password } = this

      if (email != "" && password != "") {
        // API
        const userData = {
          user: {
            email,
            password,
          },
        }

        try {
          const resp = await axios.post("https://todoo.5xcamp.us/users/sign_in", userData)
          const token = resp.headers.authorization

          if (token) {
            localStorage.setItem("todoToken", token)
            this.isLogin = true
          }
          this.resetForm()
          this.gotoTask()
        } catch (err) {
          console.log(err)
        }
      }
    },

    async doSignUp() {
      const { email, nickname, password } = this

      //check資料是否都成立，就能打API
      if (email != "" && nickname != "" && password != "") {
        const userData = {
          user: {
            //已經用this了，可以只寫email
            email,
            nickname,
            password,
          },
        }

        //axios.post() 會將第二個參數 data（可以是物件、FormData 等格式作為請求的資料主體發送到伺服器。
        try {
          await axios.post("https://todoo.5xcamp.us/users", userData)
          this.resetForm() //成功註冊後，清除頁面上資料
          this.gotoLogin() //跳轉登入欄
        } catch (err) {
          alert(err.response.data.message)
        }
      }
    },

    //清除表單內的資料
    resetForm() {
      this.email = ""
      this.password = ""
      this.nickname = ""
    },
    //避免箭頭函數

    toggleDebounce: debounce(1000, function (id, count) {
      console.log(count)

      if (count % 2 != 0) {
        console.log("GO!")
      }

      // axios.patch(`https://todoo.5xcamp.us/todos/${id}/toggle`, null, this.setConfig())
    }),

    async toggleTask(id) {
      //假
      const todo = this.tasks.find((t) => t.id == id)

      if (todo.completed_at) {
        //console.log("已完成")
        todo.completed_at = null
      } else {
        //console.log("未完成")
        todo.completed_at = new Date()
      }

      //紀錄點擊次數
      if (todo.count == null) {
        todo.count = 0
      }
      todo.count = todo.count + 1

      //真->從點擊次數判斷是否需要打API
      this.toggleDebounce(id, todo.count)
    },

    deleteTask(id) {
      const idx = this.tasks.findIndex((t) => {
        return t.id === id
      })

      if (idx >= 0) {
        // 演！先消除畫面上的task
        this.tasks.splice(idx, 1)

        // 真
        axios.delete(`https://todoo.5xcamp.us/todos/${id}`, this.setConfig())
      }
    },

    async addTask() {
      if (this.taskName != "") {
        // API
        const todoData = {
          todo: {
            content: this.taskName,
          },
        }

        const config = this.setConfig()

        // 假戲>先將mask顯示在畫面上
        const dummyTask = {
          id: crypto.randomUUID(), //自動產生一組不重複數據當id
          content: this.taskName,
          completed_at: null,
        }
        // 將新增的task新增至上方框
        this.tasks.unshift(dummyTask)

        // 清除輸入框
        this.taskName = ""

        // 真做>在將資料傳送到api
        const resp = await axios.post("https://todoo.5xcamp.us/todos", todoData, config)

        // 切換成資料內部真正的id
        const newTask = resp.data
        const idx = this.tasks.findIndex((t) => {
          return t.id == dummyTask.id
        })
        this.tasks.splice(idx, 1, newTask)
      }
    },
    //切換登入&註冊視窗
    gotoLogin() {
      this.change_section = "login"
    },
    showLogin() {
      //回傳布林值判斷x-show是否顯示
      return this.change_section == "login"
    },

    gotoSignUp() {
      this.change_section = "signup"
    },
    gotoTask() {
      this.change_section = "task"
    },

    showSignUp() {
      return this.change_section == "signup"
    },
    showTask() {
      return this.change_section == "task"
    },
    async Logout() {
      // API
      const token = localStorage.getItem("todoToken")

      if (token) {
        const config = {
          headers: {
            Authorization: token,
          },
        }

        try {
          const resp = await axios.delete("https://todoo.5xcamp.us/users/sign_out", config)

          localStorage.removeItem("todoToken")
          this.isLogin = false
          this.gotoLogin()
        } catch (err) {
          console.log(err)
        }
      }
    },
  }
}

export { changeSection }
