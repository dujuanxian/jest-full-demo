const prepareState = (input, callback) => {
  const state = `${input} state`;
  return setTimeout(() => callback(state), 1000);
};

const validateState = (state) => {
  if (state) {
    return true;
  }
  return false;
};

const waitOnState = (input) => {
  return new Promise((resolve, reject) => {
    prepareState(input, (state) => {
      if (validateState(state)) {
        resolve(state);
      } else {
        reject(Error);
      }
    });
  });
};

test("expect.hasAssertions", () => {
  expect.hasAssertions();
  const initState = "init";
  prepareState(initState, (state) => {
    expect(validateState(state)).toBeTruthy();
  });
  return waitOnState(initState);
});

test("expect.hasAssertions async", async () => {
  expect.hasAssertions();
  await expect(waitOnState("else")).resolves.toBe("else state");
});
