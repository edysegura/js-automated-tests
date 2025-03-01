import { describe, it, expect } from 'vitest'
import { FactorialService } from './FactorialService'

describe('FactorialService.js', () => {
  it('should calculate factorial from a given number', () => {
    expect(FactorialService.calculate(1)).toBe(1)
    expect(FactorialService.calculate(2)).toBe(2)
    expect(FactorialService.calculate(3)).toBe(6)
    expect(FactorialService.calculate(4)).toBe(24)
    expect(FactorialService.calculate(5)).toBe(120)
  })

  it('should return 1 (one) if the given number is 0 (zero)', () => {
    expect(FactorialService.calculate(0)).toBe(1)
  })

  it('should return undefined for given invalid params', () => {
    expect(FactorialService.calculate()).toBe(undefined)
    expect(FactorialService.calculate(-1)).toBe(undefined)
    expect(FactorialService.calculate('')).toBe(undefined)
    expect(FactorialService.calculate('1')).toBe(undefined)
  })
})
