/*
 * The Selling Partner API for Transfers.
 * The Selling Partner API for Transfers enables selling partners to retrieve payment methods and initiate payouts for their seller accounts. This API supports the following marketplaces: DE, FR, IT, ES, SE, NL, PL, and BE.
 *
 * OpenAPI spec version: 2024-06-01
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
import {AssignmentType} from './AssignmentType.js';
import {ExpiryDate} from './ExpiryDate.js';
import {PaymentMethodType} from './PaymentMethodType.js';

/**
 * The PaymentMethodDetails model module.
 * @module transfers_2024-06-01/js-client.transfers_2024-06-01.model/PaymentMethodDetails
 * @version 2024-06-01
 */
export class PaymentMethodDetails {
  /**
   * Constructs a new <code>PaymentMethodDetails</code>.
   * The details of a payment method.
   * @alias module:transfers_2024-06-01/js-client.transfers_2024-06-01.model/PaymentMethodDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PaymentMethodDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:transfers_2024-06-01/js-client.transfers_2024-06-01.model/PaymentMethodDetails} obj Optional instance to populate.
   * @return {module:transfers_2024-06-01/js-client.transfers_2024-06-01.model/PaymentMethodDetails} The populated <code>PaymentMethodDetails</code> instance.
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
      obj = obj || new PaymentMethodDetails();
      if (data.hasOwnProperty('accountHolderName'))
        obj.accountHolderName = ApiClient.convertToType(data['accountHolderName'], 'String');
      if (data.hasOwnProperty('paymentMethodId'))
        obj.paymentMethodId = ApiClient.convertToType(data['paymentMethodId'], 'String');
      if (data.hasOwnProperty('tail'))
        obj.tail = ApiClient.convertToType(data['tail'], 'String');
      if (data.hasOwnProperty('expiryDate'))
        obj.expiryDate = ExpiryDate.constructFromObject(data['expiryDate']);
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('paymentMethodType'))
        obj.paymentMethodType = PaymentMethodType.constructFromObject(data['paymentMethodType']);
      if (data.hasOwnProperty('assignmentType'))
        obj.assignmentType = AssignmentType.constructFromObject(data['assignmentType']);
    }
    return obj;
  }
}

/**
 * The name of the account holder who is registered for the payment method.
 * @member {String} accountHolderName
 */
PaymentMethodDetails.prototype.accountHolderName = undefined;

/**
 * The payment method identifier.
 * @member {String} paymentMethodId
 */
PaymentMethodDetails.prototype.paymentMethodId = undefined;

/**
 * The last three or four digits of the payment method.
 * @member {String} tail
 */
PaymentMethodDetails.prototype.tail = undefined;

/**
 * The expiration date of the card used for payment.
 * @member {module:transfers_2024-06-01/js-client.transfers_2024-06-01.model/ExpiryDate} expiryDate
 */
PaymentMethodDetails.prototype.expiryDate = undefined;

/**
 * The two-letter country code in ISO 3166-1 alpha-2 format. For payment methods in the `card` category, the code is for the country where the card was issued. For payment methods in the `bank account` category, the code is for the country where the account is located.
 * @member {String} countryCode
 */
PaymentMethodDetails.prototype.countryCode = undefined;

/**
 * The payment method type.
 * @member {module:transfers_2024-06-01/js-client.transfers_2024-06-01.model/PaymentMethodType} paymentMethodType
 */
PaymentMethodDetails.prototype.paymentMethodType = undefined;

/**
 * The payment method assignment type, whether it is assigned as default to the given marketplace or not.
 * @member {module:transfers_2024-06-01/js-client.transfers_2024-06-01.model/AssignmentType} assignmentType
 */
PaymentMethodDetails.prototype.assignmentType = undefined;


