/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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
import {ExcludedBenefits} from './ExcludedBenefits.js';
import {IncludedBenefits} from './IncludedBenefits.js';

/**
 * The Benefits model module.
 * @module shippingV2/js-client.shippingV2.model/Benefits
 * @version v2
 */
export class Benefits {
  /**
   * Constructs a new <code>Benefits</code>.
   * Representing the included/excluded benefits that we offer for each ShippingOffering/Rate. Benefits being services provided by Amazon when sellers purchase shipping through Amazon.
   * @alias module:shippingV2/js-client.shippingV2.model/Benefits
   * @class
   * @param includedBenefits {module:shippingV2/js-client.shippingV2.model/IncludedBenefits} 
   * @param excludedBenefits {module:shippingV2/js-client.shippingV2.model/ExcludedBenefits} 
   */
  constructor(includedBenefits, excludedBenefits) {
    this.includedBenefits = includedBenefits;
    this.excludedBenefits = excludedBenefits;
  }

  /**
   * Constructs a <code>Benefits</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/Benefits} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/Benefits} The populated <code>Benefits</code> instance.
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
      obj = obj || new Benefits();
      if (data.hasOwnProperty('includedBenefits'))
        obj.includedBenefits = IncludedBenefits.constructFromObject(data['includedBenefits']);
      if (data.hasOwnProperty('excludedBenefits'))
        obj.excludedBenefits = ExcludedBenefits.constructFromObject(data['excludedBenefits']);
    }
    return obj;
  }
}

/**
 * @member {module:shippingV2/js-client.shippingV2.model/IncludedBenefits} includedBenefits
 */
Benefits.prototype.includedBenefits = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/ExcludedBenefits} excludedBenefits
 */
Benefits.prototype.excludedBenefits = undefined;


