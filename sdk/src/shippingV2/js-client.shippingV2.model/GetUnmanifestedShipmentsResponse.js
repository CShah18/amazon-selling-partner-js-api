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
import {UnmanifestedCarrierInformationList} from './UnmanifestedCarrierInformationList.js';

/**
 * The GetUnmanifestedShipmentsResponse model module.
 * @module shippingV2/js-client.shippingV2.model/GetUnmanifestedShipmentsResponse
 * @version v2
 */
export class GetUnmanifestedShipmentsResponse {
  /**
   * Constructs a new <code>GetUnmanifestedShipmentsResponse</code>.
   * The Response  for the GetUnmanifestedShipmentsResponse operation.
   * @alias module:shippingV2/js-client.shippingV2.model/GetUnmanifestedShipmentsResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetUnmanifestedShipmentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/GetUnmanifestedShipmentsResponse} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/GetUnmanifestedShipmentsResponse} The populated <code>GetUnmanifestedShipmentsResponse</code> instance.
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
      obj = obj || new GetUnmanifestedShipmentsResponse();
      if (data.hasOwnProperty('unmanifestedCarrierInformationList'))
        obj.unmanifestedCarrierInformationList = UnmanifestedCarrierInformationList.constructFromObject(data['unmanifestedCarrierInformationList']);
    }
    return obj;
  }
}

/**
 * @member {module:shippingV2/js-client.shippingV2.model/UnmanifestedCarrierInformationList} unmanifestedCarrierInformationList
 */
GetUnmanifestedShipmentsResponse.prototype.unmanifestedCarrierInformationList = undefined;


