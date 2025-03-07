/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-05-01
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
import {MoneyType} from './MoneyType.js';

/**
 * The Points model module.
 * @module productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/Points
 * @version 2022-05-01
 */
export class Points {
  /**
   * Constructs a new <code>Points</code>.
   * The number of Amazon Points that are offered with the purchase of an item and the monetary value of these points.
   * @alias module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/Points
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Points</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/Points} obj Optional instance to populate.
   * @return {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/Points} The populated <code>Points</code> instance.
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
      obj = obj || new Points();
      if (data.hasOwnProperty('pointsNumber'))
        obj.pointsNumber = ApiClient.convertToType(data['pointsNumber'], 'Number');
      if (data.hasOwnProperty('pointsMonetaryValue'))
        obj.pointsMonetaryValue = MoneyType.constructFromObject(data['pointsMonetaryValue']);
    }
    return obj;
  }
}

/**
 * The number of Amazon Points.
 * @member {Number} pointsNumber
 */
Points.prototype.pointsNumber = undefined;

/**
 * The monetary value of the Amazon Points.
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MoneyType} pointsMonetaryValue
 */
Points.prototype.pointsMonetaryValue = undefined;


