'use strict'

const Policy = require('trails-policy')

/**
 * @module AnalyticsPolicy
 * @description Send page event to analytics
 */
module.exports = class AnalyticsPolicy extends Policy {
  sendPage(request, reply){
    this.app.services.AnalyticsService.sendPage(request.path, null, this.app.config.web.host)
    reply()
  }
}

