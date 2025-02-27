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
import {Address} from './Address.js';
import {TaxRegistrationDetails} from './TaxRegistrationDetails.js';

/**
 * The PartyIdentification model module.
 * @module vendorShipments/js-client.vendorShipments.model/PartyIdentification
 * @version v1
 */
export class PartyIdentification {
  /**
   * Constructs a new <code>PartyIdentification</code>.
   * Name/Address and tax details of the party.
   * @alias module:vendorShipments/js-client.vendorShipments.model/PartyIdentification
   * @class
   * @param partyId {String} Assigned identification for the party.
   */
  constructor(partyId) {
    this.partyId = partyId;
  }

  /**
   * Constructs a <code>PartyIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorShipments/js-client.vendorShipments.model/PartyIdentification} obj Optional instance to populate.
   * @return {module:vendorShipments/js-client.vendorShipments.model/PartyIdentification} The populated <code>PartyIdentification</code> instance.
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
      obj = obj || new PartyIdentification();
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('partyId'))
        obj.partyId = ApiClient.convertToType(data['partyId'], 'String');
      if (data.hasOwnProperty('taxRegistrationDetails'))
        obj.taxRegistrationDetails = ApiClient.convertToType(data['taxRegistrationDetails'], [TaxRegistrationDetails]);
    }
    return obj;
  }
}

/**
 * Identification of the party by address.
 * @member {module:vendorShipments/js-client.vendorShipments.model/Address} address
 */
PartyIdentification.prototype.address = undefined;

/**
 * Assigned identification for the party.
 * @member {String} partyId
 */
PartyIdentification.prototype.partyId = undefined;

/**
 * Tax registration details of the entity.
 * @member {Array.<module:vendorShipments/js-client.vendorShipments.model/TaxRegistrationDetails>} taxRegistrationDetails
 */
PartyIdentification.prototype.taxRegistrationDetails = undefined;


