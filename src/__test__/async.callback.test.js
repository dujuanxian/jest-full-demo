describe("callback", () => {
  const fetchData = (callback) => {
    const data = "peanut butter";
    callback(data);
  };

  test("callback", () => {
    expect.hasAssertions();
    function callback(data) {
      expect(data).toBe("peanut butter");
    }
    fetchData(callback);
  });
});

describe("callback with async", () => {
  const fetchData = (callback) => {
    const data = "peanut butter";
    setTimeout(() => callback(data), 0);
  };

  test("callback with async", () => {
    // The problem is that the test will complete as soon as fetchData completes
    // if callback is called asynchonously, it has NO assertion
    expect.assertions(0);
    function callback(data) {
      expect(data).toBe("peanut butter");
    }
    fetchData(callback);
  });

  test("callback with done", () => {
    return new Promise((done) => {
      // Jest will wait until the done callback is called before finishing the test.
      expect.hasAssertions();
      function callback(data) {
        expect(data).toBe("peanut butter");
        done();
      }
      fetchData(callback);
    });
  });

  test("callback with done in try/catch", () => {
    return new Promise((done) => {
      // If done() is never called, the test will fail
      // to see in the test log why it failed, we have to wrap expect in a try block and pass the error in the catch block to done
      expect.hasAssertions();
      function callback(data) {
        try {
          expect(data).toBe("peanut butter");
          done();
        } catch (error) {
          done(error);
        }
      }
      fetchData(callback);
    });
  });
});
