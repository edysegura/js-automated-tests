'use strict'

describe('FactorialController.js', () => {
  beforeEach(() => {
    fixture.base = 'test/fixtures'
    fixture.load('factorial.html')
  })

  it('should calculate factorial from a given number', function() {
    // GIVEN
    new FactorialController()

    // AND
    document.getElementById('number').value = 5

    // WHEN
    document.getElementById('btnCalculate').click()

    // THEN
    expect(document.getElementById('result').textContent).toBe('120')
  })
})
