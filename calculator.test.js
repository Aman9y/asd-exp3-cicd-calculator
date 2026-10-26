const { add, subtract, multiply, divide, calculate } = require("./calculator");

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiplies two numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("divides two numbers", () => {
    expect(divide(20, 4)).toBe(5);
  });

  test("throws on division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });

  test("calculate dispatches to the right operation", () => {
    expect(calculate("+", 2, 2)).toBe(4);
    expect(calculate("-", 2, 2)).toBe(0);
    expect(calculate("*", 2, 2)).toBe(4);
    expect(calculate("/", 2, 2)).toBe(1);
  });

  test("calculate throws on unknown operator", () => {
    expect(() => calculate("%", 2, 2)).toThrow("Unknown operator: %");
  });
});
