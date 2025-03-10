/*
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * OpenAPI spec version: v0
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
import {LabelFormatOption} from './LabelFormatOption.js';

/**
 * The AvailableFormatOptionsForLabel model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableFormatOptionsForLabel
 * @version v0
 */
export class AvailableFormatOptionsForLabel extends Array {
  /**
   * Constructs a new <code>AvailableFormatOptionsForLabel</code>.
   * The available label formats.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableFormatOptionsForLabel
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AvailableFormatOptionsForLabel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableFormatOptionsForLabel} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableFormatOptionsForLabel} The populated <code>AvailableFormatOptionsForLabel</code> instance.
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
      obj = obj || new AvailableFormatOptionsForLabel();
      ApiClient.constructFromObject(data, obj, 'LabelFormatOption');
    }
    return obj;
  }
}

