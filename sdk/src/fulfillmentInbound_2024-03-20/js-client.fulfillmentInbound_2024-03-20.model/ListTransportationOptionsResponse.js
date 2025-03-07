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
import {Pagination} from './Pagination.js';
import {TransportationOption} from './TransportationOption.js';

/**
 * The ListTransportationOptionsResponse model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ListTransportationOptionsResponse
 * @version 2024-03-20
 */
export class ListTransportationOptionsResponse {
  /**
   * Constructs a new <code>ListTransportationOptionsResponse</code>.
   * The `listTransportationOptions` response.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ListTransportationOptionsResponse
   * @class
   * @param transportationOptions {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/TransportationOption>} Transportation options generated for the placement option.
   */
  constructor(transportationOptions) {
    this.transportationOptions = transportationOptions;
  }

  /**
   * Constructs a <code>ListTransportationOptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ListTransportationOptionsResponse} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ListTransportationOptionsResponse} The populated <code>ListTransportationOptionsResponse</code> instance.
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
      obj = obj || new ListTransportationOptionsResponse();
      if (data.hasOwnProperty('pagination'))
        obj.pagination = Pagination.constructFromObject(data['pagination']);
      if (data.hasOwnProperty('transportationOptions'))
        obj.transportationOptions = ApiClient.convertToType(data['transportationOptions'], [TransportationOption]);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/Pagination} pagination
 */
ListTransportationOptionsResponse.prototype.pagination = undefined;

/**
 * Transportation options generated for the placement option.
 * @member {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/TransportationOption>} transportationOptions
 */
ListTransportationOptionsResponse.prototype.transportationOptions = undefined;


