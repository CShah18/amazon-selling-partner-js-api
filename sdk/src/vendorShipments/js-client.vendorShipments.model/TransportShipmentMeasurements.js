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
import {Volume} from './Volume.js';
import {Weight} from './Weight.js';

/**
 * The TransportShipmentMeasurements model module.
 * @module vendorShipments/js-client.vendorShipments.model/TransportShipmentMeasurements
 * @version v1
 */
export class TransportShipmentMeasurements {
  /**
   * Constructs a new <code>TransportShipmentMeasurements</code>.
   * Shipment measurement details.
   * @alias module:vendorShipments/js-client.vendorShipments.model/TransportShipmentMeasurements
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransportShipmentMeasurements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorShipments/js-client.vendorShipments.model/TransportShipmentMeasurements} obj Optional instance to populate.
   * @return {module:vendorShipments/js-client.vendorShipments.model/TransportShipmentMeasurements} The populated <code>TransportShipmentMeasurements</code> instance.
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
      obj = obj || new TransportShipmentMeasurements();
      if (data.hasOwnProperty('totalCartonCount'))
        obj.totalCartonCount = ApiClient.convertToType(data['totalCartonCount'], 'Number');
      if (data.hasOwnProperty('totalPalletStackable'))
        obj.totalPalletStackable = ApiClient.convertToType(data['totalPalletStackable'], 'Number');
      if (data.hasOwnProperty('totalPalletNonStackable'))
        obj.totalPalletNonStackable = ApiClient.convertToType(data['totalPalletNonStackable'], 'Number');
      if (data.hasOwnProperty('shipmentWeight'))
        obj.shipmentWeight = Weight.constructFromObject(data['shipmentWeight']);
      if (data.hasOwnProperty('shipmentVolume'))
        obj.shipmentVolume = Volume.constructFromObject(data['shipmentVolume']);
    }
    return obj;
  }
}

/**
 * Total number of cartons present in the shipment. Provide the cartonCount only for non-palletized shipments.
 * @member {Number} totalCartonCount
 */
TransportShipmentMeasurements.prototype.totalCartonCount = undefined;

/**
 * Total number of Stackable Pallets present in the shipment.
 * @member {Number} totalPalletStackable
 */
TransportShipmentMeasurements.prototype.totalPalletStackable = undefined;

/**
 * Total number of Non Stackable Pallets present in the shipment.
 * @member {Number} totalPalletNonStackable
 */
TransportShipmentMeasurements.prototype.totalPalletNonStackable = undefined;

/**
 * Total Weight of the shipment.
 * @member {module:vendorShipments/js-client.vendorShipments.model/Weight} shipmentWeight
 */
TransportShipmentMeasurements.prototype.shipmentWeight = undefined;

/**
 * Total Volume of the shipment.
 * @member {module:vendorShipments/js-client.vendorShipments.model/Volume} shipmentVolume
 */
TransportShipmentMeasurements.prototype.shipmentVolume = undefined;


