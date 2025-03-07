/*
 * The Selling Partner API for Transfers.
 * The Selling Partner API for Transfers enables selling partners to retrieve payment methods and initiate payouts for their seller accounts. This API supports the following marketplaces: DE, FR, IT, ES, SE, NL, PL, and BE.
 *
 * OpenAPI spec version: 2024-06-01
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
import {PaymentMethodList} from './PaymentMethodList.js';

/**
 * The GetPaymentMethodsResponse model module.
 * @module transfers_2024-06-01/js-client.transfers_2024-06-01.model/GetPaymentMethodsResponse
 * @version 2024-06-01
 */
export class GetPaymentMethodsResponse {
  /**
   * Constructs a new <code>GetPaymentMethodsResponse</code>.
   * The response schema for the `getPaymentMethods` operation.
   * @alias module:transfers_2024-06-01/js-client.transfers_2024-06-01.model/GetPaymentMethodsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetPaymentMethodsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:transfers_2024-06-01/js-client.transfers_2024-06-01.model/GetPaymentMethodsResponse} obj Optional instance to populate.
   * @return {module:transfers_2024-06-01/js-client.transfers_2024-06-01.model/GetPaymentMethodsResponse} The populated <code>GetPaymentMethodsResponse</code> instance.
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
      obj = obj || new GetPaymentMethodsResponse();
      if (data.hasOwnProperty('paymentMethods'))
        obj.paymentMethods = PaymentMethodList.constructFromObject(data['paymentMethods']);
    }
    return obj;
  }
}

/**
 * @member {module:transfers_2024-06-01/js-client.transfers_2024-06-01.model/PaymentMethodList} paymentMethods
 */
GetPaymentMethodsResponse.prototype.paymentMethods = undefined;


