/*
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) for the differences in Easy Ship operations by marketplace.
 *
 * OpenAPI spec version: 2022-03-23
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
 * The URL model module.
 * @module easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/URL
 * @version 2022-03-23
 */
export class URL {
  /**
   * Constructs a new <code>URL</code>.
   * A pre-signed URL for the zip document containing the shipping labels and the documents enabled for your marketplace.
   * @alias module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/URL
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>URL</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/URL} obj Optional instance to populate.
   * @return {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/URL} The populated <code>URL</code> instance.
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
      obj = obj || new URL();
    }
    return obj;
  }
}

