/*
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
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
import {Container} from './Container.js';
import {PartyIdentification} from './PartyIdentification.js';

/**
 * The ShippingLabelRequest model module.
 * @module vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShippingLabelRequest
 * @version v1
 */
export class ShippingLabelRequest {
  /**
   * Constructs a new <code>ShippingLabelRequest</code>.
   * Represents the request payload for creating a shipping label, containing the purchase order number, selling party, ship from party, and a list of containers or packages in the shipment.
   * @alias module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShippingLabelRequest
   * @class
   * @param purchaseOrderNumber {String} Purchase order number of the order for which to create a shipping label.
   * @param sellingParty {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} ID of the selling party or vendor.
   * @param shipFromParty {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} Warehouse code of vendor.
   */
  constructor(purchaseOrderNumber, sellingParty, shipFromParty) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    this.sellingParty = sellingParty;
    this.shipFromParty = shipFromParty;
  }

  /**
   * Constructs a <code>ShippingLabelRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShippingLabelRequest} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShippingLabelRequest} The populated <code>ShippingLabelRequest</code> instance.
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
      obj = obj || new ShippingLabelRequest();
      if (data.hasOwnProperty('purchaseOrderNumber'))
        obj.purchaseOrderNumber = ApiClient.convertToType(data['purchaseOrderNumber'], 'String');
      if (data.hasOwnProperty('sellingParty'))
        obj.sellingParty = PartyIdentification.constructFromObject(data['sellingParty']);
      if (data.hasOwnProperty('shipFromParty'))
        obj.shipFromParty = PartyIdentification.constructFromObject(data['shipFromParty']);
      if (data.hasOwnProperty('containers'))
        obj.containers = ApiClient.convertToType(data['containers'], [Container]);
    }
    return obj;
  }
}

/**
 * Purchase order number of the order for which to create a shipping label.
 * @member {String} purchaseOrderNumber
 */
ShippingLabelRequest.prototype.purchaseOrderNumber = undefined;

/**
 * ID of the selling party or vendor.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} sellingParty
 */
ShippingLabelRequest.prototype.sellingParty = undefined;

/**
 * Warehouse code of vendor.
 * @member {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/PartyIdentification} shipFromParty
 */
ShippingLabelRequest.prototype.shipFromParty = undefined;

/**
 * A list of the packages in this shipment.
 * @member {Array.<module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/Container>} containers
 */
ShippingLabelRequest.prototype.containers = undefined;


