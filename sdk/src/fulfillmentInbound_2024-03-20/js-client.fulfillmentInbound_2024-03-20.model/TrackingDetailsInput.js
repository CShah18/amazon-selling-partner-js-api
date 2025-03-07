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
import {LtlTrackingDetailInput} from './LtlTrackingDetailInput.js';
import {SpdTrackingDetailInput} from './SpdTrackingDetailInput.js';

/**
 * The TrackingDetailsInput model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/TrackingDetailsInput
 * @version 2024-03-20
 */
export class TrackingDetailsInput {
  /**
   * Constructs a new <code>TrackingDetailsInput</code>.
   * Tracking information input for Less-Than-Truckload (LTL) and Small Parcel Delivery (SPD) shipments.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/TrackingDetailsInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackingDetailsInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/TrackingDetailsInput} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/TrackingDetailsInput} The populated <code>TrackingDetailsInput</code> instance.
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
      obj = obj || new TrackingDetailsInput();
      if (data.hasOwnProperty('ltlTrackingDetail'))
        obj.ltlTrackingDetail = LtlTrackingDetailInput.constructFromObject(data['ltlTrackingDetail']);
      if (data.hasOwnProperty('spdTrackingDetail'))
        obj.spdTrackingDetail = SpdTrackingDetailInput.constructFromObject(data['spdTrackingDetail']);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/LtlTrackingDetailInput} ltlTrackingDetail
 */
TrackingDetailsInput.prototype.ltlTrackingDetail = undefined;

/**
 * @member {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/SpdTrackingDetailInput} spdTrackingDetail
 */
TrackingDetailsInput.prototype.spdTrackingDetail = undefined;


