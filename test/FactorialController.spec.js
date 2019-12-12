import { FactorialController } from '../app/js/FactorialController'

describe('FactorialController.js', () => {
  let controller

  // Set up document body
  document.body.innerHTML =
    `<form action="">
      <input type="text" id="number">
      <button type="submit">Calculate</button>
      <span id="result">0</span>
    </form>`

  beforeEach(() => {
    controller = new FactorialController()
  })

  it('should show the result on the HTML element', () => {
    // GIVEN
    const result = 2

    // AND
    const htmlElement = document.getElementById('result')

    // WHEN
    controller.showResult(result)

    // THEN
    expect(htmlElement.textContent).toBe('2')
  })

  it('should get a value from input as a number', () => {
    // GIVEN
    document.getElementById('number').value = '2'

    // WHEN
    const number = controller.getNumber()

    // THEN
    expect(number).toBe(2)
  })
})
