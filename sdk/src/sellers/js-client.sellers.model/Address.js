/*
 * The Selling Partner API for Sellers
 * The Selling Partner API for Sellers lets you retrieve information on behalf of sellers about their seller account, such as the marketplaces they participate in. Along with listing the marketplaces that a seller can sell in, the API also provides additional information about the marketplace such as the default language and the default currency. The API also provides seller-specific information such as whether the seller has suspended listings in that marketplace.
 *
 * OpenAPI spec version: v1
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
 * The Address model module.
 * @module sellers/js-client.sellers.model/Address
 * @version v1
 */
export class Address {
  /**
   * Constructs a new <code>Address</code>.
   * Represents an address
   * @alias module:sellers/js-client.sellers.model/Address
   * @class
   * @param addressLine1 {String} Street address information.
   * @param countryCode {String} The country code in two-character ISO 3166-1 alpha-2 format.
   */
  constructor(addressLine1, countryCode) {
    this.addressLine1 = addressLine1;
    this.countryCode = countryCode;
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:sellers/js-client.sellers.model/Address} obj Optional instance to populate.
   * @return {module:sellers/js-client.sellers.model/Address} The populated <code>Address</code> instance.
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
      obj = obj || new Address();
      if (data.hasOwnProperty('addressLine1'))
        obj.addressLine1 = ApiClient.convertToType(data['addressLine1'], 'String');
      if (data.hasOwnProperty('addressLine2'))
        obj.addressLine2 = ApiClient.convertToType(data['addressLine2'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
      if (data.hasOwnProperty('stateOrProvinceCode'))
        obj.stateOrProvinceCode = ApiClient.convertToType(data['stateOrProvinceCode'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('postalCode'))
        obj.postalCode = ApiClient.convertToType(data['postalCode'], 'String');
    }
    return obj;
  }
}

/**
 * Street address information.
 * @member {String} addressLine1
 */
Address.prototype.addressLine1 = undefined;

/**
 * Additional street address information.
 * @member {String} addressLine2
 */
Address.prototype.addressLine2 = undefined;

/**
 * The country code in two-character ISO 3166-1 alpha-2 format.
 * @member {String} countryCode
 */
Address.prototype.countryCode = undefined;

/**
 * The state or province code.
 * @member {String} stateOrProvinceCode
 */
Address.prototype.stateOrProvinceCode = undefined;

/**
 * The city.
 * @member {String} city
 */
Address.prototype.city = undefined;

/**
 * The postal code.
 * @member {String} postalCode
 */
Address.prototype.postalCode = undefined;


