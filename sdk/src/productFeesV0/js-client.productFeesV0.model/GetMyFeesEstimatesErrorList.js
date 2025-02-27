/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
import {Error} from './Error.js';

/**
 * The GetMyFeesEstimatesErrorList model module.
 * @module productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimatesErrorList
 * @version v0
 */
export class GetMyFeesEstimatesErrorList {
  /**
   * Constructs a new <code>GetMyFeesEstimatesErrorList</code>.
   * A list of error responses returned when a request is unsuccessful.
   * @alias module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimatesErrorList
   * @class
   * @param errors {Array.<module:productFeesV0/js-client.productFeesV0.model/Error>} 
   */
  constructor(errors) {
    this.errors = errors;
  }

  /**
   * Constructs a <code>GetMyFeesEstimatesErrorList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimatesErrorList} obj Optional instance to populate.
   * @return {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimatesErrorList} The populated <code>GetMyFeesEstimatesErrorList</code> instance.
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
      obj = obj || new GetMyFeesEstimatesErrorList();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:productFeesV0/js-client.productFeesV0.model/Error>} errors
 */
GetMyFeesEstimatesErrorList.prototype.errors = undefined;


