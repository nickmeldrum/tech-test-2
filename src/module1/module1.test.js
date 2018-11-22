const module1 = require('./index')

describe('module1', () => {
  test('outputs hello worlds', () => {
    expect(module1()).toEqual('hello worlds')
  })
})
