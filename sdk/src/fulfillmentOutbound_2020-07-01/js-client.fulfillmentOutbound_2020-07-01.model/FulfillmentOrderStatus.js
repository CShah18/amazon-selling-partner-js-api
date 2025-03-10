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
 * Enum class FulfillmentOrderStatus.
 * @enum {String}
 * @readonly
 */
const FulfillmentOrderStatus = {
  /**
   * value: "New"
   * @const
   */
  _new: "New",

  /**
   * value: "Received"
   * @const
   */
  received: "Received",

  /**
   * value: "Planning"
   * @const
   */
  planning: "Planning",

  /**
   * value: "Processing"
   * @const
   */
  processing: "Processing",

  /**
   * value: "Cancelled"
   * @const
   */
  cancelled: "Cancelled",

  /**
   * value: "Complete"
   * @const
   */
  complete: "Complete",

  /**
   * value: "CompletePartialled"
   * @const
   */
  completePartialled: "CompletePartialled",

  /**
   * value: "Unfulfillable"
   * @const
   */
  unfulfillable: "Unfulfillable",

  /**
   * value: "Invalid"
   * @const
   */
  invalid: "Invalid",

  /**
   * Returns a <code>FulfillmentOrderStatus</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentOrderStatus} The enum <code>FulfillmentOrderStatus</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {FulfillmentOrderStatus};
