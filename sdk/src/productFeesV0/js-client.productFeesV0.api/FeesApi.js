/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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

import {ApiClient} from "../ApiClient.js";
import {GetMyFeesEstimateRequest} from '../js-client.productFeesV0.model/GetMyFeesEstimateRequest.js';
import {GetMyFeesEstimateResponse} from '../js-client.productFeesV0.model/GetMyFeesEstimateResponse.js';
import {GetMyFeesEstimatesErrorList} from '../js-client.productFeesV0.model/GetMyFeesEstimatesErrorList.js';
import {GetMyFeesEstimatesRequest} from '../js-client.productFeesV0.model/GetMyFeesEstimatesRequest.js';
import {GetMyFeesEstimatesResponse} from '../js-client.productFeesV0.model/GetMyFeesEstimatesResponse.js';

/**
* Fees service.
* @module productFeesV0/js-client.productFeesV0.api/FeesApi
* @version v0
*/
export class FeesApi {

    /**
    * Constructs a new FeesApi. 
    * @alias module:productFeesV0/js-client.productFeesV0.api/FeesApi
    * @class
    * @param {module:productFeesV0/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:productFeesV0/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item's price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When using the `getMyFeesEstimateForASIN` operation with an ASIN, the fee estimates might be different. This is because these estimates use the item's catalog size, which might not always match the actual size of the item sent to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimateRequest} body 
     * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimateResponse} and HTTP response
     */
    getMyFeesEstimateForASINWithHttpInfo(body, asin) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getMyFeesEstimateForASIN");
      }

      // verify the required parameter 'asin' is set
      if (asin === undefined || asin === null) {
        throw new Error("Missing the required parameter 'asin' when calling getMyFeesEstimateForASIN");
      }


      let pathParams = {
        'Asin': asin
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetMyFeesEstimateResponse;

      return this.apiClient.callApi(
        '/products/fees/v0/items/{Asin}/feesEstimate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body.  You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item's price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When using the `getMyFeesEstimateForASIN` operation with an ASIN, the fee estimates might be different. This is because these estimates use the item's catalog size, which might not always match the actual size of the item sent to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimateRequest} body 
     * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimateResponse}
     */
    getMyFeesEstimateForASIN(body, asin) {
      return this.getMyFeesEstimateForASINWithHttpInfo(body, asin)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item's price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When sellers use the `getMyFeesEstimateForSKU` operation with their `SellerSKU`, they get accurate fees based on real item measurements, but only after they've sent their items to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimateRequest} body 
     * @param {String} sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimateResponse} and HTTP response
     */
    getMyFeesEstimateForSKUWithHttpInfo(body, sellerSKU) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getMyFeesEstimateForSKU");
      }

      // verify the required parameter 'sellerSKU' is set
      if (sellerSKU === undefined || sellerSKU === null) {
        throw new Error("Missing the required parameter 'sellerSKU' when calling getMyFeesEstimateForSKU");
      }


      let pathParams = {
        'SellerSKU': sellerSKU
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetMyFeesEstimateResponse;

      return this.apiClient.callApi(
        '/products/fees/v0/listings/{SellerSKU}/feesEstimate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body.  **Note:** The parameters associated with this operation may contain special characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item's price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request.  **Note:** This identifier value is used to identify an estimate. Actual costs may vary. Search \"fees\" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information.  **Note:** When sellers use the `getMyFeesEstimateForSKU` operation with their `SellerSKU`, they get accurate fees based on real item measurements, but only after they've sent their items to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimateRequest} body 
     * @param {String} sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimateResponse}
     */
    getMyFeesEstimateForSKU(body, sellerSKU) {
      return this.getMyFeesEstimateForSKUWithHttpInfo(body, sellerSKU)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimatesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimatesResponse} and HTTP response
     */
    getMyFeesEstimatesWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getMyFeesEstimates");
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
      let returnType = GetMyFeesEstimatesResponse;

      return this.apiClient.callApi(
        '/products/fees/v0/feesEstimate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the estimated fees for a list of products.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimatesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:productFeesV0/js-client.productFeesV0.model/GetMyFeesEstimatesResponse}
     */
    getMyFeesEstimates(body) {
      return this.getMyFeesEstimatesWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
