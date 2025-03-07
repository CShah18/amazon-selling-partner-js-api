/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
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
import {EventCode} from './EventCode.js';
import {Location} from './Location.js';

/**
 * The Event model module.
 * @module shipping/js-client.shipping.model/Event
 * @version v1
 */
export class Event {
  /**
   * Constructs a new <code>Event</code>.
   * An event of a shipment
   * @alias module:shipping/js-client.shipping.model/Event
   * @class
   * @param eventCode {module:shipping/js-client.shipping.model/EventCode} 
   * @param eventTime {Date} The date and time of an event for a shipment.
   */
  constructor(eventCode, eventTime) {
    this.eventCode = eventCode;
    this.eventTime = eventTime;
  }

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping/js-client.shipping.model/Event} obj Optional instance to populate.
   * @return {module:shipping/js-client.shipping.model/Event} The populated <code>Event</code> instance.
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
      obj = obj || new Event();
      if (data.hasOwnProperty('eventCode'))
        obj.eventCode = EventCode.constructFromObject(data['eventCode']);
      if (data.hasOwnProperty('eventTime'))
        obj.eventTime = ApiClient.convertToType(data['eventTime'], 'Date');
      if (data.hasOwnProperty('location'))
        obj.location = Location.constructFromObject(data['location']);
    }
    return obj;
  }
}

/**
 * @member {module:shipping/js-client.shipping.model/EventCode} eventCode
 */
Event.prototype.eventCode = undefined;

/**
 * The date and time of an event for a shipment.
 * @member {Date} eventTime
 */
Event.prototype.eventTime = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/Location} location
 */
Event.prototype.location = undefined;


