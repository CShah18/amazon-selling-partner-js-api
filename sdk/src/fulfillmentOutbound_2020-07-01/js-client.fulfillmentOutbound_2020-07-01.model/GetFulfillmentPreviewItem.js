/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
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
import {Money} from './Money.js';
import {Quantity} from './Quantity.js';

/**
 * The GetFulfillmentPreviewItem model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/GetFulfillmentPreviewItem
 * @version 2020-07-01
 */
export class GetFulfillmentPreviewItem {
  /**
   * Constructs a new <code>GetFulfillmentPreviewItem</code>.
   * Item information for a fulfillment order preview.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/GetFulfillmentPreviewItem
   * @class
   * @param sellerSku {String} The seller SKU of the item.
   * @param quantity {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Quantity} 
   * @param sellerFulfillmentOrderItemId {String} A fulfillment order item identifier that the seller creates to track items in the fulfillment preview.
   */
  constructor(sellerSku, quantity, sellerFulfillmentOrderItemId) {
    this.sellerSku = sellerSku;
    this.quantity = quantity;
    this.sellerFulfillmentOrderItemId = sellerFulfillmentOrderItemId;
  }

  /**
   * Constructs a <code>GetFulfillmentPreviewItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/GetFulfillmentPreviewItem} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/GetFulfillmentPreviewItem} The populated <code>GetFulfillmentPreviewItem</code> instance.
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
      obj = obj || new GetFulfillmentPreviewItem();
      if (data.hasOwnProperty('sellerSku'))
        obj.sellerSku = ApiClient.convertToType(data['sellerSku'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = Quantity.constructFromObject(data['quantity']);
      if (data.hasOwnProperty('perUnitDeclaredValue'))
        obj.perUnitDeclaredValue = Money.constructFromObject(data['perUnitDeclaredValue']);
      if (data.hasOwnProperty('sellerFulfillmentOrderItemId'))
        obj.sellerFulfillmentOrderItemId = ApiClient.convertToType(data['sellerFulfillmentOrderItemId'], 'String');
    }
    return obj;
  }
}

/**
 * The seller SKU of the item.
 * @member {String} sellerSku
 */
GetFulfillmentPreviewItem.prototype.sellerSku = undefined;

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Quantity} quantity
 */
GetFulfillmentPreviewItem.prototype.quantity = undefined;

/**
 * The monetary value assigned by the seller to this item. This is a required field if this order is an export order or an India MCF order.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Money} perUnitDeclaredValue
 */
GetFulfillmentPreviewItem.prototype.perUnitDeclaredValue = undefined;

/**
 * A fulfillment order item identifier that the seller creates to track items in the fulfillment preview.
 * @member {String} sellerFulfillmentOrderItemId
 */
GetFulfillmentPreviewItem.prototype.sellerFulfillmentOrderItemId = undefined;


