/*
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {EventFilter} from './EventFilter.js';

/**
 * The ProcessingDirective model module.
 * @module notifications/js-client.notifications.model/ProcessingDirective
 * @version v1
 */
export class ProcessingDirective {
  /**
   * Constructs a new <code>ProcessingDirective</code>.
   * Additional information passed to the subscription to control the processing of notifications. For example, you can use an `eventFilter` to customize your subscription to send notifications for only the specified `marketplaceId`s, or select the aggregation time period at which to send notifications (for example: limit to one notification every five minutes for high frequency notifications). The specific features available vary depending on the `notificationType`.  This feature is currently only supported by the `ANY_OFFER_CHANGED` and `ORDER_CHANGE` `notificationType`s.
   * @alias module:notifications/js-client.notifications.model/ProcessingDirective
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProcessingDirective</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:notifications/js-client.notifications.model/ProcessingDirective} obj Optional instance to populate.
   * @return {module:notifications/js-client.notifications.model/ProcessingDirective} The populated <code>ProcessingDirective</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new ProcessingDirective();
      if (data.hasOwnProperty('eventFilter'))
        obj.eventFilter = EventFilter.constructFromObject(data['eventFilter']);
    }
    return obj;
  }
}

/**
 * A `notificationType` specific filter.
 * @member {module:notifications/js-client.notifications.model/EventFilter} eventFilter
 */
ProcessingDirective.prototype.eventFilter = undefined;


