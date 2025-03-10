/*
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
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
import {GetShippingLabelListResponse} from '../js-client.vendorDirectFulfillmentShippingV1.model/GetShippingLabelListResponse.js';
import {GetShippingLabelResponse} from '../js-client.vendorDirectFulfillmentShippingV1.model/GetShippingLabelResponse.js';
import {SubmitShippingLabelsRequest} from '../js-client.vendorDirectFulfillmentShippingV1.model/SubmitShippingLabelsRequest.js';
import {SubmitShippingLabelsResponse} from '../js-client.vendorDirectFulfillmentShippingV1.model/SubmitShippingLabelsResponse.js';

/**
* VendorShippingLabels service.
* @module vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.api/VendorShippingLabelsApi
* @version v1
*/
export class VendorShippingLabelsApi {

    /**
    * Constructs a new VendorShippingLabelsApi. 
    * @alias module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.api/VendorShippingLabelsApi
    * @class
    * @param {module:vendorDirectFulfillmentShippingV1/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:vendorDirectFulfillmentShippingV1/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a shipping label for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} purchaseOrderNumber The purchase order number for which you want to return the shipping label. It should be the same purchaseOrderNumber as received in the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetShippingLabelResponse} and HTTP response
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
      let returnType = GetShippingLabelResponse;

      return this.apiClient.callApi(
        '/vendor/directFulfillment/shipping/v1/shippingLabels/{purchaseOrderNumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a shipping label for the purchaseOrderNumber that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} purchaseOrderNumber The purchase order number for which you want to return the shipping label. It should be the same purchaseOrderNumber as received in the order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetShippingLabelResponse}
     */
    getShippingLabel(purchaseOrderNumber) {
      return this.getShippingLabelWithHttpInfo(purchaseOrderNumber)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of shipping labels created during the time frame that you specify. You define that time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Date} createdAfter Shipping labels that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
     * @param {Date} createdBefore Shipping labels that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
     * @param {Object} opts Optional parameters
     * @param {String} opts.shipFromPartyId The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
     * @param {Number} opts.limit The limit to the number of records returned.
     * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/String} opts.sortOrder Sort ASC or DESC by order creation date. (default to ASC)
     * @param {String} opts.nextToken Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetShippingLabelListResponse} and HTTP response
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
      let returnType = GetShippingLabelListResponse;

      return this.apiClient.callApi(
        '/vendor/directFulfillment/shipping/v1/shippingLabels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a list of shipping labels created during the time frame that you specify. You define that time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must not be more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Date} createdAfter Shipping labels that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
     * @param {Date} createdBefore Shipping labels that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
     * @param {Object} opts Optional parameters
     * @param {String} opts.shipFromPartyId The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses.
     * @param {Number} opts.limit The limit to the number of records returned.
     * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/String} opts.sortOrder Sort ASC or DESC by order creation date. (default to ASC)
     * @param {String} opts.nextToken Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetShippingLabelListResponse}
     */
    getShippingLabels(createdAfter, createdBefore, opts) {
      return this.getShippingLabelsWithHttpInfo(createdAfter, createdBefore, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a shipping label for a purchase order and returns a transactionId for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/SubmitShippingLabelsRequest} body Request body containing one or more shipping labels data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/SubmitShippingLabelsResponse} and HTTP response
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
      let returnType = SubmitShippingLabelsResponse;

      return this.apiClient.callApi(
        '/vendor/directFulfillment/shipping/v1/shippingLabels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a shipping label for a purchase order and returns a transactionId for reference.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/SubmitShippingLabelsRequest} body Request body containing one or more shipping labels data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/SubmitShippingLabelsResponse}
     */
    submitShippingLabelRequest(body) {
      return this.submitShippingLabelRequestWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
