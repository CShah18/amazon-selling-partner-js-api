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

/**
 * The PrimeDetails model module.
 * @module productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/PrimeDetails
 * @version 2022-05-01
 */
export class PrimeDetails {
  /**
   * Constructs a new <code>PrimeDetails</code>.
   * Amazon Prime details.
   * @alias module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/PrimeDetails
   * @class
   * @param eligibility {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/PrimeDetails.EligibilityEnum} Indicates whether the offer is an Amazon Prime offer.
   */
  constructor(eligibility) {
    this.eligibility = eligibility;
  }

  /**
   * Constructs a <code>PrimeDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/PrimeDetails} obj Optional instance to populate.
   * @return {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/PrimeDetails} The populated <code>PrimeDetails</code> instance.
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
      obj = obj || new PrimeDetails();
      if (data.hasOwnProperty('eligibility'))
        obj.eligibility = ApiClient.convertToType(data['eligibility'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>eligibility</code> property.
 * @enum {String}
 * @readonly
 */
PrimeDetails.EligibilityEnum = {
  /**
   * value: "NATIONAL"
   * @const
   */
  NATIONAL: "NATIONAL",

  /**
   * value: "REGIONAL"
   * @const
   */
  REGIONAL: "REGIONAL",

  /**
   * value: "NONE"
   * @const
   */
  NONE: "NONE"
};

/**
 * Indicates whether the offer is an Amazon Prime offer.
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/PrimeDetails.EligibilityEnum} eligibility
 */
PrimeDetails.prototype.eligibility = undefined;


