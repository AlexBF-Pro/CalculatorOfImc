import "@testing-library/jest-dom";
import { calculate } from "../pages/index";

test("caculation function", async () => {
  expect(calculate(97, 1.76)).toBe(31.31);
});
