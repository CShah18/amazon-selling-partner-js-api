/*
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) for the differences in Easy Ship operations by marketplace.
 *
 * OpenAPI spec version: 2022-03-23
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
   * value: "Grams"
   * @const
   */
  grams: "Grams",

  /**
   * value: "G"
   * @const
   */
  G: "G",

  /**
   * Returns a <code>UnitOfWeight</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/UnitOfWeight} The enum <code>UnitOfWeight</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {UnitOfWeight};
