const Calculator = require('./calculator.js');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    test('should add a positive number to currentValue', () => {
      // Arrange
      const number = 5;

      // Act
      const result = calc.add(number);

      // Assert
      expect(result).toBe(5);
    });

    test('should not add a non-integer number', () => {
      // Arrange
      const number = 3.14;

      // Act
      const result = calc.add(number);

      // Assert
      expect(result).toBeUndefined();
    });

    test('should not add a negative number', () => {
      // Arrange
      const number = -10;

      // Act
      const result = calc.add(number);

      // Assert
      expect(result).toBeUndefined();
    });
  });

  describe('subtract', () => {
    test('should subtract a positive number from currentValue', () => {
      // Arrange
      const number = 2;
      calc.currentValue = 10;

      // Act
      const result = calc.subtract(number);

      // Assert
      expect(result).toBe(8);
    });

    test('should not subtract a non-integer number', () => {
      // Arrange
      const number = 1.5;

      // Act
      const result = calc.subtract(number);

      // Assert
      expect(result).toBeUndefined();
    });

    test('should not subtract a negative number', () => {
      // Arrange
      const number = -5;

      // Act
      const result = calc.subtract(number);

      // Assert
      expect(result).toBeUndefined();
    });
  });

  describe('divide', () => {
    test('should divide currentValue by a non-zero number', () => {
      // Arrange
      const number = 2;
      calc.currentValue = 10;

      // Act
      const result = calc.divide(number);

      // Assert
      expect(result).toBe(5);
    });

    test('should not divide by zero', () => {
      // Arrange
      const number = 0;

      // Act
      const result = calc.divide(number);

      // Assert
      expect(result).toBeUndefined();
    });

    test('should not divide by a non-integer number', () => {
      // Arrange
      const number = 1.5;

      // Act
      const result = calc.divide(number);

      // Assert
      expect(result).toBeUndefined();
    });
  });

  describe('multiply', () => {
    test('should multiply currentValue by a positive number', () => {
      // Arrange
      const number = 3;
      calc.currentValue = 5;

      // Act
      const result = calc.multiply(number);

      // Assert
      expect(result).toBe(15);
    });

    test('should not multiply by a non-integer number', () => {
      // Arrange
      const number = 2.5;

      // Act
      const result = calc.multiply(number);

      // Assert
      expect(result).toBeUndefined();
    });

    test('should not multiply by zero', () => {
      // Arrange
      const number = 0;

      // Act
      const result = calc.multiply(number);

      // Assert
      expect(result).toBe(0);
    });
  });
});