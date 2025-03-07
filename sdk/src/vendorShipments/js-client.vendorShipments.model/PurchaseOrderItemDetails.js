/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
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
import {Money} from './Money.js';

/**
 * The PurchaseOrderItemDetails model module.
 * @module vendorShipments/js-client.vendorShipments.model/PurchaseOrderItemDetails
 * @version v1
 */
export class PurchaseOrderItemDetails {
  /**
   * Constructs a new <code>PurchaseOrderItemDetails</code>.
   * Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate.
   * @alias module:vendorShipments/js-client.vendorShipments.model/PurchaseOrderItemDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PurchaseOrderItemDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorShipments/js-client.vendorShipments.model/PurchaseOrderItemDetails} obj Optional instance to populate.
   * @return {module:vendorShipments/js-client.vendorShipments.model/PurchaseOrderItemDetails} The populated <code>PurchaseOrderItemDetails</code> instance.
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
      obj = obj || new PurchaseOrderItemDetails();
      if (data.hasOwnProperty('maximumRetailPrice'))
        obj.maximumRetailPrice = Money.constructFromObject(data['maximumRetailPrice']);
    }
    return obj;
  }
}

/**
 * Maximum retail price of the item being shipped.
 * @member {module:vendorShipments/js-client.vendorShipments.model/Money} maximumRetailPrice
 */
PurchaseOrderItemDetails.prototype.maximumRetailPrice = undefined;


