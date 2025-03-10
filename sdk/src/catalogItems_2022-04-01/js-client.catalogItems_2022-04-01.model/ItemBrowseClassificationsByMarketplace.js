/*
 * Catalog Items v2022-04-01
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-04-01
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
import {ItemBrowseClassification} from './ItemBrowseClassification.js';

/**
 * The ItemBrowseClassificationsByMarketplace model module.
 * @module catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemBrowseClassificationsByMarketplace
 * @version 2022-04-01
 */
export class ItemBrowseClassificationsByMarketplace {
  /**
   * Constructs a new <code>ItemBrowseClassificationsByMarketplace</code>.
   * Classifications (browse nodes) associated with the item in the Amazon catalog for the indicated Amazon marketplace.
   * @alias module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemBrowseClassificationsByMarketplace
   * @class
   * @param marketplaceId {String} Amazon marketplace identifier.
   */
  constructor(marketplaceId) {
    this.marketplaceId = marketplaceId;
  }

  /**
   * Constructs a <code>ItemBrowseClassificationsByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemBrowseClassificationsByMarketplace} obj Optional instance to populate.
   * @return {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemBrowseClassificationsByMarketplace} The populated <code>ItemBrowseClassificationsByMarketplace</code> instance.
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
      obj = obj || new ItemBrowseClassificationsByMarketplace();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('classifications'))
        obj.classifications = ApiClient.convertToType(data['classifications'], [ItemBrowseClassification]);
    }
    return obj;
  }
}

/**
 * Amazon marketplace identifier.
 * @member {String} marketplaceId
 */
ItemBrowseClassificationsByMarketplace.prototype.marketplaceId = undefined;

/**
 * Classifications (browse nodes) associated with the item in the Amazon catalog for the indicated Amazon marketplace.
 * @member {Array.<module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemBrowseClassification>} classifications
 */
ItemBrowseClassificationsByMarketplace.prototype.classifications = undefined;


