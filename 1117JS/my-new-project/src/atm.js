class ATM {
  constructor(balance = 0) {
    //建立ATM時設定初始值
    this.balance = balance;
  }
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("金額有誤");
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw Error("金額有誤");
    } else if (amount > this.balance) {
      throw Error("餘額不足");
    }

    this.balance -= amount;
    return amount;
  }

  getBalance() {
    return this.balance;
  }
}

export { ATM };
