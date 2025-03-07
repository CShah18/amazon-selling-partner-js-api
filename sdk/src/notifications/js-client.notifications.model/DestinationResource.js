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
import {EventBridgeResource} from './EventBridgeResource.js';
import {SqsResource} from './SqsResource.js';

/**
 * The DestinationResource model module.
 * @module notifications/js-client.notifications.model/DestinationResource
 * @version v1
 */
export class DestinationResource {
  /**
   * Constructs a new <code>DestinationResource</code>.
   * The destination resource types.
   * @alias module:notifications/js-client.notifications.model/DestinationResource
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DestinationResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:notifications/js-client.notifications.model/DestinationResource} obj Optional instance to populate.
   * @return {module:notifications/js-client.notifications.model/DestinationResource} The populated <code>DestinationResource</code> instance.
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
      obj = obj || new DestinationResource();
      if (data.hasOwnProperty('sqs'))
        obj.sqs = SqsResource.constructFromObject(data['sqs']);
      if (data.hasOwnProperty('eventBridge'))
        obj.eventBridge = EventBridgeResource.constructFromObject(data['eventBridge']);
    }
    return obj;
  }
}

/**
 * An Amazon Simple Queue Service (SQS) queue destination.
 * @member {module:notifications/js-client.notifications.model/SqsResource} sqs
 */
DestinationResource.prototype.sqs = undefined;

/**
 * An Amazon EventBridge destination.
 * @member {module:notifications/js-client.notifications.model/EventBridgeResource} eventBridge
 */
DestinationResource.prototype.eventBridge = undefined;


