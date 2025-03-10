/*
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
import {MarketplaceId} from './MarketplaceId.js';
import {PackageDetail} from './PackageDetail.js';

/**
 * The ConfirmShipmentRequest model module.
 * @module ordersV0/js-client.ordersV0.model/ConfirmShipmentRequest
 * @version v0
 */
export class ConfirmShipmentRequest {
  /**
   * Constructs a new <code>ConfirmShipmentRequest</code>.
   * The request schema for an shipment confirmation.
   * @alias module:ordersV0/js-client.ordersV0.model/ConfirmShipmentRequest
   * @class
   * @param packageDetail {module:ordersV0/js-client.ordersV0.model/PackageDetail} 
   * @param marketplaceId {module:ordersV0/js-client.ordersV0.model/MarketplaceId} 
   */
  constructor(packageDetail, marketplaceId) {
    this.packageDetail = packageDetail;
    this.marketplaceId = marketplaceId;
  }

  /**
   * Constructs a <code>ConfirmShipmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ordersV0/js-client.ordersV0.model/ConfirmShipmentRequest} obj Optional instance to populate.
   * @return {module:ordersV0/js-client.ordersV0.model/ConfirmShipmentRequest} The populated <code>ConfirmShipmentRequest</code> instance.
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
      obj = obj || new ConfirmShipmentRequest();
      if (data.hasOwnProperty('packageDetail'))
        obj.packageDetail = PackageDetail.constructFromObject(data['packageDetail']);
      if (data.hasOwnProperty('codCollectionMethod'))
        obj.codCollectionMethod = ApiClient.convertToType(data['codCollectionMethod'], 'String');
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = MarketplaceId.constructFromObject(data['marketplaceId']);
    }
    return obj;
  }
}

/**
 * @member {module:ordersV0/js-client.ordersV0.model/PackageDetail} packageDetail
 */
ConfirmShipmentRequest.prototype.packageDetail = undefined;

/**
 * Allowed values for the <code>codCollectionMethod</code> property.
 * @enum {String}
 * @readonly
 */
ConfirmShipmentRequest.CodCollectionMethodEnum = {
  /**
   * value: "DirectPayment"
   * @const
   */
  directPayment: "DirectPayment"
};

/**
 * The COD collection method (only supported in the JP marketplace).
 * @member {module:ordersV0/js-client.ordersV0.model/ConfirmShipmentRequest.CodCollectionMethodEnum} codCollectionMethod
 */
ConfirmShipmentRequest.prototype.codCollectionMethod = undefined;

/**
 * @member {module:ordersV0/js-client.ordersV0.model/MarketplaceId} marketplaceId
 */
ConfirmShipmentRequest.prototype.marketplaceId = undefined;


