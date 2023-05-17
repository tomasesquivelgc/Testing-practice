const capitalize = require('./capitalizeString.js');

describe ('capitalize', () => {
  test('should capitalize the first letter of the string', () => {
    const string = 'hello';

    const result = capitalize(string);

    expect(result).toBe('Hello');
  })
})
