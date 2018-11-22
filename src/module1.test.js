const module1 = require('./module1')

describe('module1', () => {
  test('outputs hello worlds', () => {
    expect(module1()).toEqual('hello worlds')
  })
})
