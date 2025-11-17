function add(x, y) {
  return x + y;
}

test("測試add", () => {
  expect(add(1, 2)).toBe(3);
});

test("測試add", () => {
  expect(add(2, 2)).toBe(4);
});
