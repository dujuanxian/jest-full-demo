import Consumer from "../consumer";

jest.mock("../soundPlayer");

test("class.manual.mock", () => {
  const consumer = new Consumer();
  expect(consumer.playSomething()).toBe("default");
});
