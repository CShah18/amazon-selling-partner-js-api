/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
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
import {DiscountFunding} from './DiscountFunding.js';

/**
 * The Promotion model module.
 * @module replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/Promotion
 * @version 2022-11-07
 */
export class Promotion {
  /**
   * Constructs a new <code>Promotion</code>.
   * Offer promotions to include in the result filter criteria.
   * @alias module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/Promotion
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Promotion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/Promotion} obj Optional instance to populate.
   * @return {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/Promotion} The populated <code>Promotion</code> instance.
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
      obj = obj || new Promotion();
      if (data.hasOwnProperty('sellingPartnerFundedBaseDiscount'))
        obj.sellingPartnerFundedBaseDiscount = DiscountFunding.constructFromObject(data['sellingPartnerFundedBaseDiscount']);
      if (data.hasOwnProperty('sellingPartnerFundedTieredDiscount'))
        obj.sellingPartnerFundedTieredDiscount = DiscountFunding.constructFromObject(data['sellingPartnerFundedTieredDiscount']);
      if (data.hasOwnProperty('amazonFundedBaseDiscount'))
        obj.amazonFundedBaseDiscount = DiscountFunding.constructFromObject(data['amazonFundedBaseDiscount']);
      if (data.hasOwnProperty('amazonFundedTieredDiscount'))
        obj.amazonFundedTieredDiscount = DiscountFunding.constructFromObject(data['amazonFundedTieredDiscount']);
    }
    return obj;
  }
}

/**
 * A base discount set by the selling partner on the offer.
 * @member {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/DiscountFunding} sellingPartnerFundedBaseDiscount
 */
Promotion.prototype.sellingPartnerFundedBaseDiscount = undefined;

/**
 * A tiered discount set by the selling partner on the offer.
 * @member {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/DiscountFunding} sellingPartnerFundedTieredDiscount
 */
Promotion.prototype.sellingPartnerFundedTieredDiscount = undefined;

/**
 * A base discount set by Amazon on the offer.
 * @member {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/DiscountFunding} amazonFundedBaseDiscount
 */
Promotion.prototype.amazonFundedBaseDiscount = undefined;

/**
 * A tiered discount set by Amazon on the offer.
 * @member {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/DiscountFunding} amazonFundedTieredDiscount
 */
Promotion.prototype.amazonFundedTieredDiscount = undefined;


