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
import {MoneyType} from './MoneyType.js';
import {Points} from './Points.js';

/**
 * The FeaturedOfferExpectedPrice model module.
 * @module productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferExpectedPrice
 * @version 2022-05-01
 */
export class FeaturedOfferExpectedPrice {
  /**
   * Constructs a new <code>FeaturedOfferExpectedPrice</code>.
   * The item price at or below which the target offer may be featured.
   * @alias module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferExpectedPrice
   * @class
   * @param listingPrice {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MoneyType} A computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions).
   */
  constructor(listingPrice) {
    this.listingPrice = listingPrice;
  }

  /**
   * Constructs a <code>FeaturedOfferExpectedPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferExpectedPrice} obj Optional instance to populate.
   * @return {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/FeaturedOfferExpectedPrice} The populated <code>FeaturedOfferExpectedPrice</code> instance.
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
      obj = obj || new FeaturedOfferExpectedPrice();
      if (data.hasOwnProperty('listingPrice'))
        obj.listingPrice = MoneyType.constructFromObject(data['listingPrice']);
      if (data.hasOwnProperty('points'))
        obj.points = Points.constructFromObject(data['points']);
    }
    return obj;
  }
}

/**
 * A computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions).
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MoneyType} listingPrice
 */
FeaturedOfferExpectedPrice.prototype.listingPrice = undefined;

/**
 * The number of Amazon Points that are offered with the purchase of an item and the monetary value of these points.
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/Points} points
 */
FeaturedOfferExpectedPrice.prototype.points = undefined;


