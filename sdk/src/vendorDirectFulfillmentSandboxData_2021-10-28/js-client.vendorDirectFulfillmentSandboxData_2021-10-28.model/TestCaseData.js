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

import {ApiClient} from '../ApiClient.js';
import {Scenario} from './Scenario.js';

/**
 * The TestCaseData model module.
 * @module vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/TestCaseData
 * @version 2021-10-28
 */
export class TestCaseData {
  /**
   * Constructs a new <code>TestCaseData</code>.
   * The set of test case data returned in response to the test data request.
   * @alias module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/TestCaseData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TestCaseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/TestCaseData} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/TestCaseData} The populated <code>TestCaseData</code> instance.
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
      obj = obj || new TestCaseData();
      if (data.hasOwnProperty('scenarios'))
        obj.scenarios = ApiClient.convertToType(data['scenarios'], [Scenario]);
    }
    return obj;
  }
}

/**
 * Set of use cases that describes the possible test scenarios.
 * @member {Array.<module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/Scenario>} scenarios
 */
TestCaseData.prototype.scenarios = undefined;


