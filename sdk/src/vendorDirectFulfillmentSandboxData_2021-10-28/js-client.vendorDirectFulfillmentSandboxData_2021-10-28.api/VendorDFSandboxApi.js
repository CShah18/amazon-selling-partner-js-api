/*
 * Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data
 * The Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data provides programmatic access to vendor direct fulfillment sandbox test data.
 *
 * OpenAPI spec version: 2021-10-28
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
import {ErrorList} from '../js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/ErrorList.js';
import {GenerateOrderScenarioRequest} from '../js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/GenerateOrderScenarioRequest.js';
import {TransactionReference} from '../js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/TransactionReference.js';

/**
* VendorDFSandbox service.
* @module vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.api/VendorDFSandboxApi
* @version 2021-10-28
*/
export class VendorDFSandboxApi {

    /**
    * Constructs a new VendorDFSandboxApi. 
    * @alias module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.api/VendorDFSandboxApi
    * @class
    * @param {module:vendorDirectFulfillmentSandboxData_2021-10-28/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:vendorDirectFulfillmentSandboxData_2021-10-28/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Submits a request to generate test order data for Vendor Direct Fulfillment API entities.
     * @param {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/GenerateOrderScenarioRequest} body The request payload containing parameters for generating test order data scenarios.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/TransactionReference} and HTTP response
     */
    generateOrderScenariosWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling generateOrderScenarios");
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
        '/vendor/directFulfillment/sandbox/2021-10-28/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Submits a request to generate test order data for Vendor Direct Fulfillment API entities.
     * @param {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/GenerateOrderScenarioRequest} body The request payload containing parameters for generating test order data scenarios.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/TransactionReference}
     */
    generateOrderScenarios(body) {
      return this.generateOrderScenariosWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
