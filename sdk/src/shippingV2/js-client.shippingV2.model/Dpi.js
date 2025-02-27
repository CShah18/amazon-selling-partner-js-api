/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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
 * The Dpi model module.
 * @module shippingV2/js-client.shippingV2.model/Dpi
 * @version v2
 */
export class Dpi {
  /**
   * Constructs a new <code>Dpi</code>.
   * The dots per inch (DPI) value used in printing. This value represents a measure of the resolution of the document.
   * @alias module:shippingV2/js-client.shippingV2.model/Dpi
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Dpi</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/Dpi} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/Dpi} The populated <code>Dpi</code> instance.
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
      obj = obj || new Dpi();
    }
    return obj;
  }
}

