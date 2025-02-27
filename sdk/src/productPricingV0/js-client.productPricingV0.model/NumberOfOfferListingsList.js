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
import {OfferListingCountType} from './OfferListingCountType.js';

/**
 * The NumberOfOfferListingsList model module.
 * @module productPricingV0/js-client.productPricingV0.model/NumberOfOfferListingsList
 * @version v0
 */
export class NumberOfOfferListingsList extends Array {
  /**
   * Constructs a new <code>NumberOfOfferListingsList</code>.
   * The number of active offer listings for the item that was submitted. The listing count is returned by condition, one for each listing condition value that is returned.
   * @alias module:productPricingV0/js-client.productPricingV0.model/NumberOfOfferListingsList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>NumberOfOfferListingsList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/NumberOfOfferListingsList} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/NumberOfOfferListingsList} The populated <code>NumberOfOfferListingsList</code> instance.
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
      obj = obj || new NumberOfOfferListingsList();
      ApiClient.constructFromObject(data, obj, 'OfferListingCountType');
    }
    return obj;
  }
}

