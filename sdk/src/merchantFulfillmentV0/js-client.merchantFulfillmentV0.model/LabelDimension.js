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

/**
 * The LabelDimension model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelDimension
 * @version v0
 */
export class LabelDimension {
  /**
   * Constructs a new <code>LabelDimension</code>.
   * A label dimension.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelDimension
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LabelDimension</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelDimension} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelDimension} The populated <code>LabelDimension</code> instance.
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
      obj = obj || new LabelDimension();
    }
    return obj;
  }
}

