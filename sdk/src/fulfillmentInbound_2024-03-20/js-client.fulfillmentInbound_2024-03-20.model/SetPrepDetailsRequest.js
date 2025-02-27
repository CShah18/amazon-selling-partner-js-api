/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
import {MskuPrepDetailInput} from './MskuPrepDetailInput.js';

/**
 * The SetPrepDetailsRequest model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/SetPrepDetailsRequest
 * @version 2024-03-20
 */
export class SetPrepDetailsRequest {
  /**
   * Constructs a new <code>SetPrepDetailsRequest</code>.
   * The `setPrepDetails` request.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/SetPrepDetailsRequest
   * @class
   * @param marketplaceId {String} The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
   * @param mskuPrepDetails {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/MskuPrepDetailInput>} A list of MSKUs and related prep details.
   */
  constructor(marketplaceId, mskuPrepDetails) {
    this.marketplaceId = marketplaceId;
    this.mskuPrepDetails = mskuPrepDetails;
  }

  /**
   * Constructs a <code>SetPrepDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/SetPrepDetailsRequest} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/SetPrepDetailsRequest} The populated <code>SetPrepDetailsRequest</code> instance.
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
      obj = obj || new SetPrepDetailsRequest();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('mskuPrepDetails'))
        obj.mskuPrepDetails = ApiClient.convertToType(data['mskuPrepDetails'], [MskuPrepDetailInput]);
    }
    return obj;
  }
}

/**
 * The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
 * @member {String} marketplaceId
 */
SetPrepDetailsRequest.prototype.marketplaceId = undefined;

/**
 * A list of MSKUs and related prep details.
 * @member {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/MskuPrepDetailInput>} mskuPrepDetails
 */
SetPrepDetailsRequest.prototype.mskuPrepDetails = undefined;


