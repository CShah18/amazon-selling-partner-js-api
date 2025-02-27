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
import {ExpirationDetails} from './ExpirationDetails.js';
import {InventoryDetails} from './InventoryDetails.js';

/**
 * The InventorySummary model module.
 * @module awd_2024-05-09/js-client.awd_2024-05-09.model/InventorySummary
 * @version 2024-05-09
 */
export class InventorySummary {
  /**
   * Constructs a new <code>InventorySummary</code>.
   * Summary of inventory per SKU.
   * @alias module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventorySummary
   * @class
   * @param sku {String} The seller or merchant SKU.
   */
  constructor(sku) {
    this.sku = sku;
  }

  /**
   * Constructs a <code>InventorySummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventorySummary} obj Optional instance to populate.
   * @return {module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventorySummary} The populated <code>InventorySummary</code> instance.
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
      obj = obj || new InventorySummary();
      if (data.hasOwnProperty('expirationDetails'))
        obj.expirationDetails = ApiClient.convertToType(data['expirationDetails'], [ExpirationDetails]);
      if (data.hasOwnProperty('inventoryDetails'))
        obj.inventoryDetails = InventoryDetails.constructFromObject(data['inventoryDetails']);
      if (data.hasOwnProperty('sku'))
        obj.sku = ApiClient.convertToType(data['sku'], 'String');
      if (data.hasOwnProperty('totalInboundQuantity'))
        obj.totalInboundQuantity = ApiClient.convertToType(data['totalInboundQuantity'], 'Number');
      if (data.hasOwnProperty('totalOnhandQuantity'))
        obj.totalOnhandQuantity = ApiClient.convertToType(data['totalOnhandQuantity'], 'Number');
    }
    return obj;
  }
}

/**
 * The expiration details of the inventory. This object will only appear if the `details` parameter in the request is set to `SHOW`.
 * @member {Array.<module:awd_2024-05-09/js-client.awd_2024-05-09.model/ExpirationDetails>} expirationDetails
 */
InventorySummary.prototype.expirationDetails = undefined;

/**
 * @member {module:awd_2024-05-09/js-client.awd_2024-05-09.model/InventoryDetails} inventoryDetails
 */
InventorySummary.prototype.inventoryDetails = undefined;

/**
 * The seller or merchant SKU.
 * @member {String} sku
 */
InventorySummary.prototype.sku = undefined;

/**
 * Total quantity that is in-transit from the seller and has not yet been received at an AWD Distribution Center
 * @member {Number} totalInboundQuantity
 */
InventorySummary.prototype.totalInboundQuantity = undefined;

/**
 * Total quantity that is present in AWD distribution centers.
 * @member {Number} totalOnhandQuantity
 */
InventorySummary.prototype.totalOnhandQuantity = undefined;


