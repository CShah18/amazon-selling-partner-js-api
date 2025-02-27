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
 * The ItemAsin model module.
 * @module catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemAsin
 * @version 2020-12-01
 */
export class ItemAsin {
  /**
   * Constructs a new <code>ItemAsin</code>.
   * Amazon Standard Identification Number (ASIN) is the unique identifier for an item in the Amazon catalog.
   * @alias module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemAsin
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ItemAsin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemAsin} obj Optional instance to populate.
   * @return {module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemAsin} The populated <code>ItemAsin</code> instance.
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
      obj = obj || new ItemAsin();
    }
    return obj;
  }
}

