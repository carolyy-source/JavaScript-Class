//解釋prototype用途
function heroCreator(name, age) {
  const hero = {
    name: name,
    age: age,
  };

  hero.__proto__ = {
    attach: function () {
      console.log("ATTACK!");
    },
  };
  return hero;
}

/*所有物件都有".__proto__"屬性
不想顯示的物件可以掛在proto下面做隱藏，但可以正常使用
*/

/*函數才有prototype


*/
const h2 = heroCreator("cc", 18);
const h3 = heroCreator("dd", 20);
