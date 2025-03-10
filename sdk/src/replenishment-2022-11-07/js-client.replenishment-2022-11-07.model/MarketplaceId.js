/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
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
 * The MarketplaceId model module.
 * @module replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/MarketplaceId
 * @version 2022-11-07
 */
export class MarketplaceId {
  /**
   * Constructs a new <code>MarketplaceId</code>.
   * The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace.
   * @alias module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/MarketplaceId
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MarketplaceId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/MarketplaceId} obj Optional instance to populate.
   * @return {module:replenishment-2022-11-07/js-client.replenishment-2022-11-07.model/MarketplaceId} The populated <code>MarketplaceId</code> instance.
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
      obj = obj || new MarketplaceId();
    }
    return obj;
  }
}

