import sum from './sum'
import { test, expect } from 'vitest'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(4, 5)).toBe(9)
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(4, 5)).toBe(9)
})
