describe("promise", () => {
  const fetchData = () => {
    const data = "peanut butter";
    return Promise.resolve(data);
  };

  test("promise", () => {
    expect.hasAssertions();
    return fetchData().then((data) => {
      expect(data).toBe("peanut butter");
    });
  });

  test("promise with async/await", async () => {
    expect.hasAssertions();
    await expect(fetchData()).resolves.toBe("peanut butter");
  });
});
