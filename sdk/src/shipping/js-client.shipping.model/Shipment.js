/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
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
import {AcceptedRate} from './AcceptedRate.js';
import {Address} from './Address.js';
import {ClientReferenceId} from './ClientReferenceId.js';
import {ContainerList} from './ContainerList.js';
import {Party} from './Party.js';
import {ShipmentId} from './ShipmentId.js';

/**
 * The Shipment model module.
 * @module shipping/js-client.shipping.model/Shipment
 * @version v1
 */
export class Shipment {
  /**
   * Constructs a new <code>Shipment</code>.
   * The shipment related data.
   * @alias module:shipping/js-client.shipping.model/Shipment
   * @class
   * @param shipmentId {module:shipping/js-client.shipping.model/ShipmentId} 
   * @param clientReferenceId {module:shipping/js-client.shipping.model/ClientReferenceId} 
   * @param shipFrom {module:shipping/js-client.shipping.model/Address} 
   * @param shipTo {module:shipping/js-client.shipping.model/Address} 
   * @param containers {module:shipping/js-client.shipping.model/ContainerList} 
   */
  constructor(shipmentId, clientReferenceId, shipFrom, shipTo, containers) {
    this.shipmentId = shipmentId;
    this.clientReferenceId = clientReferenceId;
    this.shipFrom = shipFrom;
    this.shipTo = shipTo;
    this.containers = containers;
  }

  /**
   * Constructs a <code>Shipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping/js-client.shipping.model/Shipment} obj Optional instance to populate.
   * @return {module:shipping/js-client.shipping.model/Shipment} The populated <code>Shipment</code> instance.
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
      obj = obj || new Shipment();
      if (data.hasOwnProperty('shipmentId'))
        obj.shipmentId = ShipmentId.constructFromObject(data['shipmentId']);
      if (data.hasOwnProperty('clientReferenceId'))
        obj.clientReferenceId = ClientReferenceId.constructFromObject(data['clientReferenceId']);
      if (data.hasOwnProperty('shipFrom'))
        obj.shipFrom = Address.constructFromObject(data['shipFrom']);
      if (data.hasOwnProperty('shipTo'))
        obj.shipTo = Address.constructFromObject(data['shipTo']);
      if (data.hasOwnProperty('acceptedRate'))
        obj.acceptedRate = AcceptedRate.constructFromObject(data['acceptedRate']);
      if (data.hasOwnProperty('shipper'))
        obj.shipper = Party.constructFromObject(data['shipper']);
      if (data.hasOwnProperty('containers'))
        obj.containers = ContainerList.constructFromObject(data['containers']);
    }
    return obj;
  }
}

/**
 * @member {module:shipping/js-client.shipping.model/ShipmentId} shipmentId
 */
Shipment.prototype.shipmentId = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/ClientReferenceId} clientReferenceId
 */
Shipment.prototype.clientReferenceId = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/Address} shipFrom
 */
Shipment.prototype.shipFrom = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/Address} shipTo
 */
Shipment.prototype.shipTo = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/AcceptedRate} acceptedRate
 */
Shipment.prototype.acceptedRate = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/Party} shipper
 */
Shipment.prototype.shipper = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/ContainerList} containers
 */
Shipment.prototype.containers = undefined;


