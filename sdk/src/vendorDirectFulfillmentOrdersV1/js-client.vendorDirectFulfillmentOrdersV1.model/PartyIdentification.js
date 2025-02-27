/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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
 * @module vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/PartyIdentification
 * @version v1
 */
export class PartyIdentification {
  /**
   * Constructs a new <code>PartyIdentification</code>.
   * Name, address and tax details of a party.
   * @alias module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/PartyIdentification
   * @class
   * @param partyId {String} Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details.
   */
  constructor(partyId) {
    this.partyId = partyId;
  }

  /**
   * Constructs a <code>PartyIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/PartyIdentification} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/PartyIdentification} The populated <code>PartyIdentification</code> instance.
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
      if (data.hasOwnProperty('partyId'))
        obj.partyId = ApiClient.convertToType(data['partyId'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('taxInfo'))
        obj.taxInfo = TaxRegistrationDetails.constructFromObject(data['taxInfo']);
    }
    return obj;
  }
}

/**
 * Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details.
 * @member {String} partyId
 */
PartyIdentification.prototype.partyId = undefined;

/**
 * Address details of the party.
 * @member {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/Address} address
 */
PartyIdentification.prototype.address = undefined;

/**
 * Tax registration details of the entity.
 * @member {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/TaxRegistrationDetails} taxInfo
 */
PartyIdentification.prototype.taxInfo = undefined;


