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
import {Carrier} from './Carrier.js';
import {Currency} from './Currency.js';
import {PackageDocumentDetailList} from './PackageDocumentDetailList.js';
import {Promise} from './Promise.js';
import {Service} from './Service.js';
import {ShipmentId} from './ShipmentId.js';

/**
 * The OneClickShipmentResult model module.
 * @module shippingV2/js-client.shippingV2.model/OneClickShipmentResult
 * @version v2
 */
export class OneClickShipmentResult {
  /**
   * Constructs a new <code>OneClickShipmentResult</code>.
   * The payload for the OneClickShipment API.
   * @alias module:shippingV2/js-client.shippingV2.model/OneClickShipmentResult
   * @class
   * @param shipmentId {module:shippingV2/js-client.shippingV2.model/ShipmentId} 
   * @param packageDocumentDetails {module:shippingV2/js-client.shippingV2.model/PackageDocumentDetailList} 
   * @param promise {module:shippingV2/js-client.shippingV2.model/Promise} 
   * @param carrier {module:shippingV2/js-client.shippingV2.model/Carrier} 
   * @param service {module:shippingV2/js-client.shippingV2.model/Service} 
   * @param totalCharge {module:shippingV2/js-client.shippingV2.model/Currency} 
   */
  constructor(shipmentId, packageDocumentDetails, promise, carrier, service, totalCharge) {
    this.shipmentId = shipmentId;
    this.packageDocumentDetails = packageDocumentDetails;
    this.promise = promise;
    this.carrier = carrier;
    this.service = service;
    this.totalCharge = totalCharge;
  }

  /**
   * Constructs a <code>OneClickShipmentResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/OneClickShipmentResult} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/OneClickShipmentResult} The populated <code>OneClickShipmentResult</code> instance.
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
      obj = obj || new OneClickShipmentResult();
      if (data.hasOwnProperty('shipmentId'))
        obj.shipmentId = ShipmentId.constructFromObject(data['shipmentId']);
      if (data.hasOwnProperty('packageDocumentDetails'))
        obj.packageDocumentDetails = PackageDocumentDetailList.constructFromObject(data['packageDocumentDetails']);
      if (data.hasOwnProperty('promise'))
        obj.promise = Promise.constructFromObject(data['promise']);
      if (data.hasOwnProperty('carrier'))
        obj.carrier = Carrier.constructFromObject(data['carrier']);
      if (data.hasOwnProperty('service'))
        obj.service = Service.constructFromObject(data['service']);
      if (data.hasOwnProperty('totalCharge'))
        obj.totalCharge = Currency.constructFromObject(data['totalCharge']);
    }
    return obj;
  }
}

/**
 * @member {module:shippingV2/js-client.shippingV2.model/ShipmentId} shipmentId
 */
OneClickShipmentResult.prototype.shipmentId = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/PackageDocumentDetailList} packageDocumentDetails
 */
OneClickShipmentResult.prototype.packageDocumentDetails = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/Promise} promise
 */
OneClickShipmentResult.prototype.promise = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/Carrier} carrier
 */
OneClickShipmentResult.prototype.carrier = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/Service} service
 */
OneClickShipmentResult.prototype.service = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/Currency} totalCharge
 */
OneClickShipmentResult.prototype.totalCharge = undefined;


