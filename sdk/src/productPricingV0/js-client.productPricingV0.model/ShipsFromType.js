/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
 * The ShipsFromType model module.
 * @module productPricingV0/js-client.productPricingV0.model/ShipsFromType
 * @version v0
 */
export class ShipsFromType {
  /**
   * Constructs a new <code>ShipsFromType</code>.
   * The state and country from where the item is shipped.
   * @alias module:productPricingV0/js-client.productPricingV0.model/ShipsFromType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShipsFromType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/ShipsFromType} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/ShipsFromType} The populated <code>ShipsFromType</code> instance.
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
      obj = obj || new ShipsFromType();
      if (data.hasOwnProperty('State'))
        obj.state = ApiClient.convertToType(data['State'], 'String');
      if (data.hasOwnProperty('Country'))
        obj.country = ApiClient.convertToType(data['Country'], 'String');
    }
    return obj;
  }
}

/**
 * The state from where the item is shipped.
 * @member {String} state
 */
ShipsFromType.prototype.state = undefined;

/**
 * The country from where the item is shipped.
 * @member {String} country
 */
ShipsFromType.prototype.country = undefined;


