/*
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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
import {ErrorList} from './ErrorList.js';
import {GetEligibleShipmentServicesResult} from './GetEligibleShipmentServicesResult.js';

/**
 * The GetEligibleShipmentServicesResponse model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesResponse
 * @version v0
 */
export class GetEligibleShipmentServicesResponse {
  /**
   * Constructs a new <code>GetEligibleShipmentServicesResponse</code>.
   * Response schema.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetEligibleShipmentServicesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesResponse} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesResponse} The populated <code>GetEligibleShipmentServicesResponse</code> instance.
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
      obj = obj || new GetEligibleShipmentServicesResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = GetEligibleShipmentServicesResult.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesResult} payload
 */
GetEligibleShipmentServicesResponse.prototype.payload = undefined;

/**
 * One or more unexpected errors occurred during this operation.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ErrorList} errors
 */
GetEligibleShipmentServicesResponse.prototype.errors = undefined;


