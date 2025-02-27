/*
 * Vendor Invoices v1
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
 * The Decimal model module.
 * @module vendorInvoices/js-client.vendorInvoices.model/Decimal
 * @version v1
 */
export class Decimal {
  /**
   * Constructs a new <code>Decimal</code>.
   * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
   * @alias module:vendorInvoices/js-client.vendorInvoices.model/Decimal
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Decimal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorInvoices/js-client.vendorInvoices.model/Decimal} obj Optional instance to populate.
   * @return {module:vendorInvoices/js-client.vendorInvoices.model/Decimal} The populated <code>Decimal</code> instance.
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
      obj = obj || new Decimal();
    }
    return obj;
  }
}

