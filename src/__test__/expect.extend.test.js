expect.extend({
  toAlwaysBeTruthy() {
    return {
      message: () => "Always be true",
      pass: true,
    };
  },
  toBeArrayOfSize(received, size) {
    if (!Array.isArray(received)) {
      return {
        message: () => "Not Array",
        pass: false,
      };
    }
    if (received.length !== size) {
      return {
        message: () => "Wrong size",
        pass: false,
      };
    }
    return {
      message: () => "Right size",
      pass: true,
    };
  },
});

test("expect.extend toAlwaysBeTruthy", () => {
  expect(false).toAlwaysBeTruthy();
});

test("expect.extend toBeArrayOfSize", () => {
  expect({}).not.toBeArrayOfSize(1);
  expect([1]).toBeArrayOfSize(1);
  expect([]).not.toBeArrayOfSize(1);
});
