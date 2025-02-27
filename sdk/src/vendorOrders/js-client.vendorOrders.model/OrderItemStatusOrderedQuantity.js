/*
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
import {ItemQuantity} from './ItemQuantity.js';
import {OrderedQuantityDetails} from './OrderedQuantityDetails.js';

/**
 * The OrderItemStatusOrderedQuantity model module.
 * @module vendorOrders/js-client.vendorOrders.model/OrderItemStatusOrderedQuantity
 * @version v1
 */
export class OrderItemStatusOrderedQuantity {
  /**
   * Constructs a new <code>OrderItemStatusOrderedQuantity</code>.
   * Ordered quantity information.
   * @alias module:vendorOrders/js-client.vendorOrders.model/OrderItemStatusOrderedQuantity
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrderItemStatusOrderedQuantity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorOrders/js-client.vendorOrders.model/OrderItemStatusOrderedQuantity} obj Optional instance to populate.
   * @return {module:vendorOrders/js-client.vendorOrders.model/OrderItemStatusOrderedQuantity} The populated <code>OrderItemStatusOrderedQuantity</code> instance.
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
      obj = obj || new OrderItemStatusOrderedQuantity();
      if (data.hasOwnProperty('orderedQuantity'))
        obj.orderedQuantity = ItemQuantity.constructFromObject(data['orderedQuantity']);
      if (data.hasOwnProperty('orderedQuantityDetails'))
        obj.orderedQuantityDetails = ApiClient.convertToType(data['orderedQuantityDetails'], [OrderedQuantityDetails]);
    }
    return obj;
  }
}

/**
 * Item quantity ordered.
 * @member {module:vendorOrders/js-client.vendorOrders.model/ItemQuantity} orderedQuantity
 */
OrderItemStatusOrderedQuantity.prototype.orderedQuantity = undefined;

/**
 * Details of item quantity ordered.
 * @member {Array.<module:vendorOrders/js-client.vendorOrders.model/OrderedQuantityDetails>} orderedQuantityDetails
 */
OrderItemStatusOrderedQuantity.prototype.orderedQuantityDetails = undefined;


