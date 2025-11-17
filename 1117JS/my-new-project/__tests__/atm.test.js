// 存錢功能
// 可以存錢
// 不可以存 0 元或是小於 0 元的金額（越存錢越少！）

// 領錢功能
// 可以領錢
// 不能領 0 元或是小於 0 元的金額（越領錢越多！）
// 不能領超過本身餘額

import { ATM } from "../src/atm.js";

describe("存錢功能", () => {
  it("can deposit money", () => {
    // 1.建立 ATM
    const atm = new ATM(10);

    // 2.存錢
    atm.deposit(5);

    // 3.看餘額
    expect(atm.getBalance()).toBe(15);
  });

  it("不可以存 0 元", () => {
    // 3A
    const atm = new ATM(10);

    //2.嘗試存 0 元
    expect(() => {
      atm.deposit(0);
    }).toThrow("金額有誤");

    expect(() => {
      atm.deposit(-100);
    }).toThrow("金額有誤");
  });

  describe("領錢功能", () => {
    it("可以領錢", () => {
      // 3A
      const atm = new ATM(100);
      const amount = atm.withdraw(25);

      // 3.看餘額
      expect(amount).toBe(25);
      expect(atm.getBalance()).toBe(75);
    });

    it("不能領 0 元或是負的金額", () => {
      // 3A
      const atm = new ATM(100);

      expect(() => {
        atm.withdraw(0);
      }).toThrow("金額有誤");

      expect(() => {
        atm.withdraw(-100);
      }).toThrow("金額有誤");
    });

    it("不能領超過本身餘額", () => {
      // 3A
      const atm = new ATM(100);

      expect(() => {
        atm.withdraw(150);
      }).toThrow("餘額不足");
    });
  });
});
