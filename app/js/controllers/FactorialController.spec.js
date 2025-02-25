import { describe, it, expect, beforeEach } from 'vitest'
import { FactorialController } from './FactorialController'

describe('FactorialController.js', () => {
  let controller

  // Set up document body
  document.body.innerHTML = `
    <form action="">
      <input type="text" id="number">
      <button type="submit">Calculate</button>
      <span id="result">0</span>
    </form>
  `

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

  it('should calculate factorial from a given number', () => {
    // GIVEN
    document.getElementById('number').value = '5'

    // AND
    const button = document.querySelector('button')
    const htmlElement = document.getElementById('result')

    // WHEN
    button.click()

    // THEN
    expect(htmlElement.textContent).toBe('120')
  })

  it('should have zero as a default value showing result', () => {
    // GIVEN
    const htmlElement = document.getElementById('result')

    // WHEN
    controller.showResult()

    // THEN
    expect(htmlElement.textContent).toBe('0')
  })
})
