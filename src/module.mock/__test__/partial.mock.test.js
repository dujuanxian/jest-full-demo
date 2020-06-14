import { getApple, getBanana, getStrawberry } from "../fruitShop";

jest.mock("../fruit", () => {
  const mockedModule = jest.createMockFromModule("../fruit");
  const actualModule = jest.requireActual("../fruit");
  return {
    ...mockedModule,
    ...actualModule,
    apple: "mocked apple",
    default: jest.fn(() => "mocked banana"),
  };
});

test("partial.module.mock", () => {
  expect(getBanana()).toBe("mocked banana");
  expect(getApple()).toBe("mocked apple");
  expect(getStrawberry()).toBe("strawberry");
});
