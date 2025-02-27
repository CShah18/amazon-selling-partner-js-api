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
 * The DateTime model module.
 * @module vendorInvoices/js-client.vendorInvoices.model/DateTime
 * @version v1
 */
export class DateTime {
  /**
   * Constructs a new <code>DateTime</code>.
   * Defines a date and time according to ISO8601.
   * @alias module:vendorInvoices/js-client.vendorInvoices.model/DateTime
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DateTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorInvoices/js-client.vendorInvoices.model/DateTime} obj Optional instance to populate.
   * @return {module:vendorInvoices/js-client.vendorInvoices.model/DateTime} The populated <code>DateTime</code> instance.
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
      obj = obj || new DateTime();
    }
    return obj;
  }
}

