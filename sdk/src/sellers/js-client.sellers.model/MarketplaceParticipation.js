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
import {Marketplace} from './Marketplace.js';
import {Participation} from './Participation.js';

/**
 * The MarketplaceParticipation model module.
 * @module sellers/js-client.sellers.model/MarketplaceParticipation
 * @version v1
 */
export class MarketplaceParticipation {
  /**
   * Constructs a new <code>MarketplaceParticipation</code>.
   * @alias module:sellers/js-client.sellers.model/MarketplaceParticipation
   * @class
   * @param marketplace {module:sellers/js-client.sellers.model/Marketplace} 
   * @param participation {module:sellers/js-client.sellers.model/Participation} 
   * @param storeName {String} The name of the seller's store as displayed in the marketplace.
   */
  constructor(marketplace, participation, storeName) {
    this.marketplace = marketplace;
    this.participation = participation;
    this.storeName = storeName;
  }

  /**
   * Constructs a <code>MarketplaceParticipation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:sellers/js-client.sellers.model/MarketplaceParticipation} obj Optional instance to populate.
   * @return {module:sellers/js-client.sellers.model/MarketplaceParticipation} The populated <code>MarketplaceParticipation</code> instance.
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
      obj = obj || new MarketplaceParticipation();
      if (data.hasOwnProperty('marketplace'))
        obj.marketplace = Marketplace.constructFromObject(data['marketplace']);
      if (data.hasOwnProperty('participation'))
        obj.participation = Participation.constructFromObject(data['participation']);
      if (data.hasOwnProperty('storeName'))
        obj.storeName = ApiClient.convertToType(data['storeName'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:sellers/js-client.sellers.model/Marketplace} marketplace
 */
MarketplaceParticipation.prototype.marketplace = undefined;

/**
 * @member {module:sellers/js-client.sellers.model/Participation} participation
 */
MarketplaceParticipation.prototype.participation = undefined;

/**
 * The name of the seller's store as displayed in the marketplace.
 * @member {String} storeName
 */
MarketplaceParticipation.prototype.storeName = undefined;


