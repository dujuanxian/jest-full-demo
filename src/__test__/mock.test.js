import axios from "axios";
import Users from "../users";

describe(".mock", () => {
  function forEach(items, callback) {
    items.forEach((item) => callback(item));
  }
  test("mock functions", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([1, 2], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(1);
    expect(mockCallback.mock.calls[1][0]).toBe(2);
    expect(mockCallback.mock.results[0].value).toBe(43);
  });
});

test("mockReturnValue", () => {
  const mockFn = jest.fn();
  mockFn
    .mockReturnValueOnce(42)
    .mockReturnValueOnce("string")
    .mockReturnValue(true);

  expect(mockFn()).toBe(42);
  expect(mockFn()).toBe("string");
  expect(mockFn()).toBe(true);
  expect(mockFn()).toBe(true);
});

jest.mock("axios");

test("jest.mock", async () => {
  const users = [{ name: "John" }];
  const usersResponse = { data: users };
  axios.get.mockResolvedValue(usersResponse);

  await expect(Users.getUsers()).resolves.toEqual(users);
});

test("mockImplementation", async () => {
  const users = [{ name: "John" }];
  const usersResponse = { data: users };
  axios.get.mockImplementation(() => Promise.resolve(usersResponse));

  await expect(Users.getUsers()).resolves.toEqual(users);
});
