/*
 * Selling Partner API for Retail Procurement Transaction Status
 * The Selling Partner API for Retail Procurement Transaction Status provides programmatic access to status information on specific asynchronous POST transactions for vendors.
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

import {ApiClient} from "../ApiClient.js";
import {GetTransactionResponse} from '../js-client.vendorTransactionStatus.model/GetTransactionResponse.js';

/**
* VendorTransaction service.
* @module vendorTransactionStatus/js-client.vendorTransactionStatus.api/VendorTransactionApi
* @version v1
*/
export class VendorTransactionApi {

    /**
    * Constructs a new VendorTransactionApi. 
    * @alias module:vendorTransactionStatus/js-client.vendorTransactionStatus.api/VendorTransactionApi
    * @class
    * @param {module:vendorTransactionStatus/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:vendorTransactionStatus/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns the status of the transaction that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} transactionId The GUID provided by Amazon in the 'transactionId' field in response to the post request of a specific transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorTransactionStatus/js-client.vendorTransactionStatus.model/GetTransactionResponse} and HTTP response
     */
    getTransactionWithHttpInfo(transactionId) {
      let postBody = null;

      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getTransaction");
      }


      let pathParams = {
        'transactionId': transactionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetTransactionResponse;

      return this.apiClient.callApi(
        '/vendor/transactions/v1/transactions/{transactionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the status of the transaction that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} transactionId The GUID provided by Amazon in the 'transactionId' field in response to the post request of a specific transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorTransactionStatus/js-client.vendorTransactionStatus.model/GetTransactionResponse}
     */
    getTransaction(transactionId) {
      return this.getTransactionWithHttpInfo(transactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
