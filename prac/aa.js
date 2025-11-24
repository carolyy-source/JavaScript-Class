const hero = {
  name: "cc",
  age: 18,
};

//印出物件
console.log(hero);
//物件轉字串
console.log(JSON.stringify(hero));

//localStorage只能存字串
localStorage.setItem("aa", JSON.stringify(hero));
const result = localStorage.getItem("aa");
//字串轉物件
const data = JSON.parse(result);
console.log(data);
