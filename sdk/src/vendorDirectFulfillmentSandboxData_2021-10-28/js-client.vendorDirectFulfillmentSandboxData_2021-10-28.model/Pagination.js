/*
 * Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data
 * The Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data provides programmatic access to vendor direct fulfillment sandbox test data.
 *
 * OpenAPI spec version: 2021-10-28
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
 * @module vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/Pagination
 * @version 2021-10-28
 */
export class Pagination {
  /**
   * Constructs a new <code>Pagination</code>.
   * A generated string used to pass information to your next request. If NextToken is returned, pass the value of NextToken to the next request. If NextToken is not returned, there are no more order items to return.
   * @alias module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/Pagination
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/Pagination} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/Pagination} The populated <code>Pagination</code> instance.
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
 * A generated token to be passed in the next request to retrieve the next set of results.
 * @member {String} nextToken
 */
Pagination.prototype.nextToken = undefined;


