/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
 *
 * OpenAPI spec version: v1
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
import {ServiceRate} from './ServiceRate.js';

/**
 * The ServiceRateList model module.
 * @module shipping/js-client.shipping.model/ServiceRateList
 * @version v1
 */
export class ServiceRateList extends Array {
  /**
   * Constructs a new <code>ServiceRateList</code>.
   * A list of service rates.
   * @alias module:shipping/js-client.shipping.model/ServiceRateList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ServiceRateList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping/js-client.shipping.model/ServiceRateList} obj Optional instance to populate.
   * @return {module:shipping/js-client.shipping.model/ServiceRateList} The populated <code>ServiceRateList</code> instance.
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
      obj = obj || new ServiceRateList();
      ApiClient.constructFromObject(data, obj, 'ServiceRate');
    }
    return obj;
  }
}

