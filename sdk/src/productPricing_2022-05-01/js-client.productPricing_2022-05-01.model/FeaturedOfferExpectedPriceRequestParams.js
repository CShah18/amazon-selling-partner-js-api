/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-05-01
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
import {MarketplaceId} from './MarketplaceId.js';
import {Segment} from './Segment.js';
import {Sku} from './Sku.js';

/**
 * The FeaturedOfferExpectedPriceRequestParams model module.
 * @module productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferExpectedPriceRequestParams
 * @version 2022-05-01
 */
export class FeaturedOfferExpectedPriceRequestParams {
  /**
   * Constructs a new <code>FeaturedOfferExpectedPriceRequestParams</code>.
   * The parameters for an individual request.
   * @alias module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferExpectedPriceRequestParams
   * @class
   * @param marketplaceId {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MarketplaceId} 
   * @param sku {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/Sku} 
   */
  constructor(marketplaceId, sku) {
    this.marketplaceId = marketplaceId;
    this.sku = sku;
  }

  /**
   * Constructs a <code>FeaturedOfferExpectedPriceRequestParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferExpectedPriceRequestParams} obj Optional instance to populate.
   * @return {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferExpectedPriceRequestParams} The populated <code>FeaturedOfferExpectedPriceRequestParams</code> instance.
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
      obj = obj || new FeaturedOfferExpectedPriceRequestParams();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = MarketplaceId.constructFromObject(data['marketplaceId']);
      if (data.hasOwnProperty('sku'))
        obj.sku = Sku.constructFromObject(data['sku']);
      if (data.hasOwnProperty('segment'))
        obj.segment = Segment.constructFromObject(data['segment']);
    }
    return obj;
  }
}

/**
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MarketplaceId} marketplaceId
 */
FeaturedOfferExpectedPriceRequestParams.prototype.marketplaceId = undefined;

/**
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/Sku} sku
 */
FeaturedOfferExpectedPriceRequestParams.prototype.sku = undefined;

/**
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/Segment} segment
 */
FeaturedOfferExpectedPriceRequestParams.prototype.segment = undefined;


