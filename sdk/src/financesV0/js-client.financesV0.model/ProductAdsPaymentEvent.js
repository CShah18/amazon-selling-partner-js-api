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
import {Currency} from './Currency.js';
import {ModelDate} from './ModelDate.js';

/**
 * The ProductAdsPaymentEvent model module.
 * @module financesV0/js-client.financesV0.model/ProductAdsPaymentEvent
 * @version v0
 */
export class ProductAdsPaymentEvent {
  /**
   * Constructs a new <code>ProductAdsPaymentEvent</code>.
   * A Sponsored Products payment event.
   * @alias module:financesV0/js-client.financesV0.model/ProductAdsPaymentEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProductAdsPaymentEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/ProductAdsPaymentEvent} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/ProductAdsPaymentEvent} The populated <code>ProductAdsPaymentEvent</code> instance.
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
      obj = obj || new ProductAdsPaymentEvent();
      if (data.hasOwnProperty('postedDate'))
        obj.postedDate = ModelDate.constructFromObject(data['postedDate']);
      if (data.hasOwnProperty('transactionType'))
        obj.transactionType = ApiClient.convertToType(data['transactionType'], 'String');
      if (data.hasOwnProperty('invoiceId'))
        obj.invoiceId = ApiClient.convertToType(data['invoiceId'], 'String');
      if (data.hasOwnProperty('baseValue'))
        obj.baseValue = Currency.constructFromObject(data['baseValue']);
      if (data.hasOwnProperty('taxValue'))
        obj.taxValue = Currency.constructFromObject(data['taxValue']);
      if (data.hasOwnProperty('transactionValue'))
        obj.transactionValue = Currency.constructFromObject(data['transactionValue']);
    }
    return obj;
  }
}

/**
 * The date and time when the financial event was posted.
 * @member {module:financesV0/js-client.financesV0.model/ModelDate} postedDate
 */
ProductAdsPaymentEvent.prototype.postedDate = undefined;

/**
 * Indicates if the transaction is for a charge or a refund.  Possible values:  * charge - Charge  * refund - Refund
 * @member {String} transactionType
 */
ProductAdsPaymentEvent.prototype.transactionType = undefined;

/**
 * Identifier for the invoice that the transaction appears in.
 * @member {String} invoiceId
 */
ProductAdsPaymentEvent.prototype.invoiceId = undefined;

/**
 * Base amount of the transaction, before tax.
 * @member {module:financesV0/js-client.financesV0.model/Currency} baseValue
 */
ProductAdsPaymentEvent.prototype.baseValue = undefined;

/**
 * Tax amount of the transaction.
 * @member {module:financesV0/js-client.financesV0.model/Currency} taxValue
 */
ProductAdsPaymentEvent.prototype.taxValue = undefined;

/**
 * The total amount of the transaction. Equal to baseValue + taxValue.
 * @member {module:financesV0/js-client.financesV0.model/Currency} transactionValue
 */
ProductAdsPaymentEvent.prototype.transactionValue = undefined;


