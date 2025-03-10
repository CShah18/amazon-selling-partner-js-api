/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
 *
 * OpenAPI spec version: v1
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
import {Currency} from './Currency.js';
import {Weight} from './Weight.js';

/**
 * The ContainerItem model module.
 * @module shipping/js-client.shipping.model/ContainerItem
 * @version v1
 */
export class ContainerItem {
  /**
   * Constructs a new <code>ContainerItem</code>.
   * Item in the container.
   * @alias module:shipping/js-client.shipping.model/ContainerItem
   * @class
   * @param quantity {Number} The quantity of the items of this type in the container.
   * @param unitPrice {module:shipping/js-client.shipping.model/Currency} The unit price of an item of this type (the total value of this item type in the container is unitPrice * quantity).
   * @param unitWeight {module:shipping/js-client.shipping.model/Weight} The unit weight of an item of this type (the total weight of this item type in the container is unitWeight * quantity).
   * @param title {String} A descriptive title of the item.
   */
  constructor(quantity, unitPrice, unitWeight, title) {
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.unitWeight = unitWeight;
    this.title = title;
  }

  /**
   * Constructs a <code>ContainerItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping/js-client.shipping.model/ContainerItem} obj Optional instance to populate.
   * @return {module:shipping/js-client.shipping.model/ContainerItem} The populated <code>ContainerItem</code> instance.
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
      obj = obj || new ContainerItem();
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('unitPrice'))
        obj.unitPrice = Currency.constructFromObject(data['unitPrice']);
      if (data.hasOwnProperty('unitWeight'))
        obj.unitWeight = Weight.constructFromObject(data['unitWeight']);
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }
}

/**
 * The quantity of the items of this type in the container.
 * @member {Number} quantity
 */
ContainerItem.prototype.quantity = undefined;

/**
 * The unit price of an item of this type (the total value of this item type in the container is unitPrice * quantity).
 * @member {module:shipping/js-client.shipping.model/Currency} unitPrice
 */
ContainerItem.prototype.unitPrice = undefined;

/**
 * The unit weight of an item of this type (the total weight of this item type in the container is unitWeight * quantity).
 * @member {module:shipping/js-client.shipping.model/Weight} unitWeight
 */
ContainerItem.prototype.unitWeight = undefined;

/**
 * A descriptive title of the item.
 * @member {String} title
 */
ContainerItem.prototype.title = undefined;


