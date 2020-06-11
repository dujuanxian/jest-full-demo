test("stringMatching", () => {
  expect("something").toEqual(expect.stringMatching(/^some/));
});

test("toMatch", () => {
  expect("something").not.toMatch(/else/);
});

test("toMatchObject", () => {
  const expected = {
    a: 1,
    b: "string",
  };
  expect(expected).toMatchObject({
    a: expect.any(Number),
    b: expect.stringMatching("string"),
  });
});
