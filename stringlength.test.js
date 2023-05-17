const stringlength  = require('./stringlength.js');


test('Returns the correct length for a valid string', () => {
  const result = stringlength("Hello");
  expect(result).toBe(5);
});

test('Returns error for an invalid string', () => {
  const result = stringlength("This is too long");
  expect(result).toBe('Oops! error');
});

test('Returns error for an empty string', () => {
  const result = stringlength("");
  expect(result).toBe('Oops! error');
});

test('Returns error for a string with only one character', () => {
  const result = stringlength("A");
  expect(result).toBe('Oops! error');
});