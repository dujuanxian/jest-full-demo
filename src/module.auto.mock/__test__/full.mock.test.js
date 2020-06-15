import fruit, { strawberry, apple } from "../fruit";
import { getApple, getBanana, getStrawberry } from "../fruitShop";

jest.mock("../fruit");

test("full.module.mock", () => {
  expect(fruit()).toBe(undefined);
  expect(apple).toBe("apple");
  expect(strawberry()).toBe(undefined);
});

test("full.module.mock with consumer", () => {
  fruit.mockImplementation(() => "mocked banana");
  expect(getBanana()).toBe("mocked banana");
  expect(getStrawberry()).toBeUndefined();
  expect(getApple()).toBe("apple");
});
