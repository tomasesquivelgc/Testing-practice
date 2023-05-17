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
    if (number === 0  || !Number.isInteger(number)){
      return;
    }
    this.currentValue /= number;
    return this.currentValue;
  }
 
  multiply(number) {
    if (!Number.isInteger(number)) {
      return;
    }else if (number===0){
      return 0;
    }
    this.currentValue *= number;
    return this.currentValue;

  }
}

module.exports = Calculator;