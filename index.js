'use strict'

const Trailpack = require('trailpack')

module.exports = class AnalyticsTrailpack extends Trailpack {

  /**
   * Check config.analytics configuration
   */
  validate () {
    if (!this.app.config.analytics) {
      return Promise.reject(new Error('There no analytics.js under ./config, check it\'s load in ./config/index.js or create it !'))
    }

    if (this.app.config.analytics && (!this.app.config.analytics.accountID || this.app.config.analytics.accountID == 'UA-XXXX-XX')) {
      return Promise.reject(new Error('config.analytics.accountID need to be set !'))
    }

    return Promise.resolve()
  }

  /**
   * Initialise AnalyticsServices
   */
  configure () {
    return Promise.resolve()
  }

  /**
   *
   */
  initialize () {
    this.app.services.AnalyticsService.init()
    return Promise.resolve()
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

