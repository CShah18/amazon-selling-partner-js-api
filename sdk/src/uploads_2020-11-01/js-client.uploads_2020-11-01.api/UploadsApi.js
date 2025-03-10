/*
 * Selling Partner API for Uploads
 * The Uploads API lets you upload files that you can programmatically access using other Selling Partner APIs, such as the A+ Content API and the Messaging API.
 *
 * OpenAPI spec version: 2020-11-01
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
import {CreateUploadDestinationResponse} from '../js-client.uploads_2020-11-01.model/CreateUploadDestinationResponse.js';

/**
* Uploads service.
* @module uploads_2020-11-01/js-client.uploads_2020-11-01.api/UploadsApi
* @version 2020-11-01
*/
export class UploadsApi {

    /**
    * Constructs a new UploadsApi. 
    * @alias module:uploads_2020-11-01/js-client.uploads_2020-11-01.api/UploadsApi
    * @class
    * @param {module:uploads_2020-11-01/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:uploads_2020-11-01/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates an upload destination, returning the information required to upload a file to the destination and to programmatically access the file.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array.<String>} marketplaceIds A list of marketplace identifiers. This specifies the marketplaces where the upload will be available. Only one marketplace can be specified.
     * @param {String} contentMD5 An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit.
     * @param {String} resource The resource for the upload destination that you are creating. For example, if you are creating an upload destination for the createLegalDisclosure operation of the Messaging API, the `{resource}` would be `/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure`, and the entire path would be `/uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure`. If you are creating an upload destination for an Aplus content document, the `{resource}` would be `aplus/2020-11-01/contentDocuments` and the path would be `/uploads/v1/uploadDestinations/aplus/2020-11-01/contentDocuments`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType The content type of the file to be uploaded.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:uploads_2020-11-01/js-client.uploads_2020-11-01.model/CreateUploadDestinationResponse} and HTTP response
     */
    createUploadDestinationForResourceWithHttpInfo(marketplaceIds, contentMD5, resource, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'marketplaceIds' is set
      if (marketplaceIds === undefined || marketplaceIds === null) {
        throw new Error("Missing the required parameter 'marketplaceIds' when calling createUploadDestinationForResource");
      }

      // verify the required parameter 'contentMD5' is set
      if (contentMD5 === undefined || contentMD5 === null) {
        throw new Error("Missing the required parameter 'contentMD5' when calling createUploadDestinationForResource");
      }

      // verify the required parameter 'resource' is set
      if (resource === undefined || resource === null) {
        throw new Error("Missing the required parameter 'resource' when calling createUploadDestinationForResource");
      }

      let pathParams = {
        'resource': resource
      };
      let queryParams = {
        'marketplaceIds': this.apiClient.buildCollectionParam(marketplaceIds, 'csv'),
        'contentMD5': contentMD5,
        'contentType': opts['contentType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateUploadDestinationResponse;

      return this.apiClient.callApi(
        '/uploads/2020-11-01/uploadDestinations/{resource}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Creates an upload destination, returning the information required to upload a file to the destination and to programmatically access the file.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array.<String>} marketplaceIds A list of marketplace identifiers. This specifies the marketplaces where the upload will be available. Only one marketplace can be specified.
     * @param {String} contentMD5 An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit.
     * @param {String} resource The resource for the upload destination that you are creating. For example, if you are creating an upload destination for the createLegalDisclosure operation of the Messaging API, the `{resource}` would be `/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure`, and the entire path would be `/uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure`. If you are creating an upload destination for an Aplus content document, the `{resource}` would be `aplus/2020-11-01/contentDocuments` and the path would be `/uploads/v1/uploadDestinations/aplus/2020-11-01/contentDocuments`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType The content type of the file to be uploaded.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:uploads_2020-11-01/js-client.uploads_2020-11-01.model/CreateUploadDestinationResponse}
     */
    createUploadDestinationForResource(marketplaceIds, contentMD5, resource, opts) {
      return this.createUploadDestinationForResourceWithHttpInfo(marketplaceIds, contentMD5, resource, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
