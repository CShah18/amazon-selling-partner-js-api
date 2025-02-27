/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
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
 * Enum class InvalidItemReasonCode.
 * @enum {String}
 * @readonly
 */
const InvalidItemReasonCode = {
  /**
   * value: "InvalidValues"
   * @const
   */
  invalidValues: "InvalidValues",

  /**
   * value: "DuplicateRequest"
   * @const
   */
  duplicateRequest: "DuplicateRequest",

  /**
   * value: "NoCompletedShipItems"
   * @const
   */
  noCompletedShipItems: "NoCompletedShipItems",

  /**
   * value: "NoReturnableQuantity"
   * @const
   */
  noReturnableQuantity: "NoReturnableQuantity",

  /**
   * Returns a <code>InvalidItemReasonCode</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/InvalidItemReasonCode} The enum <code>InvalidItemReasonCode</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {InvalidItemReasonCode};
