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

/**
 * The CancelSelfShipAppointmentResponse model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CancelSelfShipAppointmentResponse
 * @version 2024-03-20
 */
export class CancelSelfShipAppointmentResponse {
  /**
   * Constructs a new <code>CancelSelfShipAppointmentResponse</code>.
   * The `CancelSelfShipAppointment` response.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CancelSelfShipAppointmentResponse
   * @class
   * @param operationId {String} UUID for the given operation.
   */
  constructor(operationId) {
    this.operationId = operationId;
  }

  /**
   * Constructs a <code>CancelSelfShipAppointmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CancelSelfShipAppointmentResponse} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CancelSelfShipAppointmentResponse} The populated <code>CancelSelfShipAppointmentResponse</code> instance.
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
      obj = obj || new CancelSelfShipAppointmentResponse();
      if (data.hasOwnProperty('operationId'))
        obj.operationId = ApiClient.convertToType(data['operationId'], 'String');
    }
    return obj;
  }
}

/**
 * UUID for the given operation.
 * @member {String} operationId
 */
CancelSelfShipAppointmentResponse.prototype.operationId = undefined;


