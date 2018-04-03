const module1 = require('./index')

describe('module1', () => {
  it('outputs hello worlds', () => {
    expect(module1()).toEqual('hello worlds')
  })
})
