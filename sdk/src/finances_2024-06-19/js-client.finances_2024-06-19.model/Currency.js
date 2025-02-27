/*
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * OpenAPI spec version: 2024-06-19
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
import {BigDecimal} from './BigDecimal.js';

/**
 * The Currency model module.
 * @module finances_2024-06-19/js-client.finances_2024-06-19.model/Currency
 * @version 2024-06-19
 */
export class Currency {
  /**
   * Constructs a new <code>Currency</code>.
   * A currency type and amount.
   * @alias module:finances_2024-06-19/js-client.finances_2024-06-19.model/Currency
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_2024-06-19/js-client.finances_2024-06-19.model/Currency} obj Optional instance to populate.
   * @return {module:finances_2024-06-19/js-client.finances_2024-06-19.model/Currency} The populated <code>Currency</code> instance.
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
      obj = obj || new Currency();
      if (data.hasOwnProperty('currencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['currencyCode'], 'String');
      if (data.hasOwnProperty('currencyAmount'))
        obj.currencyAmount = BigDecimal.constructFromObject(data['currencyAmount']);
    }
    return obj;
  }
}

/**
 * The three-digit currency code in ISO 4217 format.
 * @member {String} currencyCode
 */
Currency.prototype.currencyCode = undefined;

/**
 * The monetary value.
 * @member {module:finances_2024-06-19/js-client.finances_2024-06-19.model/BigDecimal} currencyAmount
 */
Currency.prototype.currencyAmount = undefined;


