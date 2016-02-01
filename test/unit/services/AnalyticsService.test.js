/* global describe, it */
const assert = require('assert')

describe('AnalyticsService', () => {
  it('should exist', () => {
    assert(global.app.api.services['AnalyticsService'])
  })
})
