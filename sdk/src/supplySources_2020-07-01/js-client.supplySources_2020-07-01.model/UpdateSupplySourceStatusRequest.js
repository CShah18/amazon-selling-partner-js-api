/*
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * OpenAPI spec version: 2020-07-01
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
import {SupplySourceStatus} from './SupplySourceStatus.js';

/**
 * The UpdateSupplySourceStatusRequest model module.
 * @module supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/UpdateSupplySourceStatusRequest
 * @version 2020-07-01
 */
export class UpdateSupplySourceStatusRequest {
  /**
   * Constructs a new <code>UpdateSupplySourceStatusRequest</code>.
   * A request to update the status of a supply source.
   * @alias module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/UpdateSupplySourceStatusRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateSupplySourceStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/UpdateSupplySourceStatusRequest} obj Optional instance to populate.
   * @return {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/UpdateSupplySourceStatusRequest} The populated <code>UpdateSupplySourceStatusRequest</code> instance.
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
      obj = obj || new UpdateSupplySourceStatusRequest();
      if (data.hasOwnProperty('status'))
        obj.status = SupplySourceStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceStatus} status
 */
UpdateSupplySourceStatusRequest.prototype.status = undefined;


