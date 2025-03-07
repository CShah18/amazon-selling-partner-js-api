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
import {ErrorList} from './ErrorList.js';

/**
 * The AddInventoryResponse model module.
 * @module fbaInventory/js-client.fbaInventory.model/AddInventoryResponse
 * @version v1
 */
export class AddInventoryResponse {
  /**
   * Constructs a new <code>AddInventoryResponse</code>.
   * The response schema for the AddInventory operation.
   * @alias module:fbaInventory/js-client.fbaInventory.model/AddInventoryResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AddInventoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fbaInventory/js-client.fbaInventory.model/AddInventoryResponse} obj Optional instance to populate.
   * @return {module:fbaInventory/js-client.fbaInventory.model/AddInventoryResponse} The populated <code>AddInventoryResponse</code> instance.
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
      obj = obj || new AddInventoryResponse();
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * One or more unexpected errors occurred during the AddInventory operation.
 * @member {module:fbaInventory/js-client.fbaInventory.model/ErrorList} errors
 */
AddInventoryResponse.prototype.errors = undefined;


