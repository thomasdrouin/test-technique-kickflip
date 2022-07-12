import { sortNumbersInArray } from '../sortNumbersInArray'

describe('sortNumbersInArray', () => {
  describe('given an array with numbers', () => {
    const unsortedArray = [3, 2, 4, 5, 1]
    const sortedArray = [1, 2, 3, 4, 5]

    it('should return sorted array', () => {
      expect(sortNumbersInArray(unsortedArray)).toEqual(sortedArray)
    })
  })
})
