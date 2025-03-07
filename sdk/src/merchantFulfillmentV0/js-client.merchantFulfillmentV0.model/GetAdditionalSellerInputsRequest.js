/*
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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
import {Address} from './Address.js';
import {AmazonOrderId} from './AmazonOrderId.js';
import {ShippingServiceIdentifier} from './ShippingServiceIdentifier.js';

/**
 * The GetAdditionalSellerInputsRequest model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetAdditionalSellerInputsRequest
 * @version v0
 */
export class GetAdditionalSellerInputsRequest {
  /**
   * Constructs a new <code>GetAdditionalSellerInputsRequest</code>.
   * Request schema.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetAdditionalSellerInputsRequest
   * @class
   * @param shippingServiceId {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingServiceIdentifier} 
   * @param shipFromAddress {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Address} The address from which to ship.
   * @param orderId {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AmazonOrderId} An Amazon defined order identifier
   */
  constructor(shippingServiceId, shipFromAddress, orderId) {
    this.shippingServiceId = shippingServiceId;
    this.shipFromAddress = shipFromAddress;
    this.orderId = orderId;
  }

  /**
   * Constructs a <code>GetAdditionalSellerInputsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetAdditionalSellerInputsRequest} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetAdditionalSellerInputsRequest} The populated <code>GetAdditionalSellerInputsRequest</code> instance.
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
      obj = obj || new GetAdditionalSellerInputsRequest();
      if (data.hasOwnProperty('ShippingServiceId'))
        obj.shippingServiceId = ShippingServiceIdentifier.constructFromObject(data['ShippingServiceId']);
      if (data.hasOwnProperty('ShipFromAddress'))
        obj.shipFromAddress = Address.constructFromObject(data['ShipFromAddress']);
      if (data.hasOwnProperty('OrderId'))
        obj.orderId = AmazonOrderId.constructFromObject(data['OrderId']);
    }
    return obj;
  }
}

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingServiceIdentifier} shippingServiceId
 */
GetAdditionalSellerInputsRequest.prototype.shippingServiceId = undefined;

/**
 * The address from which to ship.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Address} shipFromAddress
 */
GetAdditionalSellerInputsRequest.prototype.shipFromAddress = undefined;

/**
 * An Amazon defined order identifier
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AmazonOrderId} orderId
 */
GetAdditionalSellerInputsRequest.prototype.orderId = undefined;


