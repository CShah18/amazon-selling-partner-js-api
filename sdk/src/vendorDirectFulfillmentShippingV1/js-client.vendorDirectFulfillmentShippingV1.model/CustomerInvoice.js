/*
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
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

/**
 * The CustomerInvoice model module.
 * @module vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/CustomerInvoice
 * @version v1
 */
export class CustomerInvoice {
  /**
   * Constructs a new <code>CustomerInvoice</code>.
   * Represents a customer invoice associated with a purchase order.
   * @alias module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/CustomerInvoice
   * @class
   * @param purchaseOrderNumber {String} The purchase order number for this order.
   * @param content {String} The Base64encoded customer invoice.
   */
  constructor(purchaseOrderNumber, content) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.content = content;
  }

  /**
   * Constructs a <code>CustomerInvoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/CustomerInvoice} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/CustomerInvoice} The populated <code>CustomerInvoice</code> instance.
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
      obj = obj || new CustomerInvoice();
      if (data.hasOwnProperty('purchaseOrderNumber'))
        obj.purchaseOrderNumber = ApiClient.convertToType(data['purchaseOrderNumber'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
    }
    return obj;
  }
}

/**
 * The purchase order number for this order.
 * @member {String} purchaseOrderNumber
 */
CustomerInvoice.prototype.purchaseOrderNumber = undefined;

/**
 * The Base64encoded customer invoice.
 * @member {String} content
 */
CustomerInvoice.prototype.content = undefined;


