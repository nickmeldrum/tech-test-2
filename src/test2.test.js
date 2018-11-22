const task2 = require('src/task2')

describe('task2', () => {
  ;[{ input: '00-44  48 5555 8361', output: '004-448-555-583-61' }].forEach(testData => {
    test(`test case with input: ${testData.input}`, () => {
      expect(task2(testData.input)).toEqual(testData.output)
    })
  })
})
