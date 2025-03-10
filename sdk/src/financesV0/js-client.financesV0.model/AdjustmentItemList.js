/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import {AdjustmentItem} from './AdjustmentItem.js';

/**
 * The AdjustmentItemList model module.
 * @module financesV0/js-client.financesV0.model/AdjustmentItemList
 * @version v0
 */
export class AdjustmentItemList extends Array {
  /**
   * Constructs a new <code>AdjustmentItemList</code>.
   * A list of information about items in an adjustment to the seller's account.
   * @alias module:financesV0/js-client.financesV0.model/AdjustmentItemList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AdjustmentItemList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/AdjustmentItemList} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/AdjustmentItemList} The populated <code>AdjustmentItemList</code> instance.
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
      obj = obj || new AdjustmentItemList();
      ApiClient.constructFromObject(data, obj, 'AdjustmentItem');
    }
    return obj;
  }
}

