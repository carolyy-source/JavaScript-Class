//匯出供別人使用: 1.直接加export

export function aa() {
  console.log("AA");
}

export function bb() {
  console.log("BB");
}

export function xyz() {
  console.log("XYZ");
}

/* 2.named export法:
export { aa, xyz };
*/

//default export
export default bb;
