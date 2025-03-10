/*
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
import {LinkObject} from './LinkObject.js';

/**
 * The GetSchemaResponseLinks model module.
 * @module messaging/js-client.messaging.model/GetSchemaResponseLinks
 * @version v1
 */
export class GetSchemaResponseLinks {
  /**
   * Constructs a new <code>GetSchemaResponseLinks</code>.
   * The links response that is associated with the object.
   * @alias module:messaging/js-client.messaging.model/GetSchemaResponseLinks
   * @class
   * @param self {module:messaging/js-client.messaging.model/LinkObject} 
   */
  constructor(self) {
    this.self = self;
  }

  /**
   * Constructs a <code>GetSchemaResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:messaging/js-client.messaging.model/GetSchemaResponseLinks} obj Optional instance to populate.
   * @return {module:messaging/js-client.messaging.model/GetSchemaResponseLinks} The populated <code>GetSchemaResponseLinks</code> instance.
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
      obj = obj || new GetSchemaResponseLinks();
      if (data.hasOwnProperty('self'))
        obj.self = LinkObject.constructFromObject(data['self']);
    }
    return obj;
  }
}

/**
 * @member {module:messaging/js-client.messaging.model/LinkObject} self
 */
GetSchemaResponseLinks.prototype.self = undefined;


