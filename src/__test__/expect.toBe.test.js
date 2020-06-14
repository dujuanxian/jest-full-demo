test("toBe", () => {
  expect(1 + 1).toBe(2);
});
test("toBeCloseTo", () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3);
});
test("toBeNaN", () => {
  expect(NaN).toBeNaN();
});
test("toBeGreaterThan", () => {
  expect(4).toBeGreaterThan(1);
  expect(4).toBeGreaterThanOrEqual(4);
});
test("toBeLessThan", () => {
  expect(4).toBeLessThan(5);
  expect(4).toBeLessThanOrEqual(4);
});
test("toBeInstanceOf", () => {
  expect(() => {}).toBeInstanceOf(Function);
});
test("toBeDefined", () => {
  let value;
  expect(value).not.toBeDefined();
  expect(value).toBeUndefined();
});
test("should toBeNull", () => {
  expect(null).toBeNull();
});
test("toBeFalsy", () => {
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(NaN).toBeFalsy();
});
test("toBeTruthy", () => {
  expect(NaN).not.toBeTruthy();
});
