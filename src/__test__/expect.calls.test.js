describe("toHaveBeenCalled", () => {
  test("toHaveBeenCalled", () => {
    const mockFn = jest.fn();
    mockFn(1);
    mockFn(2);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledWith(1);
    expect(mockFn).toHaveBeenCalledWith(2);
    expect(mockFn).toHaveBeenLastCalledWith(2);
    expect(mockFn).toHaveBeenNthCalledWith(1, 1);
  });

  test("toHaveReturned", () => {
    const mockFn = jest.fn().mockImplementation(() => 2);
    mockFn();
    mockFn();
    expect(mockFn).toHaveReturned();
    expect(mockFn).toHaveReturnedTimes(2);
    expect(mockFn).toHaveReturnedWith(2);
  });

  test("toHaveLastReturnedWith", () => {
    const beverage1 = { name: "Lemon" };
    const beverage2 = { name: "Orange" };
    const drink = jest.fn((beverage) => beverage.name);

    drink(beverage1);
    drink(beverage2);

    expect(drink).toHaveLastReturnedWith("Orange");
    expect(drink).toHaveNthReturnedWith(1, "Lemon");
  });
});
