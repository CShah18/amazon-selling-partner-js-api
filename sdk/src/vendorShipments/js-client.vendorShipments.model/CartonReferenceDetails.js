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

/**
 * The CartonReferenceDetails model module.
 * @module vendorShipments/js-client.vendorShipments.model/CartonReferenceDetails
 * @version v1
 */
export class CartonReferenceDetails {
  /**
   * Constructs a new <code>CartonReferenceDetails</code>.
   * Carton reference details.
   * @alias module:vendorShipments/js-client.vendorShipments.model/CartonReferenceDetails
   * @class
   * @param cartonReferenceNumbers {Array.<String>} Array of reference numbers for the carton that are part of this pallet/shipment. Please provide the cartonSequenceNumber from the 'cartons' segment to refer to that carton's details here.
   */
  constructor(cartonReferenceNumbers) {
    this.cartonReferenceNumbers = cartonReferenceNumbers;
  }

  /**
   * Constructs a <code>CartonReferenceDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorShipments/js-client.vendorShipments.model/CartonReferenceDetails} obj Optional instance to populate.
   * @return {module:vendorShipments/js-client.vendorShipments.model/CartonReferenceDetails} The populated <code>CartonReferenceDetails</code> instance.
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
      obj = obj || new CartonReferenceDetails();
      if (data.hasOwnProperty('cartonCount'))
        obj.cartonCount = ApiClient.convertToType(data['cartonCount'], 'Number');
      if (data.hasOwnProperty('cartonReferenceNumbers'))
        obj.cartonReferenceNumbers = ApiClient.convertToType(data['cartonReferenceNumbers'], ['String']);
    }
    return obj;
  }
}

/**
 * Pallet level carton count is mandatory for single item pallet and optional for mixed item pallet.
 * @member {Number} cartonCount
 */
CartonReferenceDetails.prototype.cartonCount = undefined;

/**
 * Array of reference numbers for the carton that are part of this pallet/shipment. Please provide the cartonSequenceNumber from the 'cartons' segment to refer to that carton's details here.
 * @member {Array.<String>} cartonReferenceNumbers
 */
CartonReferenceDetails.prototype.cartonReferenceNumbers = undefined;


