const isPositiveInteger = require('./isPositiveInteger');

test('should return true for positive integers', () => {
  expect(isPositiveInteger(5)).toBe(true);
  expect(isPositiveInteger(100)).toBe(true);
});

test('should return false for zero', () => {
  expect(isPositiveInteger(0)).toBe(false);
});

test('should return false for negative integers', () => {
  expect(isPositiveInteger(-3)).toBe(false);
  expect(isPositiveInteger(-100)).toBe(false);
});

test('should return false for non-integer numbers', () => {
  expect(isPositiveInteger(3.5)).toBe(false);
  expect(isPositiveInteger(-2.5)).toBe(false);
});

test('should return false for non-number inputs', () => {
  expect(isPositiveInteger("string")).toBe(false);
  expect(isPositiveInteger(null)).toBe(false);
  expect(isPositiveInteger(undefined)).toBe(false);
});
