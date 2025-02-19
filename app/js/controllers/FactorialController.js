import { FactorialService } from '../services/FactorialService.js'

export class FactorialController {
  constructor() {
    this.listenButtonClick()
  }

  showResult(result = 0) {
    let span = document.getElementById('result')
    span.textContent = result
  }

  getNumber() {
    let inputNumber = document.getElementById('number')
    return +inputNumber.value
  }

  clickHandler(event) {
    event.preventDefault()
    let result = FactorialService.calculate(this.getNumber())
    this.showResult(result)
  }

  listenButtonClick() {
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => this.clickHandler(event))
  }
}
