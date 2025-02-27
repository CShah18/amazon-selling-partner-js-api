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
 * Enum class ShipmentStatus.
 * @enum {String}
 * @readonly
 */
const ShipmentStatus = {
  /**
   * value: "Purchased"
   * @const
   */
  purchased: "Purchased",

  /**
   * value: "RefundPending"
   * @const
   */
  refundPending: "RefundPending",

  /**
   * value: "RefundRejected"
   * @const
   */
  refundRejected: "RefundRejected",

  /**
   * value: "RefundApplied"
   * @const
   */
  refundApplied: "RefundApplied",

  /**
   * Returns a <code>ShipmentStatus</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentStatus} The enum <code>ShipmentStatus</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ShipmentStatus};
