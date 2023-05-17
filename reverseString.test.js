const reverseString = require('./reverseString.js');

test('Reverses a string correctly', () => {
  const result = reverseString("Hello, world!");
  expect(result).toBe("!dlrow ,olleH");
});

test('Returns an empty string when input is empty', () => {
  const result = reverseString("");
  expect(result).toBe("");
});

test('Reverses a string with one character', () => {
  const result = reverseString("A");
  expect(result).toBe("A");
});

test('Reverses a string with whitespace characters', () => {
  const result = reverseString("   ");
  expect(result).toBe("   ");
});