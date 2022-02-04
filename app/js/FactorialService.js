export class FactorialService {
  static isValidNumber(number) {
    // prettier-ignore
    return number !== ''
      && typeof number !== 'string'
      && number > -1
  }

  static calculate(number) {
    if (FactorialService.isValidNumber(number)) {
      let result = 1
      for (let i = 1; i <= number; i++) {
        result = result * i
      }
      return result
    }
    return undefined
  }
}
