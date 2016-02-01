/* global describe, it */
const assert = require('assert')

describe('Analytics', () => {
  it('should exist', () => {
    assert(global.app.api.policies['Analytics'])
  })
})
