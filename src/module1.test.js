const module1 = require('src/module1')

describe('module1', () => {
  ;[
    { input: '00-44  48 5555 8361', output: '004-448-555-583-61' },
    { input: '0 - 22 1985--324', output: '022-198-53-24' },
    { input: '555372654', output: '555-372-654' },
  ].forEach(testData => {
    test('outputs hello worlds', () => {
      expect(module1(testData.input)).toEqual(testData.output)
    })
  })
})
