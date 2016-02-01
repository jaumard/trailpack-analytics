'use strict'

const Policy = require('trails-policy')

/**
 * @module AnalyticsPolicy
 * @description Send page event to analytics
 */
module.exports = class AnalyticsPolicy extends Policy {
  sendPage(request, reply){
    reply()
  }
}

