describe("expect.anything", () => {
  test("with mock call", () => {
    const mock = jest.fn();
    mock(1);
    expect(mock).toHaveBeenCalledWith(expect.anything());
  });

  test("with toEqual", () => {
    expect({ a: 1 }).toEqual(expect.anything());
    expect(undefined).not.toEqual(expect.anything());
    expect(null).not.toEqual(expect.anything());
  });
});

describe("expect.any", () => {
  test("with mock call", () => {
    const mock = jest.fn();
    mock(1);
    expect(mock).toHaveBeenCalledWith(expect.any(Number));
  });

  test("with toEqual", () => {
    expect({ a: 1 }).toEqual(expect.any(Object));
  });
});
