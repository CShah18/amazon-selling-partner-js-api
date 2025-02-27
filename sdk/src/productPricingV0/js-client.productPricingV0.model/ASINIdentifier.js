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

/**
 * The ASINIdentifier model module.
 * @module productPricingV0/js-client.productPricingV0.model/ASINIdentifier
 * @version v0
 */
export class ASINIdentifier {
  /**
   * Constructs a new <code>ASINIdentifier</code>.
   * @alias module:productPricingV0/js-client.productPricingV0.model/ASINIdentifier
   * @class
   * @param marketplaceId {String} A marketplace identifier.
   * @param ASIN {String} The Amazon Standard Identification Number (ASIN) of the item.
   */
  constructor(marketplaceId, ASIN) {
    this.marketplaceId = marketplaceId;
    this.ASIN = ASIN;
  }

  /**
   * Constructs a <code>ASINIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/ASINIdentifier} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/ASINIdentifier} The populated <code>ASINIdentifier</code> instance.
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
      obj = obj || new ASINIdentifier();
      if (data.hasOwnProperty('MarketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['MarketplaceId'], 'String');
      if (data.hasOwnProperty('ASIN'))
        obj.ASIN = ApiClient.convertToType(data['ASIN'], 'String');
    }
    return obj;
  }
}

/**
 * A marketplace identifier.
 * @member {String} marketplaceId
 */
ASINIdentifier.prototype.marketplaceId = undefined;

/**
 * The Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} ASIN
 */
ASINIdentifier.prototype.ASIN = undefined;


