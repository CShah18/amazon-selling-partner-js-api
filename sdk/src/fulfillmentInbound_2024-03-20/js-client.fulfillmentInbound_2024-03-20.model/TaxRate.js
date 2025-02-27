/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
 * The TaxRate model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/TaxRate
 * @version 2024-03-20
 */
export class TaxRate {
  /**
   * Constructs a new <code>TaxRate</code>.
   * Contains the type and rate of tax.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/TaxRate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaxRate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/TaxRate} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/TaxRate} The populated <code>TaxRate</code> instance.
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
      obj = obj || new TaxRate();
      if (data.hasOwnProperty('cessRate'))
        obj.cessRate = ApiClient.convertToType(data['cessRate'], 'Number');
      if (data.hasOwnProperty('gstRate'))
        obj.gstRate = ApiClient.convertToType(data['gstRate'], 'Number');
      if (data.hasOwnProperty('taxType'))
        obj.taxType = ApiClient.convertToType(data['taxType'], 'String');
    }
    return obj;
  }
}

/**
 * Rate of cess tax.
 * @member {Number} cessRate
 */
TaxRate.prototype.cessRate = undefined;

/**
 * Rate of gst tax.
 * @member {Number} gstRate
 */
TaxRate.prototype.gstRate = undefined;

/**
 * Type of tax. Possible values: `CGST`, `SGST`, `IGST`, `TOTAL_TAX`.
 * @member {String} taxType
 */
TaxRate.prototype.taxType = undefined;


