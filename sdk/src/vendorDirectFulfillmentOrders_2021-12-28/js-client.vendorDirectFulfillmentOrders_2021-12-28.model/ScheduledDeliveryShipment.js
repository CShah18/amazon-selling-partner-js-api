/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * OpenAPI spec version: 2021-12-28
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

/**
 * The ScheduledDeliveryShipment model module.
 * @module vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/ScheduledDeliveryShipment
 * @version 2021-12-28
 */
export class ScheduledDeliveryShipment {
  /**
   * Constructs a new <code>ScheduledDeliveryShipment</code>.
   * Dates for the scheduled delivery shipments.
   * @alias module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/ScheduledDeliveryShipment
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ScheduledDeliveryShipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/ScheduledDeliveryShipment} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/ScheduledDeliveryShipment} The populated <code>ScheduledDeliveryShipment</code> instance.
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
      obj = obj || new ScheduledDeliveryShipment();
      if (data.hasOwnProperty('scheduledDeliveryServiceType'))
        obj.scheduledDeliveryServiceType = ApiClient.convertToType(data['scheduledDeliveryServiceType'], 'String');
      if (data.hasOwnProperty('earliestNominatedDeliveryDate'))
        obj.earliestNominatedDeliveryDate = ApiClient.convertToType(data['earliestNominatedDeliveryDate'], 'Date');
      if (data.hasOwnProperty('latestNominatedDeliveryDate'))
        obj.latestNominatedDeliveryDate = ApiClient.convertToType(data['latestNominatedDeliveryDate'], 'Date');
    }
    return obj;
  }
}

/**
 * Scheduled delivery service type.
 * @member {String} scheduledDeliveryServiceType
 */
ScheduledDeliveryShipment.prototype.scheduledDeliveryServiceType = undefined;

/**
 * Earliest nominated delivery date for the scheduled delivery.
 * @member {Date} earliestNominatedDeliveryDate
 */
ScheduledDeliveryShipment.prototype.earliestNominatedDeliveryDate = undefined;

/**
 * Latest nominated delivery date for the scheduled delivery.
 * @member {Date} latestNominatedDeliveryDate
 */
ScheduledDeliveryShipment.prototype.latestNominatedDeliveryDate = undefined;


