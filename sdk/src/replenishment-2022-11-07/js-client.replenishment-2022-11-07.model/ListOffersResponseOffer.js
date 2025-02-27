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
import {EligibilityStatus} from './EligibilityStatus.js';
import {MarketplaceId} from './MarketplaceId.js';
import {OfferProgramConfiguration} from './OfferProgramConfiguration.js';
import {ProgramType} from './ProgramType.js';

/**
 * The ListOffersResponseOffer model module.
 * @module replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/ListOffersResponseOffer
 * @version 2022-11-07
 */
export class ListOffersResponseOffer {
  /**
   * Constructs a new <code>ListOffersResponseOffer</code>.
   * An object which contains details about an offer.
   * @alias module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/ListOffersResponseOffer
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ListOffersResponseOffer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/ListOffersResponseOffer} obj Optional instance to populate.
   * @return {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/ListOffersResponseOffer} The populated <code>ListOffersResponseOffer</code> instance.
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
      obj = obj || new ListOffersResponseOffer();
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
      if (data.hasOwnProperty('asin'))
        obj.asin = ApiClient.convertToType(data['asin'], 'String');
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = MarketplaceId.constructFromObject(data['marketplaceId']);
      if (data.hasOwnProperty('eligibility'))
        obj.eligibility = EligibilityStatus.constructFromObject(data['eligibility']);
      if (data.hasOwnProperty('offerProgramConfiguration'))
        obj.offerProgramConfiguration = OfferProgramConfiguration.constructFromObject(data['offerProgramConfiguration']);
      if (data.hasOwnProperty('programType'))
        obj.programType = ProgramType.constructFromObject(data['programType']);
      if (data.hasOwnProperty('vendorCodes'))
        obj.vendorCodes = ApiClient.convertToType(data['vendorCodes'], ['String']);
    }
    return obj;
  }
}

/**
 * The SKU. This property is only supported for sellers and not for vendors.
 * @member {String} sku
 */
ListOffersResponseOffer.prototype.sku = undefined;

/**
 * The Amazon Standard Identification Number (ASIN).
 * @member {String} asin
 */
ListOffersResponseOffer.prototype.asin = undefined;

/**
 * The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace.
 * @member {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/MarketplaceId} marketplaceId
 */
ListOffersResponseOffer.prototype.marketplaceId = undefined;

/**
 * The offer eligibility status.
 * @member {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/EligibilityStatus} eligibility
 */
ListOffersResponseOffer.prototype.eligibility = undefined;

/**
 * @member {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/OfferProgramConfiguration} offerProgramConfiguration
 */
ListOffersResponseOffer.prototype.offerProgramConfiguration = undefined;

/**
 * The replenishment program for the offer.
 * @member {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/ProgramType} programType
 */
ListOffersResponseOffer.prototype.programType = undefined;

/**
 * A list of vendor codes associated with the offer.
 * @member {Array.<String>} vendorCodes
 */
ListOffersResponseOffer.prototype.vendorCodes = undefined;


