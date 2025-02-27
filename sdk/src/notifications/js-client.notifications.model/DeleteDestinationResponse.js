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
import {ErrorList} from './ErrorList.js';

/**
 * The DeleteDestinationResponse model module.
 * @module notifications/js-client.notifications.model/DeleteDestinationResponse
 * @version v1
 */
export class DeleteDestinationResponse {
  /**
   * Constructs a new <code>DeleteDestinationResponse</code>.
   * The response schema for the `deleteDestination` operation.
   * @alias module:notifications/js-client.notifications.model/DeleteDestinationResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DeleteDestinationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:notifications/js-client.notifications.model/DeleteDestinationResponse} obj Optional instance to populate.
   * @return {module:notifications/js-client.notifications.model/DeleteDestinationResponse} The populated <code>DeleteDestinationResponse</code> instance.
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
      obj = obj || new DeleteDestinationResponse();
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * One or more unexpected errors occurred during the `deleteDestination` operation.
 * @member {module:notifications/js-client.notifications.model/ErrorList} errors
 */
DeleteDestinationResponse.prototype.errors = undefined;


