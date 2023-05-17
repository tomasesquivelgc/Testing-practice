class Calculator{
  constructor() {
    this.currentValue = 0;
  }

  add(number){
    if(Number.isInteger(number) && 0<number){
      this.currentValue+=number;
      return this.currentValue;
    }
  }

  subtract(number) {
    if(Number.isInteger(number) && 0<number){
      this.currentValue-=number;
      return this.currentValue;
    }
  }

  divide(number) {
    this.currentValue /= number;
    return this.currentValue;
  }
 
  multiply(number) {
    this.currentValue *= number;
    return this.currentValue;
  }
}

module.exports = Calculator;