/*
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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
 * Enum class AddressTypeEnum.
 * @enum {String}
 * @readonly
 */
const AddressTypeEnum = {
  /**
   * value: "Residential"
   * @const
   */
  residential: "Residential",

  /**
   * value: "Commercial"
   * @const
   */
  commercial: "Commercial",

  /**
   * Returns a <code>AddressTypeEnum</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:shipmentInvoicingV0/js-client.shipmentInvoicingV0.model/AddressTypeEnum} The enum <code>AddressTypeEnum</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {AddressTypeEnum};
