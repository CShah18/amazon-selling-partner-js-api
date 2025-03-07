/*
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * OpenAPI spec version: 2024-06-19
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
 * Enum class FileFormat.
 * @enum {String}
 * @readonly
 */
const FileFormat = {
  /**
   * value: "XML"
   * @const
   */
  XML: "XML",

  /**
   * Returns a <code>FileFormat</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/FileFormat} The enum <code>FileFormat</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {FileFormat};
