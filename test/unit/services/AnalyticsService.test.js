'use strict'
/* global describe, it */
const assert = require('assert')
const supertest = require('supertest')

describe('AnalyticsService', () => {
  let request
  before(() => {
    request = supertest('http://localhost:3000')
  })
  it('should exist', () => {
    assert(global.app.api.services['AnalyticsService'])
  })

  it('should send a page event', (done) => {
    global.app.services['AnalyticsService'].sendPage('/path/test/ok', 'Test 1', 'demo.jaumard.com')
    global.app.services['AnalyticsService'].sendPage('/path/test/ko', 'Test 2', 'demo.jaumard.com')
    global.app.services['AnalyticsService'].sendPage('/path/toto/ok', 'Test 3', 'demo.jaumard.com')
    global.app.services['AnalyticsService'].sendPage('/path/toto/ko', 'Test 4', 'demo.jaumard.com')
    global.app.services['AnalyticsService'].sendEvent('Test', 'SendEvent', 'Test send event', 'value of the event', '/path/toto/ok')
    done()
    //assert(global.app.api.services['AnalyticsService'])
  })

  /*
  it('should return {app: \'1.0.0\'} on GET /default/info', (done) => {
    request
      .get('/default/info')
      .expect(200)
      .end((err, res) => {
        const data = res.body
        assert.deepEqual(data, {app: '1.0.0'})
        done(err)
      })
  })
  */
})
