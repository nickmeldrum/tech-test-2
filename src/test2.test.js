const task2 = require('src/task2')

describe('task2', () => {
  ;[
    { A: [6, 1, 4, 6, 3, 2, 7, 4], K: 3, L: 2, output: 24 },
    { A: [10, 19, 15], K: 2, L: 2, output: -1 },
  ].forEach(testData => {
    test(`test case with A: ${testData.A}`, () => {
      expect(task2(testData.A, testData.K, testData.L)).toEqual(testData.output)
    })
  })
})
