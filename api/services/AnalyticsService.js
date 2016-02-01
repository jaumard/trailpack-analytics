'use strict'

const Service = require('trails-service')
const ua = require('universal-analytics')
const _ = require('lodash')

/**
 * @module AnalyticsService
 * @description Send pages, events to Google Analytics
 */
module.exports = class AnalyticsService extends Service {
  init () {
    this.visitor = ua(this.app.config.analytics.accountID)

  }

  sendPage(path, title, hostname) {
    let page = {dp: path, dt: title, dh: hostname}
    if (_.isObject(path)) {
      page = path
    }
    this.visitor.pageview(page).send()
    return this
  }

  sendEvent(eventCategorie, eventAction, label, value, path) {
    let event = {
      ec: eventCategorie,
      ea: eventAction,
      el: label,
      ev: value,
      dp: path
    }
    if (_.isObject(eventCategorie)) {
      event = eventCategorie
    }
    this.visitor.event(event).send()
  }
}

