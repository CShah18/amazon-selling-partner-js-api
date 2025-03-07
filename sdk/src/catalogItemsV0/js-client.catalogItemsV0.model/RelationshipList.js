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
import {RelationshipType} from './RelationshipType.js';

/**
 * The RelationshipList model module.
 * @module catalogItemsV0/js-client.catalogItemsV0.model/RelationshipList
 * @version v0
 */
export class RelationshipList extends Array {
  /**
   * Constructs a new <code>RelationshipList</code>.
   * A list of variation relationship information, if applicable for the item.
   * @alias module:catalogItemsV0/js-client.catalogItemsV0.model/RelationshipList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>RelationshipList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItemsV0/js-client.catalogItemsV0.model/RelationshipList} obj Optional instance to populate.
   * @return {module:catalogItemsV0/js-client.catalogItemsV0.model/RelationshipList} The populated <code>RelationshipList</code> instance.
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
      obj = obj || new RelationshipList();
      ApiClient.constructFromObject(data, obj, 'RelationshipType');
    }
    return obj;
  }
}

