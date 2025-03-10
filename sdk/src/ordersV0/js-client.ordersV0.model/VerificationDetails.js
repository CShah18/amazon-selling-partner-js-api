/*
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
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
import {PrescriptionDetail} from './PrescriptionDetail.js';

/**
 * The VerificationDetails model module.
 * @module ordersV0/js-client.ordersV0.model/VerificationDetails
 * @version v0
 */
export class VerificationDetails {
  /**
   * Constructs a new <code>VerificationDetails</code>.
   * Additional information related to the verification of a regulated order.
   * @alias module:ordersV0/js-client.ordersV0.model/VerificationDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VerificationDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ordersV0/js-client.ordersV0.model/VerificationDetails} obj Optional instance to populate.
   * @return {module:ordersV0/js-client.ordersV0.model/VerificationDetails} The populated <code>VerificationDetails</code> instance.
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
      obj = obj || new VerificationDetails();
      if (data.hasOwnProperty('prescriptionDetail'))
        obj.prescriptionDetail = PrescriptionDetail.constructFromObject(data['prescriptionDetail']);
    }
    return obj;
  }
}

/**
 * Information regarding the prescription tied to the order.
 * @member {module:ordersV0/js-client.ordersV0.model/PrescriptionDetail} prescriptionDetail
 */
VerificationDetails.prototype.prescriptionDetail = undefined;


