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
import {ModelDate} from './ModelDate.js';
import {RemovalShipmentItemAdjustment} from './RemovalShipmentItemAdjustment.js';

/**
 * The RemovalShipmentAdjustmentEvent model module.
 * @module financesV0/js-client.financesV0.model/RemovalShipmentAdjustmentEvent
 * @version v0
 */
export class RemovalShipmentAdjustmentEvent {
  /**
   * Constructs a new <code>RemovalShipmentAdjustmentEvent</code>.
   * A financial adjustment event for FBA liquidated inventory. A positive value indicates money owed to Amazon by the buyer (for example, when the charge was incorrectly calculated as less than it should be). A negative value indicates a full or partial refund owed to the buyer (for example, when the buyer receives damaged items or fewer items than ordered).
   * @alias module:financesV0/js-client.financesV0.model/RemovalShipmentAdjustmentEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RemovalShipmentAdjustmentEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/RemovalShipmentAdjustmentEvent} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/RemovalShipmentAdjustmentEvent} The populated <code>RemovalShipmentAdjustmentEvent</code> instance.
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
      obj = obj || new RemovalShipmentAdjustmentEvent();
      if (data.hasOwnProperty('PostedDate'))
        obj.postedDate = ModelDate.constructFromObject(data['PostedDate']);
      if (data.hasOwnProperty('AdjustmentEventId'))
        obj.adjustmentEventId = ApiClient.convertToType(data['AdjustmentEventId'], 'String');
      if (data.hasOwnProperty('MerchantOrderId'))
        obj.merchantOrderId = ApiClient.convertToType(data['MerchantOrderId'], 'String');
      if (data.hasOwnProperty('OrderId'))
        obj.orderId = ApiClient.convertToType(data['OrderId'], 'String');
      if (data.hasOwnProperty('TransactionType'))
        obj.transactionType = ApiClient.convertToType(data['TransactionType'], 'String');
      if (data.hasOwnProperty('RemovalShipmentItemAdjustmentList'))
        obj.removalShipmentItemAdjustmentList = ApiClient.convertToType(data['RemovalShipmentItemAdjustmentList'], [RemovalShipmentItemAdjustment]);
    }
    return obj;
  }
}

/**
 * The date when the financial event was posted.
 * @member {module:financesV0/js-client.financesV0.model/ModelDate} postedDate
 */
RemovalShipmentAdjustmentEvent.prototype.postedDate = undefined;

/**
 * The unique identifier for the adjustment event.
 * @member {String} adjustmentEventId
 */
RemovalShipmentAdjustmentEvent.prototype.adjustmentEventId = undefined;

/**
 * The merchant removal orderId.
 * @member {String} merchantOrderId
 */
RemovalShipmentAdjustmentEvent.prototype.merchantOrderId = undefined;

/**
 * The orderId for shipping inventory.
 * @member {String} orderId
 */
RemovalShipmentAdjustmentEvent.prototype.orderId = undefined;

/**
 * The type of removal order.  Possible values:  * WHOLESALE_LIQUIDATION.
 * @member {String} transactionType
 */
RemovalShipmentAdjustmentEvent.prototype.transactionType = undefined;

/**
 * A comma-delimited list of Removal shipmentItemAdjustment details for FBA inventory.
 * @member {Array.<module:financesV0/js-client.financesV0.model/RemovalShipmentItemAdjustment>} removalShipmentItemAdjustmentList
 */
RemovalShipmentAdjustmentEvent.prototype.removalShipmentItemAdjustmentList = undefined;


