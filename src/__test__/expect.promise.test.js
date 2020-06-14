test("resolves", async () => {
  await expect(Promise.resolve(2)).resolves.toBe(2);
});

test("reject", async () => {
  await expect(Promise.reject(new Error("Wrong Argus"))).rejects.toThrow(Error);
  await expect(Promise.reject(new Error("Wrong Argus"))).rejects.toThrow(
    "Wrong"
  );
  await expect(Promise.reject(new Error("Wrong Argus"))).rejects.toThrow(
    /Wrong Arg/
  );
});
