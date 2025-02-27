/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * OpenAPI spec version: 2024-05-09
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
import {LabelOwner} from './LabelOwner.js';
import {PrepInstruction} from './PrepInstruction.js';
import {PrepOwner} from './PrepOwner.js';

/**
 * The PrepDetails model module.
 * @module awd_2024-05-09/js-client.awd_2024-05-09.model/PrepDetails
 * @version 2024-05-09
 */
export class PrepDetails {
  /**
   * Constructs a new <code>PrepDetails</code>.
   * The preparation details for a product. This contains the prep category, prep owner, and label owner. Prep instructions are generated based on the specified category.
   * @alias module:awd_2024-05-09/js-client.awd_2024-05-09.model/PrepDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PrepDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:awd_2024-05-09/js-client.awd_2024-05-09.model/PrepDetails} obj Optional instance to populate.
   * @return {module:awd_2024-05-09/js-client.awd_2024-05-09.model/PrepDetails} The populated <code>PrepDetails</code> instance.
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
      obj = obj || new PrepDetails();
      if (data.hasOwnProperty('labelOwner'))
        obj.labelOwner = LabelOwner.constructFromObject(data['labelOwner']);
      if (data.hasOwnProperty('prepCategory'))
        obj.prepCategory = ApiClient.convertToType(data['prepCategory'], 'String');
      if (data.hasOwnProperty('prepInstructions'))
        obj.prepInstructions = ApiClient.convertToType(data['prepInstructions'], [PrepInstruction]);
      if (data.hasOwnProperty('prepOwner'))
        obj.prepOwner = PrepOwner.constructFromObject(data['prepOwner']);
    }
    return obj;
  }
}

/**
 * @member {module:awd_2024-05-09/js-client.awd_2024-05-09.model/LabelOwner} labelOwner
 */
PrepDetails.prototype.labelOwner = undefined;

/**
 * The preparation category for shipping an item to Amazon's fulfillment network.
 * @member {String} prepCategory
 */
PrepDetails.prototype.prepCategory = undefined;

/**
 * Information that pertains to the preparation of inbound products. This is generated based on the specified category.
 * @member {Array.<module:awd_2024-05-09/js-client.awd_2024-05-09.model/PrepInstruction>} prepInstructions
 */
PrepDetails.prototype.prepInstructions = undefined;

/**
 * @member {module:awd_2024-05-09/js-client.awd_2024-05-09.model/PrepOwner} prepOwner
 */
PrepDetails.prototype.prepOwner = undefined;


