describe("arrayContaining", () => {
  const expected = ["Alice", "Bob"];
  test("matches even if received contains additional elements", () => {
    expect(["Alice", "Bob", "Eve"]).toEqual(expect.arrayContaining(expected));
    expect(["Alice", "Eve", "Bob"]).toEqual(expect.arrayContaining(expected));
    expect(["Bob", "Eve"]).not.toEqual(expect.arrayContaining(expected));
  });
});

describe("objectContaining", () => {
  test("match equal", () => {
    const expected = {
      a: 1,
      b: "",
    };
    expect(expected).toEqual(
      expect.objectContaining({
        a: expect.any(Number),
        b: expect.anything(),
      })
    );
  });
});

describe("stringContaining", () => {
  test("should match", () => {
    expect("hello").toEqual(expect.stringContaining("ll"));
    expect("hello").not.toEqual(expect.stringContaining("www"));
  });
});

describe("toContain", () => {
  test("toContain", () => {
    expect([1, 2, 3]).toContain(1);
  });
  test("toContainEqual", () => {
    const myBeverage = { delicious: true };
    expect([{ delicious: true }, { sour: false }]).toContainEqual(myBeverage);
  });
});
