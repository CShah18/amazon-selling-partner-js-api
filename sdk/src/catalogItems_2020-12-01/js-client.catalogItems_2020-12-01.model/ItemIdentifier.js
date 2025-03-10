/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, see the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2020-12-01-use-case-guide).
 *
 * OpenAPI spec version: 2020-12-01
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
 * The ItemIdentifier model module.
 * @module catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemIdentifier
 * @version 2020-12-01
 */
export class ItemIdentifier {
  /**
   * Constructs a new <code>ItemIdentifier</code>.
   * Identifier associated with the item in the Amazon catalog, such as a UPC or EAN identifier.
   * @alias module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemIdentifier
   * @class
   * @param identifierType {String} Type of identifier, such as UPC, EAN, or ISBN.
   * @param identifier {String} Identifier.
   */
  constructor(identifierType, identifier) {
    this.identifierType = identifierType;
    this.identifier = identifier;
  }

  /**
   * Constructs a <code>ItemIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemIdentifier} obj Optional instance to populate.
   * @return {module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemIdentifier} The populated <code>ItemIdentifier</code> instance.
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
      obj = obj || new ItemIdentifier();
      if (data.hasOwnProperty('identifierType'))
        obj.identifierType = ApiClient.convertToType(data['identifierType'], 'String');
      if (data.hasOwnProperty('identifier'))
        obj.identifier = ApiClient.convertToType(data['identifier'], 'String');
    }
    return obj;
  }
}

/**
 * Type of identifier, such as UPC, EAN, or ISBN.
 * @member {String} identifierType
 */
ItemIdentifier.prototype.identifierType = undefined;

/**
 * Identifier.
 * @member {String} identifier
 */
ItemIdentifier.prototype.identifier = undefined;


