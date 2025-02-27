/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import {ChargeRefundTransactions} from './ChargeRefundTransactions.js';
import {ModelDate} from './ModelDate.js';

/**
 * The ChargeRefundEvent model module.
 * @module financesV0/js-client.financesV0.model/ChargeRefundEvent
 * @version v0
 */
export class ChargeRefundEvent {
  /**
   * Constructs a new <code>ChargeRefundEvent</code>.
   * An event related to charge refund.
   * @alias module:financesV0/js-client.financesV0.model/ChargeRefundEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChargeRefundEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/ChargeRefundEvent} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/ChargeRefundEvent} The populated <code>ChargeRefundEvent</code> instance.
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
      obj = obj || new ChargeRefundEvent();
      if (data.hasOwnProperty('PostedDate'))
        obj.postedDate = ModelDate.constructFromObject(data['PostedDate']);
      if (data.hasOwnProperty('ReasonCode'))
        obj.reasonCode = ApiClient.convertToType(data['ReasonCode'], 'String');
      if (data.hasOwnProperty('ReasonCodeDescription'))
        obj.reasonCodeDescription = ApiClient.convertToType(data['ReasonCodeDescription'], 'String');
      if (data.hasOwnProperty('ChargeRefundTransactions'))
        obj.chargeRefundTransactions = ChargeRefundTransactions.constructFromObject(data['ChargeRefundTransactions']);
    }
    return obj;
  }
}

/**
 * The date and time when the financial event was posted.
 * @member {module:financesV0/js-client.financesV0.model/ModelDate} postedDate
 */
ChargeRefundEvent.prototype.postedDate = undefined;

/**
 * The reason given for a charge refund.  Example: `SubscriptionFeeCorrection`
 * @member {String} reasonCode
 */
ChargeRefundEvent.prototype.reasonCode = undefined;

/**
 * A description of the Reason Code.   Example: `SubscriptionFeeCorrection`
 * @member {String} reasonCodeDescription
 */
ChargeRefundEvent.prototype.reasonCodeDescription = undefined;

/**
 * The amount of the charge refund credit.
 * @member {module:financesV0/js-client.financesV0.model/ChargeRefundTransactions} chargeRefundTransactions
 */
ChargeRefundEvent.prototype.chargeRefundTransactions = undefined;


