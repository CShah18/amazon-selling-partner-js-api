/*
 * Catalog Items v2022-04-01
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-04-01
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
import {ErrorList} from '../js-client.catalogItems_2022-04-01.model/ErrorList.js';
import {Item} from '../js-client.catalogItems_2022-04-01.model/Item.js';
import {ItemSearchResults} from '../js-client.catalogItems_2022-04-01.model/ItemSearchResults.js';

/**
* CatalogItems service.
* @module catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.api/CatalogItemsApi
* @version 2022-04-01
*/
export class CatalogItemsApi {

    /**
    * Constructs a new CatalogItemsApi. 
    * @alias module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.api/CatalogItemsApi
    * @class
    * @param {module:catalogItems_2022-04-01/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:catalogItems_2022-04-01/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * getCatalogItem
     * Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/String>} opts.includedData A comma-delimited list of data sets to include in the response. Default: `summaries`. (default to ["summaries"])
     * @param {String} opts.locale Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/Item} and HTTP response
     */
    getCatalogItemWithHttpInfo(asin, marketplaceIds, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'asin' is set
      if (asin === undefined || asin === null) {
        throw new Error("Missing the required parameter 'asin' when calling getCatalogItem");
      }

      // verify the required parameter 'marketplaceIds' is set
      if (marketplaceIds === undefined || marketplaceIds === null) {
        throw new Error("Missing the required parameter 'marketplaceIds' when calling getCatalogItem");
      }


      let pathParams = {
        'asin': asin
      };
      let queryParams = {
        'marketplaceIds': this.apiClient.buildCollectionParam(marketplaceIds, 'csv'),
        'includedData': this.apiClient.buildCollectionParam(opts['includedData'], 'csv'),
        'locale': opts['locale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Item;

      return this.apiClient.callApi(
        '/catalog/2022-04-01/items/{asin}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * getCatalogItem
     * Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/String>} opts.includedData A comma-delimited list of data sets to include in the response. Default: `summaries`. (default to ["summaries"])
     * @param {String} opts.locale Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/Item}
     */
    getCatalogItem(asin, marketplaceIds, opts) {
      return this.getCatalogItemWithHttpInfo(asin, marketplaceIds, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * searchCatalogItems
     * Search for and return a list of Amazon catalog items and associated information either by identifier or by keywords.  **Usage Plans:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.identifiers A comma-delimited list of product identifiers to search the Amazon catalog for. **Note:** Cannot be used with `keywords`.
     * @param {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/String} opts.identifiersType Type of product identifiers to search the Amazon catalog for. **Note:** Required when `identifiers` are provided.
     * @param {Array.<module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/String>} opts.includedData A comma-delimited list of data sets to include in the response. Default: `summaries`. (default to ["summaries"])
     * @param {String} opts.locale Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
     * @param {String} opts.sellerId A selling partner identifier, such as a seller account or vendor code. **Note:** Required when `identifiersType` is `SKU`.
     * @param {Array.<String>} opts.keywords A comma-delimited list of words to search the Amazon catalog for. **Note:** Cannot be used with `identifiers`.
     * @param {Array.<String>} opts.brandNames A comma-delimited list of brand names to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`.
     * @param {Array.<String>} opts.classificationIds A comma-delimited list of classification identifiers to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`.
     * @param {Number} opts.pageSize Number of results to be returned per page. (default to 10)
     * @param {String} opts.pageToken A token to fetch a certain page when there are multiple pages worth of results.
     * @param {String} opts.keywordsLocale The language of the keywords provided for `keywords`-based queries. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with `identifiers`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemSearchResults} and HTTP response
     */
    searchCatalogItemsWithHttpInfo(marketplaceIds, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'marketplaceIds' is set
      if (marketplaceIds === undefined || marketplaceIds === null) {
        throw new Error("Missing the required parameter 'marketplaceIds' when calling searchCatalogItems");
      }


      let pathParams = {
      };
      let queryParams = {
        'identifiers': this.apiClient.buildCollectionParam(opts['identifiers'], 'csv'),
        'identifiersType': opts['identifiersType'],
        'marketplaceIds': this.apiClient.buildCollectionParam(marketplaceIds, 'csv'),
        'includedData': this.apiClient.buildCollectionParam(opts['includedData'], 'csv'),
        'locale': opts['locale'],
        'sellerId': opts['sellerId'],
        'keywords': this.apiClient.buildCollectionParam(opts['keywords'], 'csv'),
        'brandNames': this.apiClient.buildCollectionParam(opts['brandNames'], 'csv'),
        'classificationIds': this.apiClient.buildCollectionParam(opts['classificationIds'], 'csv'),
        'pageSize': opts['pageSize'],
        'pageToken': opts['pageToken'],
        'keywordsLocale': opts['keywordsLocale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ItemSearchResults;

      return this.apiClient.callApi(
        '/catalog/2022-04-01/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * searchCatalogItems
     * Search for and return a list of Amazon catalog items and associated information either by identifier or by keywords.  **Usage Plans:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.identifiers A comma-delimited list of product identifiers to search the Amazon catalog for. **Note:** Cannot be used with `keywords`.
     * @param {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/String} opts.identifiersType Type of product identifiers to search the Amazon catalog for. **Note:** Required when `identifiers` are provided.
     * @param {Array.<module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/String>} opts.includedData A comma-delimited list of data sets to include in the response. Default: `summaries`. (default to ["summaries"])
     * @param {String} opts.locale Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
     * @param {String} opts.sellerId A selling partner identifier, such as a seller account or vendor code. **Note:** Required when `identifiersType` is `SKU`.
     * @param {Array.<String>} opts.keywords A comma-delimited list of words to search the Amazon catalog for. **Note:** Cannot be used with `identifiers`.
     * @param {Array.<String>} opts.brandNames A comma-delimited list of brand names to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`.
     * @param {Array.<String>} opts.classificationIds A comma-delimited list of classification identifiers to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`.
     * @param {Number} opts.pageSize Number of results to be returned per page. (default to 10)
     * @param {String} opts.pageToken A token to fetch a certain page when there are multiple pages worth of results.
     * @param {String} opts.keywordsLocale The language of the keywords provided for `keywords`-based queries. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with `identifiers`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemSearchResults}
     */
    searchCatalogItems(marketplaceIds, opts) {
      return this.searchCatalogItemsWithHttpInfo(marketplaceIds, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
