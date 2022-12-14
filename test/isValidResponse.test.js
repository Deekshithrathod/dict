import isValidResponse from "../src/helpers/isValidResponse.js";

let res = {};

beforeEach(() => {
  res = {
    status: 0,
  };
});

describe("testing isValid Function", () => {
  test("should pass as +ve case", () => {
    res.status = 200;
    expect(isValidResponse(res)).toBe(true);
  });
  test("should pass as -ve case", () => {
    res.status = 404;
    expect(isValidResponse(res)).toBe(false);
  });
});
