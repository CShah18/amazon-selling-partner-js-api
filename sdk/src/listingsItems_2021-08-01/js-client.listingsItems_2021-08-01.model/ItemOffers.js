/*
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
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
import {ItemOfferByMarketplace} from './ItemOfferByMarketplace.js';

/**
 * The ItemOffers model module.
 * @module listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemOffers
 * @version 2021-08-01
 */
export class ItemOffers extends Array {
  /**
   * Constructs a new <code>ItemOffers</code>.
   * Offer details for the listings item.
   * @alias module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemOffers
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ItemOffers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemOffers} obj Optional instance to populate.
   * @return {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemOffers} The populated <code>ItemOffers</code> instance.
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
      obj = obj || new ItemOffers();
      ApiClient.constructFromObject(data, obj, 'ItemOfferByMarketplace');
    }
    return obj;
  }
}

