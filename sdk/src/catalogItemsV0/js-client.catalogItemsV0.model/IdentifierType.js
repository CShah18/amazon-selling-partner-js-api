/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
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
import {ASINIdentifier} from './ASINIdentifier.js';
import {SellerSKUIdentifier} from './SellerSKUIdentifier.js';

/**
 * The IdentifierType model module.
 * @module catalogItemsV0/js-client.catalogItemsV0.model/IdentifierType
 * @version v0
 */
export class IdentifierType {
  /**
   * Constructs a new <code>IdentifierType</code>.
   * @alias module:catalogItemsV0/js-client.catalogItemsV0.model/IdentifierType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IdentifierType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItemsV0/js-client.catalogItemsV0.model/IdentifierType} obj Optional instance to populate.
   * @return {module:catalogItemsV0/js-client.catalogItemsV0.model/IdentifierType} The populated <code>IdentifierType</code> instance.
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
      obj = obj || new IdentifierType();
      if (data.hasOwnProperty('MarketplaceASIN'))
        obj.marketplaceASIN = ASINIdentifier.constructFromObject(data['MarketplaceASIN']);
      if (data.hasOwnProperty('SKUIdentifier'))
        obj.sKUIdentifier = SellerSKUIdentifier.constructFromObject(data['SKUIdentifier']);
    }
    return obj;
  }
}

/**
 * Indicates the item is identified by MarketPlaceId and ASIN.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/ASINIdentifier} marketplaceASIN
 */
IdentifierType.prototype.marketplaceASIN = undefined;

/**
 * Indicates the item is identified by MarketPlaceId, SellerId, and SellerSKU.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/SellerSKUIdentifier} sKUIdentifier
 */
IdentifierType.prototype.sKUIdentifier = undefined;


