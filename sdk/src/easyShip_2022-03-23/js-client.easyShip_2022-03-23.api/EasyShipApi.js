/*
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) for the differences in Easy Ship operations by marketplace.
 *
 * OpenAPI spec version: 2022-03-23
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
import {CreateScheduledPackageRequest} from '../js-client.easyShip_2022-03-23.model/CreateScheduledPackageRequest.js';
import {CreateScheduledPackagesRequest} from '../js-client.easyShip_2022-03-23.model/CreateScheduledPackagesRequest.js';
import {CreateScheduledPackagesResponse} from '../js-client.easyShip_2022-03-23.model/CreateScheduledPackagesResponse.js';
import {ErrorList} from '../js-client.easyShip_2022-03-23.model/ErrorList.js';
import {ListHandoverSlotsRequest} from '../js-client.easyShip_2022-03-23.model/ListHandoverSlotsRequest.js';
import {ListHandoverSlotsResponse} from '../js-client.easyShip_2022-03-23.model/ListHandoverSlotsResponse.js';
import {ModelPackage} from '../js-client.easyShip_2022-03-23.model/ModelPackage.js';
import {Packages} from '../js-client.easyShip_2022-03-23.model/Packages.js';
import {UpdateScheduledPackagesRequest} from '../js-client.easyShip_2022-03-23.model/UpdateScheduledPackagesRequest.js';

/**
* EasyShip service.
* @module easyShip_2022-03-23/js-client.easyShip_2022-03-23.api/EasyShipApi
* @version 2022-03-23
*/
export class EasyShipApi {

    /**
    * Constructs a new EasyShipApi. 
    * @alias module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.api/EasyShipApi
    * @class
    * @param {module:easyShip_2022-03-23/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:easyShip_2022-03-23/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling `createScheduledPackage` also generates a warranty document if you specify a `SerialNumber` value. To get these documents, see [How to get invoice, shipping label, and warranty documents](doc:easyship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the `getOrders` operation of the Selling Partner API for Orders and examine the `EasyShipShipmentStatus` property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/CreateScheduledPackageRequest} createScheduledPackageRequest The request schema for the `createScheduledPackage` operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ModelPackage} and HTTP response
     */
    createScheduledPackageWithHttpInfo(createScheduledPackageRequest) {
      let postBody = createScheduledPackageRequest;

      // verify the required parameter 'createScheduledPackageRequest' is set
      if (createScheduledPackageRequest === undefined || createScheduledPackageRequest === null) {
        throw new Error("Missing the required parameter 'createScheduledPackageRequest' when calling createScheduledPackage");
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
      let returnType = ModelPackage;

      return this.apiClient.callApi(
        '/easyShip/2022-03-23/package', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Schedules an Easy Ship order and returns the scheduled package information.  This operation does the following:  *  Specifies the time slot and handover method for the order to be scheduled for delivery.  * Updates the Easy Ship order status.  * Generates a shipping label and an invoice. Calling `createScheduledPackage` also generates a warranty document if you specify a `SerialNumber` value. To get these documents, see [How to get invoice, shipping label, and warranty documents](doc:easyship-api-v2022-03-23-use-case-guide).  * Shows the status of Easy Ship orders when you call the `getOrders` operation of the Selling Partner API for Orders and examine the `EasyShipShipmentStatus` property in the response body.  See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which documents are supported in each marketplace.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/CreateScheduledPackageRequest} createScheduledPackageRequest The request schema for the `createScheduledPackage` operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ModelPackage}
     */
    createScheduledPackage(createScheduledPackageRequest) {
      return this.createScheduledPackageWithHttpInfo(createScheduledPackageRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * This operation automatically schedules a time slot for all specified `amazonOrderId` values and generates the associated shipping labels and compliance documents based on the marketplace. For more information, refer to the [marketplace support table](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  You can optionally assign a `packageDetails` object to input a preferred time slot for each order in your request. In such cases, Amazon schedules the respective packages using the specified optional settings. If you don't specify a time slot, Amazon assigns the earliest available time slot.   You can choose PDF or ZPL for your shipping label's file format and Amazon creates the label accordingly.  This operation returns an array that contains the scheduled packages, and a temporary URL that you can use to access a ZIP file. The ZIP file includes the generated shipping labels and any other documents that are required for your marketplace. If an order can't be scheduled, Amazon adds the `rejectedOrders` list in the response. The response contains an entry for each order that could not be processed. Each entry contains an error message that describes the reason for the failure.  The following table contains the supported request and burst maximum rates:  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/CreateScheduledPackagesRequest} createScheduledPackagesRequest The request schema for the `createScheduledPackageBulk` operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/CreateScheduledPackagesResponse} and HTTP response
     */
    createScheduledPackageBulkWithHttpInfo(createScheduledPackagesRequest) {
      let postBody = createScheduledPackagesRequest;

      // verify the required parameter 'createScheduledPackagesRequest' is set
      if (createScheduledPackagesRequest === undefined || createScheduledPackagesRequest === null) {
        throw new Error("Missing the required parameter 'createScheduledPackagesRequest' when calling createScheduledPackageBulk");
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
      let returnType = CreateScheduledPackagesResponse;

      return this.apiClient.callApi(
        '/easyShip/2022-03-23/packages/bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * This operation automatically schedules a time slot for all specified `amazonOrderId` values and generates the associated shipping labels and compliance documents based on the marketplace. For more information, refer to the [marketplace support table](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  You can optionally assign a `packageDetails` object to input a preferred time slot for each order in your request. In such cases, Amazon schedules the respective packages using the specified optional settings. If you don't specify a time slot, Amazon assigns the earliest available time slot.   You can choose PDF or ZPL for your shipping label's file format and Amazon creates the label accordingly.  This operation returns an array that contains the scheduled packages, and a temporary URL that you can use to access a ZIP file. The ZIP file includes the generated shipping labels and any other documents that are required for your marketplace. If an order can't be scheduled, Amazon adds the `rejectedOrders` list in the response. The response contains an entry for each order that could not be processed. Each entry contains an error message that describes the reason for the failure.  The following table contains the supported request and burst maximum rates:  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that are applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/CreateScheduledPackagesRequest} createScheduledPackagesRequest The request schema for the `createScheduledPackageBulk` operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/CreateScheduledPackagesResponse}
     */
    createScheduledPackageBulk(createScheduledPackagesRequest) {
      return this.createScheduledPackageBulkWithHttpInfo(createScheduledPackagesRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} amazonOrderId An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     * @param {String} marketplaceId An identifier for the marketplace in which the seller is selling.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ModelPackage} and HTTP response
     */
    getScheduledPackageWithHttpInfo(amazonOrderId, marketplaceId) {
      let postBody = null;

      // verify the required parameter 'amazonOrderId' is set
      if (amazonOrderId === undefined || amazonOrderId === null) {
        throw new Error("Missing the required parameter 'amazonOrderId' when calling getScheduledPackage");
      }

      // verify the required parameter 'marketplaceId' is set
      if (marketplaceId === undefined || marketplaceId === null) {
        throw new Error("Missing the required parameter 'marketplaceId' when calling getScheduledPackage");
      }


      let pathParams = {
      };
      let queryParams = {
        'amazonOrderId': amazonOrderId,
        'marketplaceId': marketplaceId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelPackage;

      return this.apiClient.callApi(
        '/easyShip/2022-03-23/package', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} amazonOrderId An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     * @param {String} marketplaceId An identifier for the marketplace in which the seller is selling.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ModelPackage}
     */
    getScheduledPackage(amazonOrderId, marketplaceId) {
      return this.getScheduledPackageWithHttpInfo(amazonOrderId, marketplaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ListHandoverSlotsRequest} opts.listHandoverSlotsRequest The request schema for the `listHandoverSlots` operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ListHandoverSlotsResponse} and HTTP response
     */
    listHandoverSlotsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['listHandoverSlotsRequest'];


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
      let returnType = ListHandoverSlotsResponse;

      return this.apiClient.callApi(
        '/easyShip/2022-03-23/timeSlot', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies.  This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ListHandoverSlotsRequest} opts.listHandoverSlotsRequest The request schema for the `listHandoverSlots` operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ListHandoverSlotsResponse}
     */
    listHandoverSlots(opts) {
      return this.listHandoverSlotsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the time slot for handing over the package indicated by the specified `scheduledPackageId`. You can get the new `slotId` value for the time slot by calling the `listHandoverSlots` operation before making another `patch` call.  See the **Update Package** column in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/UpdateScheduledPackagesRequest} opts.updateScheduledPackagesRequest The request schema for the `updateScheduledPackages` operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/Packages} and HTTP response
     */
    updateScheduledPackagesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['updateScheduledPackagesRequest'];


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
      let returnType = Packages;

      return this.apiClient.callApi(
        '/easyShip/2022-03-23/package', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Updates the time slot for handing over the package indicated by the specified `scheduledPackageId`. You can get the new `slotId` value for the time slot by calling the `listHandoverSlots` operation before making another `patch` call.  See the **Update Package** column in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which marketplaces this operation is supported in.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Object} opts Optional parameters
     * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/UpdateScheduledPackagesRequest} opts.updateScheduledPackagesRequest The request schema for the `updateScheduledPackages` operation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/Packages}
     */
    updateScheduledPackages(opts) {
      return this.updateScheduledPackagesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
