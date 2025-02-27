/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
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
import {CreateShippingLabelsRequest} from '../js-client.vendorDirectFulfillmentShipping_2021-12-28.model/CreateShippingLabelsRequest.js';
import {ErrorList} from '../js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ErrorList.js';
import {ShippingLabel} from '../js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShippingLabel.js';
import {ShippingLabelList} from '../js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShippingLabelList.js';
import {SubmitShippingLabelsRequest} from '../js-client.vendorDirectFulfillmentShipping_2021-12-28.model/SubmitShippingLabelsRequest.js';
import {TransactionReference} from '../js-client.vendorDirectFulfillmentShipping_2021-12-28.model/TransactionReference.js';

/**
* VendorShippingLabels service.
* @module vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.api/VendorShippingLabelsApi
* @version 2021-12-28
*/
export class VendorShippingLabelsApi {

    /**
    * Constructs a new VendorShippingLabelsApi. 
    * @alias module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.api/VendorShippingLabelsApi
    * @class
    * @param {module:vendorDirectFulfillmentShipping_2021-12-28/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:vendorDirectFulfillmentShipping_2021-12-28/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * createShippingLabels
     * Creates shipping labels for a purchase order and returns the labels.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
     * @param {String} purchaseOrderNumber The purchase order number for which you want to return the shipping labels. It should be the same number as the `purchaseOrderNumber` in the order.
     * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/CreateShippingLabelsRequest} body The request payload that contains the parameters for creating shipping labels.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShippingLabel} and HTTP response
     */
    createShippingLabelsWithHttpInfo(purchaseOrderNumber, body) {
      let postBody = body;

      // verify the required parameter 'purchaseOrderNumber' is set
      if (purchaseOrderNumber === undefined || purchaseOrderNumber === null) {
        throw new Error("Missing the required parameter 'purchaseOrderNumber' when calling createShippingLabels");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createShippingLabels");
      }


      let pathParams = {
        'purchaseOrderNumber': purchaseOrderNumber
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ShippingLabel;

      return this.apiClient.callApi(
        '/vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * createShippingLabels
     * Creates shipping labels for a purchase order and returns the labels.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
     * @param {String} purchaseOrderNumber The purchase order number for which you want to return the shipping labels. It should be the same number as the `purchaseOrderNumber` in the order.
     * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/CreateShippingLabelsRequest} body The request payload that contains the parameters for creating shipping labels.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShippingLabel}
     */
    createShippingLabels(purchaseOrderNumber, body) {
      return this.createShippingLabelsWithHttpInfo(purchaseOrderNumber, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getShippingLabel
     * Returns a shipping label for the `purchaseOrderNumber` that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
     * @param {String} purchaseOrderNumber The purchase order number for which you want to return the shipping label. It should be the same `purchaseOrderNumber` that you received in the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShippingLabel} and HTTP response
     */
    getShippingLabelWithHttpInfo(purchaseOrderNumber) {
      let postBody = null;

      // verify the required parameter 'purchaseOrderNumber' is set
      if (purchaseOrderNumber === undefined || purchaseOrderNumber === null) {
        throw new Error("Missing the required parameter 'purchaseOrderNumber' when calling getShippingLabel");
      }


      let pathParams = {
        'purchaseOrderNumber': purchaseOrderNumber
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ShippingLabel;

      return this.apiClient.callApi(
        '/vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * getShippingLabel
     * Returns a shipping label for the `purchaseOrderNumber` that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
     * @param {String} purchaseOrderNumber The purchase order number for which you want to return the shipping label. It should be the same `purchaseOrderNumber` that you received in the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShippingLabel}
     */
    getShippingLabel(purchaseOrderNumber) {
      return this.getShippingLabelWithHttpInfo(purchaseOrderNumber)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * getShippingLabels
     * Returns a list of shipping labels created during the time frame that you specify. Use the `createdAfter` and `createdBefore` parameters to define the time frame. You must use both of these parameters. The date range to search must not be more than seven days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
     * @param {Date} createdAfter Shipping labels that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @param {Date} createdBefore Shipping labels that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @param {Object} opts Optional parameters
     * @param {String} opts.shipFromPartyId The vendor `warehouseId` for order fulfillment. If not specified, the result contains orders for all warehouses.
     * @param {Number} opts.limit The limit to the number of records returned.
     * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/String} opts.sortOrder The sort order creation date. You can choose between ascending (`ASC`) or descending (`DESC`) sort order. (default to ASC)
     * @param {String} opts.nextToken Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShippingLabelList} and HTTP response
     */
    getShippingLabelsWithHttpInfo(createdAfter, createdBefore, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'createdAfter' is set
      if (createdAfter === undefined || createdAfter === null) {
        throw new Error("Missing the required parameter 'createdAfter' when calling getShippingLabels");
      }

      // verify the required parameter 'createdBefore' is set
      if (createdBefore === undefined || createdBefore === null) {
        throw new Error("Missing the required parameter 'createdBefore' when calling getShippingLabels");
      }


      let pathParams = {
      };
      let queryParams = {
        'shipFromPartyId': opts['shipFromPartyId'],
        'limit': opts['limit'],
        'createdAfter': createdAfter,
        'createdBefore': createdBefore,
        'sortOrder': opts['sortOrder'],
        'nextToken': opts['nextToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ShippingLabelList;

      return this.apiClient.callApi(
        '/vendor/directFulfillment/shipping/2021-12-28/shippingLabels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * getShippingLabels
     * Returns a list of shipping labels created during the time frame that you specify. Use the `createdAfter` and `createdBefore` parameters to define the time frame. You must use both of these parameters. The date range to search must not be more than seven days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
     * @param {Date} createdAfter Shipping labels that became available after this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @param {Date} createdBefore Shipping labels that became available before this date and time will be included in the result. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @param {Object} opts Optional parameters
     * @param {String} opts.shipFromPartyId The vendor `warehouseId` for order fulfillment. If not specified, the result contains orders for all warehouses.
     * @param {Number} opts.limit The limit to the number of records returned.
     * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/String} opts.sortOrder The sort order creation date. You can choose between ascending (`ASC`) or descending (`DESC`) sort order. (default to ASC)
     * @param {String} opts.nextToken Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ShippingLabelList}
     */
    getShippingLabels(createdAfter, createdBefore, opts) {
      return this.getShippingLabelsWithHttpInfo(createdAfter, createdBefore, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * submitShippingLabelRequest
     * Creates a shipping label for a purchase order and returns a `transactionId` for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
     * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/SubmitShippingLabelsRequest} body The request body that contains the shipping labels data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/TransactionReference} and HTTP response
     */
    submitShippingLabelRequestWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling submitShippingLabelRequest");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransactionReference;

      return this.apiClient.callApi(
        '/vendor/directFulfillment/shipping/2021-12-28/shippingLabels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * submitShippingLabelRequest
     * Creates a shipping label for a purchase order and returns a `transactionId` for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
     * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/SubmitShippingLabelsRequest} body The request body that contains the shipping labels data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/TransactionReference}
     */
    submitShippingLabelRequest(body) {
      return this.submitShippingLabelRequestWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
