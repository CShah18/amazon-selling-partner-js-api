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
import {CustomerInvoice} from './CustomerInvoice.js';
import {ErrorList} from './ErrorList.js';

/**
 * The GetCustomerInvoiceResponse model module.
 * @module vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetCustomerInvoiceResponse
 * @version v1
 */
export class GetCustomerInvoiceResponse {
  /**
   * Constructs a new <code>GetCustomerInvoiceResponse</code>.
   * The response schema for the getCustomerInvoice operation.
   * @alias module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetCustomerInvoiceResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetCustomerInvoiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetCustomerInvoiceResponse} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetCustomerInvoiceResponse} The populated <code>GetCustomerInvoiceResponse</code> instance.
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
      obj = obj || new GetCustomerInvoiceResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = CustomerInvoice.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * The payload for the getCustomerInvoice operation.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/CustomerInvoice} payload
 */
GetCustomerInvoiceResponse.prototype.payload = undefined;

/**
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ErrorList} errors
 */
GetCustomerInvoiceResponse.prototype.errors = undefined;


