/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import {Product} from './Product.js';

/**
 * The Price model module.
 * @module productPricingV0/js-client.productPricingV0.model/Price
 * @version v0
 */
export class Price {
  /**
   * Constructs a new <code>Price</code>.
   * @alias module:productPricingV0/js-client.productPricingV0.model/Price
   * @class
   * @param status {String} The status of the operation.
   */
  constructor(status) {
    this.status = status;
  }

  /**
   * Constructs a <code>Price</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/Price} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/Price} The populated <code>Price</code> instance.
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
      obj = obj || new Price();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('SellerSKU'))
        obj.sellerSKU = ApiClient.convertToType(data['SellerSKU'], 'String');
      if (data.hasOwnProperty('ASIN'))
        obj.ASIN = ApiClient.convertToType(data['ASIN'], 'String');
      if (data.hasOwnProperty('Product'))
        obj.product = Product.constructFromObject(data['Product']);
    }
    return obj;
  }
}

/**
 * The status of the operation.
 * @member {String} status
 */
Price.prototype.status = undefined;

/**
 * The seller stock keeping unit (SKU) of the item.
 * @member {String} sellerSKU
 */
Price.prototype.sellerSKU = undefined;

/**
 * The Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} ASIN
 */
Price.prototype.ASIN = undefined;

/**
 * @member {module:productPricingV0/js-client.productPricingV0.model/Product} product
 */
Price.prototype.product = undefined;


