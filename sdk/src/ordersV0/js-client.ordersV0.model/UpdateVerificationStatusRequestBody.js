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
import {VerificationDetails} from './VerificationDetails.js';
import {VerificationStatus} from './VerificationStatus.js';

/**
 * The UpdateVerificationStatusRequestBody model module.
 * @module ordersV0/js-client.ordersV0.model/UpdateVerificationStatusRequestBody
 * @version v0
 */
export class UpdateVerificationStatusRequestBody {
  /**
   * Constructs a new <code>UpdateVerificationStatusRequestBody</code>.
   * The updated values of the `VerificationStatus` field.
   * @alias module:ordersV0/js-client.ordersV0.model/UpdateVerificationStatusRequestBody
   * @class
   * @param externalReviewerId {String} The identifier of the order's regulated information reviewer.
   */
  constructor(externalReviewerId) {
    this.externalReviewerId = externalReviewerId;
  }

  /**
   * Constructs a <code>UpdateVerificationStatusRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ordersV0/js-client.ordersV0.model/UpdateVerificationStatusRequestBody} obj Optional instance to populate.
   * @return {module:ordersV0/js-client.ordersV0.model/UpdateVerificationStatusRequestBody} The populated <code>UpdateVerificationStatusRequestBody</code> instance.
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
      obj = obj || new UpdateVerificationStatusRequestBody();
      if (data.hasOwnProperty('status'))
        obj.status = VerificationStatus.constructFromObject(data['status']);
      if (data.hasOwnProperty('externalReviewerId'))
        obj.externalReviewerId = ApiClient.convertToType(data['externalReviewerId'], 'String');
      if (data.hasOwnProperty('rejectionReasonId'))
        obj.rejectionReasonId = ApiClient.convertToType(data['rejectionReasonId'], 'String');
      if (data.hasOwnProperty('verificationDetails'))
        obj.verificationDetails = VerificationDetails.constructFromObject(data['verificationDetails']);
    }
    return obj;
  }
}

/**
 * The new verification status of the order.
 * @member {module:ordersV0/js-client.ordersV0.model/VerificationStatus} status
 */
UpdateVerificationStatusRequestBody.prototype.status = undefined;

/**
 * The identifier of the order's regulated information reviewer.
 * @member {String} externalReviewerId
 */
UpdateVerificationStatusRequestBody.prototype.externalReviewerId = undefined;

/**
 * The unique identifier of the rejection reason used for rejecting the order's regulated information. Only required if the new status is rejected.
 * @member {String} rejectionReasonId
 */
UpdateVerificationStatusRequestBody.prototype.rejectionReasonId = undefined;

/**
 * Additional information regarding the verification of the order.
 * @member {module:ordersV0/js-client.ordersV0.model/VerificationDetails} verificationDetails
 */
UpdateVerificationStatusRequestBody.prototype.verificationDetails = undefined;


