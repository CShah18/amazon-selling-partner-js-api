/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * OpenAPI spec version: 2024-05-09
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
 * Enum class DistributionPackageType.
 * @enum {String}
 * @readonly
 */
const DistributionPackageType = {
  /**
   * value: "CASE"
   * @const
   */
  CASE: "CASE",

  /**
   * value: "PALLET"
   * @const
   */
  PALLET: "PALLET",

  /**
   * Returns a <code>DistributionPackageType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:awd_2024-05-09/js-client.awd_2024-05-09.model/DistributionPackageType} The enum <code>DistributionPackageType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {DistributionPackageType};
