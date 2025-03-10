/*
 * Selling Partner API for Data Kiosk
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * OpenAPI spec version: 2023-11-15
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
import {CreateQueryResponse} from '../js-client.dataKiosk_2023-11-15.model/CreateQueryResponse.js';
import {CreateQuerySpecification} from '../js-client.dataKiosk_2023-11-15.model/CreateQuerySpecification.js';
import {ErrorList} from '../js-client.dataKiosk_2023-11-15.model/ErrorList.js';
import {GetDocumentResponse} from '../js-client.dataKiosk_2023-11-15.model/GetDocumentResponse.js';
import {GetQueriesResponse} from '../js-client.dataKiosk_2023-11-15.model/GetQueriesResponse.js';
import {Query} from '../js-client.dataKiosk_2023-11-15.model/Query.js';

/**
* Queries service.
* @module dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.api/QueriesApi
* @version 2023-11-15
*/
export class QueriesApi {

    /**
    * Constructs a new QueriesApi. 
    * @alias module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.api/QueriesApi
    * @class
    * @param {module:dataKiosk_2023-11-15/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:dataKiosk_2023-11-15/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Cancels the query specified by the `queryId` parameter. Only queries with a non-terminal `processingStatus` (`IN_QUEUE`, `IN_PROGRESS`) can be cancelled. Cancelling a query that already has a `processingStatus` of `CANCELLED` will no-op. Cancelled queries are returned in subsequent calls to the `getQuery` and `getQueries` operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} queryId The identifier for the query. This identifier is unique only in combination with a selling partner account ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cancelQueryWithHttpInfo(queryId) {
      let postBody = null;

      // verify the required parameter 'queryId' is set
      if (queryId === undefined || queryId === null) {
        throw new Error("Missing the required parameter 'queryId' when calling cancelQuery");
      }


      let pathParams = {
        'queryId': queryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/dataKiosk/2023-11-15/queries/{queryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Cancels the query specified by the `queryId` parameter. Only queries with a non-terminal `processingStatus` (`IN_QUEUE`, `IN_PROGRESS`) can be cancelled. Cancelling a query that already has a `processingStatus` of `CANCELLED` will no-op. Cancelled queries are returned in subsequent calls to the `getQuery` and `getQueries` operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} queryId The identifier for the query. This identifier is unique only in combination with a selling partner account ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cancelQuery(queryId) {
      return this.cancelQueryWithHttpInfo(queryId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a Data Kiosk query request.  **Note:** The retention of a query varies based on the fields requested. Each field within a schema is annotated with a `@resultRetention` directive that defines how long a query containing that field will be retained. When a query contains multiple fields with different retentions, the shortest (minimum) retention is applied. The retention of a query's resulting documents always matches the retention of the query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/CreateQuerySpecification} body The body of the request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/CreateQueryResponse} and HTTP response
     */
    createQueryWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createQuery");
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
      let returnType = CreateQueryResponse;

      return this.apiClient.callApi(
        '/dataKiosk/2023-11-15/queries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a Data Kiosk query request.  **Note:** The retention of a query varies based on the fields requested. Each field within a schema is annotated with a `@resultRetention` directive that defines how long a query containing that field will be retained. When a query contains multiple fields with different retentions, the shortest (minimum) retention is applied. The retention of a query's resulting documents always matches the retention of the query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/CreateQuerySpecification} body The body of the request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/CreateQueryResponse}
     */
    createQuery(body) {
      return this.createQueryWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the information required for retrieving a Data Kiosk document's contents. See the `createQuery` operation for details about document retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} documentId The identifier for the Data Kiosk document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/GetDocumentResponse} and HTTP response
     */
    getDocumentWithHttpInfo(documentId) {
      let postBody = null;

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocument");
      }


      let pathParams = {
        'documentId': documentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetDocumentResponse;

      return this.apiClient.callApi(
        '/dataKiosk/2023-11-15/documents/{documentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the information required for retrieving a Data Kiosk document's contents. See the `createQuery` operation for details about document retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} documentId The identifier for the Data Kiosk document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/GetDocumentResponse}
     */
    getDocument(documentId) {
      return this.getDocumentWithHttpInfo(documentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns details for the Data Kiosk queries that match the specified filters. See the `createQuery` operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {Array.<module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/String>} opts.processingStatuses A list of processing statuses used to filter queries.
     * @param {Number} opts.pageSize The maximum number of queries to return in a single call. (default to 10)
     * @param {Date} opts.createdSince The earliest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is 90 days ago.
     * @param {Date} opts.createdUntil The latest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is the time of the `getQueries` request.
     * @param {String} opts.paginationToken A token to fetch a certain page of results when there are multiple pages of results available. The value of this token is fetched from the `pagination.nextToken` field returned in the `GetQueriesResponse` object. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of `pageSize` which can be modified between calls to `getQueries`. In the absence of this token value, `getQueries` returns the first page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/GetQueriesResponse} and HTTP response
     */
    getQueriesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'processingStatuses': this.apiClient.buildCollectionParam(opts['processingStatuses'], 'csv'),
        'pageSize': opts['pageSize'],
        'createdSince': opts['createdSince'],
        'createdUntil': opts['createdUntil'],
        'paginationToken': opts['paginationToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetQueriesResponse;

      return this.apiClient.callApi(
        '/dataKiosk/2023-11-15/queries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns details for the Data Kiosk queries that match the specified filters. See the `createQuery` operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {Array.<module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/String>} opts.processingStatuses A list of processing statuses used to filter queries.
     * @param {Number} opts.pageSize The maximum number of queries to return in a single call. (default to 10)
     * @param {Date} opts.createdSince The earliest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is 90 days ago.
     * @param {Date} opts.createdUntil The latest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is the time of the `getQueries` request.
     * @param {String} opts.paginationToken A token to fetch a certain page of results when there are multiple pages of results available. The value of this token is fetched from the `pagination.nextToken` field returned in the `GetQueriesResponse` object. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of `pageSize` which can be modified between calls to `getQueries`. In the absence of this token value, `getQueries` returns the first page of results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/GetQueriesResponse}
     */
    getQueries(opts) {
      return this.getQueriesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns query details for the query specified by the `queryId` parameter. See the `createQuery` operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} queryId The query identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/Query} and HTTP response
     */
    getQueryWithHttpInfo(queryId) {
      let postBody = null;

      // verify the required parameter 'queryId' is set
      if (queryId === undefined || queryId === null) {
        throw new Error("Missing the required parameter 'queryId' when calling getQuery");
      }


      let pathParams = {
        'queryId': queryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Query;

      return this.apiClient.callApi(
        '/dataKiosk/2023-11-15/queries/{queryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns query details for the query specified by the `queryId` parameter. See the `createQuery` operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} queryId The query identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:dataKiosk_2023-11-15/js-client.dataKiosk_2023-11-15.model/Query}
     */
    getQuery(queryId) {
      return this.getQueryWithHttpInfo(queryId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
