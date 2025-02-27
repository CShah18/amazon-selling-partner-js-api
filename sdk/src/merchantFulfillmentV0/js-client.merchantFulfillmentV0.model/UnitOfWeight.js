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
 * Enum class UnitOfWeight.
 * @enum {String}
 * @readonly
 */
const UnitOfWeight = {
  /**
   * value: "oz"
   * @const
   */
  oz: "oz",

  /**
   * value: "g"
   * @const
   */
  g: "g",

  /**
   * Returns a <code>UnitOfWeight</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/UnitOfWeight} The enum <code>UnitOfWeight</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {UnitOfWeight};
