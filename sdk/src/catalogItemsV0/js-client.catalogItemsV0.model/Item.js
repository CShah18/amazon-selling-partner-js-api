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
import {AttributeSetList} from './AttributeSetList.js';
import {IdentifierType} from './IdentifierType.js';
import {RelationshipList} from './RelationshipList.js';
import {SalesRankList} from './SalesRankList.js';

/**
 * The Item model module.
 * @module catalogItemsV0/js-client.catalogItemsV0.model/Item
 * @version v0
 */
export class Item {
  /**
   * Constructs a new <code>Item</code>.
   * An item in the Amazon catalog.
   * @alias module:catalogItemsV0/js-client.catalogItemsV0.model/Item
   * @class
   * @param identifiers {module:catalogItemsV0/js-client.catalogItemsV0.model/IdentifierType} The identifiers that uniquely identify the item.
   */
  constructor(identifiers) {
    this.identifiers = identifiers;
  }

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItemsV0/js-client.catalogItemsV0.model/Item} obj Optional instance to populate.
   * @return {module:catalogItemsV0/js-client.catalogItemsV0.model/Item} The populated <code>Item</code> instance.
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
      obj = obj || new Item();
      if (data.hasOwnProperty('Identifiers'))
        obj.identifiers = IdentifierType.constructFromObject(data['Identifiers']);
      if (data.hasOwnProperty('AttributeSets'))
        obj.attributeSets = AttributeSetList.constructFromObject(data['AttributeSets']);
      if (data.hasOwnProperty('Relationships'))
        obj.relationships = RelationshipList.constructFromObject(data['Relationships']);
      if (data.hasOwnProperty('SalesRankings'))
        obj.salesRankings = SalesRankList.constructFromObject(data['SalesRankings']);
    }
    return obj;
  }
}

/**
 * The identifiers that uniquely identify the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/IdentifierType} identifiers
 */
Item.prototype.identifiers = undefined;

/**
 * A list of attributes of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/AttributeSetList} attributeSets
 */
Item.prototype.attributeSets = undefined;

/**
 * A list of variation relationship information for the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/RelationshipList} relationships
 */
Item.prototype.relationships = undefined;

/**
 * A list of sales rank information for the item by category.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/SalesRankList} salesRankings
 */
Item.prototype.salesRankings = undefined;


