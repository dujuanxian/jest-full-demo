import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("manual.mock", () => {
  beforeEach(() => {
    axios.__setResponse([{ name: "test" }]);
  });

  test("mock axios", async () => {
    await expect(getUsers()).resolves.toEqual([{ name: "test" }]);
  });
});
