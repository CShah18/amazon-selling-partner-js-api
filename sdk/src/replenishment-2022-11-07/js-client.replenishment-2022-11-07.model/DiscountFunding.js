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

/**
 * The DiscountFunding model module.
 * @module replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/DiscountFunding
 * @version 2022-11-07
 */
export class DiscountFunding {
  /**
   * Constructs a new <code>DiscountFunding</code>.
   * The discount funding on the offer.
   * @alias module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/DiscountFunding
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DiscountFunding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/DiscountFunding} obj Optional instance to populate.
   * @return {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/DiscountFunding} The populated <code>DiscountFunding</code> instance.
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
      obj = obj || new DiscountFunding();
      if (data.hasOwnProperty('percentage'))
        obj.percentage = ApiClient.convertToType(data['percentage'], ['Number']);
    }
    return obj;
  }
}

/**
 * Filters the results to only include offers with the percentage specified.
 * @member {Array.<Number>} percentage
 */
DiscountFunding.prototype.percentage = undefined;


