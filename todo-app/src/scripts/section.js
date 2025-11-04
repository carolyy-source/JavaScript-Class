import axios from "axios"
function changeSection() {
  return {
    change_section: "signup",
    email: "",
    nickname: "",
    password: "",

    async Logout() {
      //API
      const token = localStorage.getItem("todoToken")

      if (token) {
        const config = {
          headers: {
            accept: "application/json",
            Authorization: token,
          },
        }
      }

      const resp = await axios.delete("https://todoo.5xcamp.us/users/sign_out", config)
      localStorage.removeItem("todoToken")
      this.islogin = false
    },

    async doLogin() {
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
          }
          this.resetForm()
          this.gotoTask()
        } catch (err) {
          console.log(err)
        }
      }
    },

    async doSignUp() {
      //   const email = this.email
      //   const nickname = this.nickname
      //   const password = this.password
      //   解構寫法 =>
      const { email, nickname, password } = this

      if (email != "" && nickname != "" && password != "") {
        //check資料是否都成立，就能打API
        const userData = {
          user: {
            email: email,
            //已經用this了，可以只寫email
            nickname,
            password,
          },
        }
        //axios.post() 會將第二個參數 data（可以是物件、FormData 等格式作為請求的資料主體發送到伺服器。
        try {
          await axios.post("https://todoo.5xcamp.us/users", userData)
          this.resetForm()
          this.gotoLogin()
        } catch (err) {
          alert(err.response.data.message)
        }
      }
    },

    //清除表單內的資料
    resetForm() {
      this.email = ""
      this.nickname = ""
      this.password = ""
    },

    gotoLogin() {
      this.change_section = "login"
    },
    gotoSignUp() {
      this.change_section = "signup"
    },

    showLogin() {
      return this.change_section == "login"
    },
    showSignUp() {
      return this.change_section == "signup"
    },
    showTask() {
      return this.change_section == "task"
    },
  }
}

export { changeSection }
