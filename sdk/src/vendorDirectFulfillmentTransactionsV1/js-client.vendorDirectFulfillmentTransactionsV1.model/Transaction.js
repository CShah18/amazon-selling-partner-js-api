/*
 * Selling Partner API for Direct Fulfillment Transaction Status
 * The Selling Partner API for Direct Fulfillment Transaction Status provides programmatic access to a direct fulfillment vendor's transaction status.
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
 * The Transaction model module.
 * @module vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/Transaction
 * @version v1
 */
export class Transaction {
  /**
   * Constructs a new <code>Transaction</code>.
   * The transaction status details.
   * @alias module:vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/Transaction
   * @class
   * @param transactionId {String} The unique identifier sent in the 'transactionId' field in response to the post request of a specific transaction.
   * @param status {module:vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/Transaction.StatusEnum} Current processing status of the transaction.
   */
  constructor(transactionId, status) {
    this.transactionId = transactionId;
    this.status = status;
  }

  /**
   * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/Transaction} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/Transaction} The populated <code>Transaction</code> instance.
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
      obj = obj || new Transaction();
      if (data.hasOwnProperty('transactionId'))
        obj.transactionId = ApiClient.convertToType(data['transactionId'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * The unique identifier sent in the 'transactionId' field in response to the post request of a specific transaction.
 * @member {String} transactionId
 */
Transaction.prototype.transactionId = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Transaction.StatusEnum = {
  /**
   * value: "Failure"
   * @const
   */
  failure: "Failure",

  /**
   * value: "Processing"
   * @const
   */
  processing: "Processing",

  /**
   * value: "Success"
   * @const
   */
  success: "Success"
};

/**
 * Current processing status of the transaction.
 * @member {module:vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/Transaction.StatusEnum} status
 */
Transaction.prototype.status = undefined;

/**
 * Error code and message for the failed transaction. Only available when transaction status is 'Failure'.
 * @member {module:vendorDirectFulfillmentTransactionsV1/js-client.vendorDirectFulfillmentTransactionsV1.model/ErrorList} errors
 */
Transaction.prototype.errors = undefined;


