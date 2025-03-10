/*
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
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

/**
 * The Pagination model module.
 * @module fbaInventory/js-client.fbaInventory.model/Pagination
 * @version v1
 */
export class Pagination {
  /**
   * Constructs a new <code>Pagination</code>.
   * The process of returning the results to a request in batches of a defined size called pages. This is done to exercise some control over result size and overall throughput. It's a form of traffic management.
   * @alias module:fbaInventory/js-client.fbaInventory.model/Pagination
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fbaInventory/js-client.fbaInventory.model/Pagination} obj Optional instance to populate.
   * @return {module:fbaInventory/js-client.fbaInventory.model/Pagination} The populated <code>Pagination</code> instance.
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
      obj = obj || new Pagination();
      if (data.hasOwnProperty('nextToken'))
        obj.nextToken = ApiClient.convertToType(data['nextToken'], 'String');
    }
    return obj;
  }
}

/**
 * A generated string used to retrieve the next page of the result. If nextToken is returned, pass the value of nextToken to the next request. If nextToken is not returned, there are no more items to return.
 * @member {String} nextToken
 */
Pagination.prototype.nextToken = undefined;


