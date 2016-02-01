'use strict'
const _ = require('lodash')
const smokesignals = require('smokesignals')

const Api = require('./api')

const App = {
  pkg: {
    name: 'analytics-trailpack-test',
    version: '1.0.0'
  },
  api: Api,
  analytics: {
    accountID: 'UA-XXXX-XX'
  },
  config: {
    main: {
      packs: [
        smokesignals.Trailpack,
        require('trailpack-core'),
        require('trailpack-router'),
        require('trailpack-hapi'),
        require('../') // trailpack
      ]
    },
    routes: [
      {
        method: ['GET'],
        path: '/default/info',
        handler: 'DefaultController.info'
      }
    ],
    web: {port: 3000}
  }
}

_.defaultsDeep(App, smokesignals.FailsafeConfig)
module.exports = App
