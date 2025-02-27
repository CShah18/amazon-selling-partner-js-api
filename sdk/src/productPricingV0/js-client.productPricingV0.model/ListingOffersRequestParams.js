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
import {BatchOffersRequestParams} from './BatchOffersRequestParams.js';
import {CustomerType} from './CustomerType.js';
import {ItemCondition} from './ItemCondition.js';
import {MarketplaceId} from './MarketplaceId.js';

/**
 * The ListingOffersRequestParams model module.
 * @module productPricingV0/js-client.productPricingV0.model/ListingOffersRequestParams
 * @version v0
 */
export class ListingOffersRequestParams extends BatchOffersRequestParams {
  /**
   * Constructs a new <code>ListingOffersRequestParams</code>.
   * @alias module:productPricingV0/js-client.productPricingV0.model/ListingOffersRequestParams
   * @class
   * @extends module:productPricingV0/js-client.productPricingV0.model/BatchOffersRequestParams
   * @param marketplaceId {module:productPricingV0/js-client.productPricingV0.model/MarketplaceId} 
   * @param itemCondition {module:productPricingV0/js-client.productPricingV0.model/ItemCondition} Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
   * @param sellerSKU {String} The seller stock keeping unit (SKU) of the item. This is the same SKU passed as a path parameter.
   */
  constructor(marketplaceId, itemCondition, sellerSKU) {
    super(marketplaceId, itemCondition);
    this.sellerSKU = sellerSKU;
  }

  /**
   * Constructs a <code>ListingOffersRequestParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/ListingOffersRequestParams} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/ListingOffersRequestParams} The populated <code>ListingOffersRequestParams</code> instance.
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
      obj = obj || new ListingOffersRequestParams();
      BatchOffersRequestParams.constructFromObject(data, obj);
      if (data.hasOwnProperty('SellerSKU'))
        obj.sellerSKU = ApiClient.convertToType(data['SellerSKU'], 'String');
    }
    return obj;
  }
}

/**
 * The seller stock keeping unit (SKU) of the item. This is the same SKU passed as a path parameter.
 * @member {String} sellerSKU
 */
ListingOffersRequestParams.prototype.sellerSKU = undefined;


