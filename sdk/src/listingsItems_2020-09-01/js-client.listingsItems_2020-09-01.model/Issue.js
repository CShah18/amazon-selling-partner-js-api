/*
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listing Items API Use Case Guide](doc:listings-items-api-v2020-09-01-use-case-guide).
 *
 * OpenAPI spec version: 2020-09-01
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

/**
 * The Issue model module.
 * @module listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/Issue
 * @version 2020-09-01
 */
export class Issue {
  /**
   * Constructs a new <code>Issue</code>.
   * An issue with a listings item.
   * @alias module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/Issue
   * @class
   * @param code {String} An issue code that identifies the type of issue.
   * @param message {String} A message that describes the issue.
   * @param severity {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/Issue.SeverityEnum} The severity of the issue.
   */
  constructor(code, message, severity) {
    this.code = code;
    this.message = message;
    this.severity = severity;
  }

  /**
   * Constructs a <code>Issue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/Issue} obj Optional instance to populate.
   * @return {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/Issue} The populated <code>Issue</code> instance.
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
      obj = obj || new Issue();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('severity'))
        obj.severity = ApiClient.convertToType(data['severity'], 'String');
      if (data.hasOwnProperty('attributeName'))
        obj.attributeName = ApiClient.convertToType(data['attributeName'], 'String');
    }
    return obj;
  }
}

/**
 * An issue code that identifies the type of issue.
 * @member {String} code
 */
Issue.prototype.code = undefined;

/**
 * A message that describes the issue.
 * @member {String} message
 */
Issue.prototype.message = undefined;

/**
 * Allowed values for the <code>severity</code> property.
 * @enum {String}
 * @readonly
 */
Issue.SeverityEnum = {
  /**
   * value: "ERROR"
   * @const
   */
  ERROR: "ERROR",

  /**
   * value: "WARNING"
   * @const
   */
  WARNING: "WARNING",

  /**
   * value: "INFO"
   * @const
   */
  INFO: "INFO"
};

/**
 * The severity of the issue.
 * @member {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/Issue.SeverityEnum} severity
 */
Issue.prototype.severity = undefined;

/**
 * Name of the attribute associated with the issue, if applicable.
 * @member {String} attributeName
 */
Issue.prototype.attributeName = undefined;


