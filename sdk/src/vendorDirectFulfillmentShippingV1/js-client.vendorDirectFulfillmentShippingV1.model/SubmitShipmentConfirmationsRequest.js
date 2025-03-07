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
import {ShipmentConfirmation} from './ShipmentConfirmation.js';

/**
 * The SubmitShipmentConfirmationsRequest model module.
 * @module vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/SubmitShipmentConfirmationsRequest
 * @version v1
 */
export class SubmitShipmentConfirmationsRequest {
  /**
   * Constructs a new <code>SubmitShipmentConfirmationsRequest</code>.
   * The request schema for the submitShipmentConfirmations operation.
   * @alias module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/SubmitShipmentConfirmationsRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SubmitShipmentConfirmationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/SubmitShipmentConfirmationsRequest} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/SubmitShipmentConfirmationsRequest} The populated <code>SubmitShipmentConfirmationsRequest</code> instance.
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
      obj = obj || new SubmitShipmentConfirmationsRequest();
      if (data.hasOwnProperty('shipmentConfirmations'))
        obj.shipmentConfirmations = ApiClient.convertToType(data['shipmentConfirmations'], [ShipmentConfirmation]);
    }
    return obj;
  }
}

/**
 * Array of ShipmentConfirmation objects, each representing confirmation details for a specific shipment.
 * @member {Array.<module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/ShipmentConfirmation>} shipmentConfirmations
 */
SubmitShipmentConfirmationsRequest.prototype.shipmentConfirmations = undefined;


