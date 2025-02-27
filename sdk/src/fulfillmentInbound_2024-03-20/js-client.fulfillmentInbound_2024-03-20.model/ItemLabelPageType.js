/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
 * Enum class ItemLabelPageType.
 * @enum {String}
 * @readonly
 */
const ItemLabelPageType = {
  /**
   * value: "A4_21"
   * @const
   */
  a421: "A4_21",

  /**
   * value: "A4_24"
   * @const
   */
  a424: "A4_24",

  /**
   * value: "A4_24_64x33"
   * @const
   */
  a42464x33: "A4_24_64x33",

  /**
   * value: "A4_24_66x35"
   * @const
   */
  a42466x35: "A4_24_66x35",

  /**
   * value: "A4_24_70x36"
   * @const
   */
  a42470x36: "A4_24_70x36",

  /**
   * value: "A4_24_70x37"
   * @const
   */
  a42470x37: "A4_24_70x37",

  /**
   * value: "A4_24i"
   * @const
   */
  a424i: "A4_24i",

  /**
   * value: "A4_27"
   * @const
   */
  a427: "A4_27",

  /**
   * value: "A4_40_52x29"
   * @const
   */
  a44052x29: "A4_40_52x29",

  /**
   * value: "A4_44_48x25"
   * @const
   */
  a44448x25: "A4_44_48x25",

  /**
   * value: "Letter_30"
   * @const
   */
  letter30: "Letter_30",

  /**
   * Returns a <code>ItemLabelPageType</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ItemLabelPageType} The enum <code>ItemLabelPageType</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ItemLabelPageType};
