describe("mock per test", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("doMock", () => {
    jest.doMock("../fruit", () => {
      return {
        apple: "mocked apple",
        default: jest.fn(() => "mocked fruit"),
        strawberry: jest.fn(() => "mocked strawberry"),
      };
    });
    // eslint-disable-next-line global-require
    const { apple, strawberry, default: defaultExport } = require("../fruit");

    const defaultExportResult = defaultExport();
    expect(defaultExportResult).toBe("mocked fruit");
    expect(defaultExport).toHaveBeenCalled();

    expect(apple).toBe("mocked apple");
    expect(strawberry()).toBe("mocked strawberry");
  });

  test("dontMock", () => {
    jest.dontMock("../fruit");
    // eslint-disable-next-line global-require
    const { apple, strawberry, default: defaultExport } = require("../fruit");

    const defaultExportResult = defaultExport();
    expect(defaultExportResult).toBe("banana");

    expect(apple).toBe("apple");
    expect(strawberry()).toBe("strawberry");
  });
});
