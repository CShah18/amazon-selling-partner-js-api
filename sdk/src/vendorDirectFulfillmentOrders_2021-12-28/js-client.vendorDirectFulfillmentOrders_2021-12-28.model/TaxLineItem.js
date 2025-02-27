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
import {TaxDetails} from './TaxDetails.js';

/**
 * The TaxLineItem model module.
 * @module vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/TaxLineItem
 * @version 2021-12-28
 */
export class TaxLineItem extends Array {
  /**
   * Constructs a new <code>TaxLineItem</code>.
   * A list of tax line items.
   * @alias module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/TaxLineItem
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>TaxLineItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/TaxLineItem} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/TaxLineItem} The populated <code>TaxLineItem</code> instance.
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
      obj = obj || new TaxLineItem();
      ApiClient.constructFromObject(data, obj, 'TaxDetails');
    }
    return obj;
  }
}

