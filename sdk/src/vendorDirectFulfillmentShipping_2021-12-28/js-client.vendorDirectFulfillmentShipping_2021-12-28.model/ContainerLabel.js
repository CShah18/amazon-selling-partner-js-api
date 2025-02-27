/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
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
import {ContainerLabelFormat} from './ContainerLabelFormat.js';

/**
 * The ContainerLabel model module.
 * @module vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ContainerLabel
 * @version 2021-12-28
 */
export class ContainerLabel {
  /**
   * Constructs a new <code>ContainerLabel</code>.
   * The details of the container label.
   * @alias module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ContainerLabel
   * @class
   * @param content {String} The `Base64encoded` string of the container label content.
   * @param format {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ContainerLabelFormat} The format of the container label.
   */
  constructor(content, format) {
    this.content = content;
    this.format = format;
  }

  /**
   * Constructs a <code>ContainerLabel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ContainerLabel} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ContainerLabel} The populated <code>ContainerLabel</code> instance.
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
      obj = obj || new ContainerLabel();
      if (data.hasOwnProperty('containerTrackingNumber'))
        obj.containerTrackingNumber = ApiClient.convertToType(data['containerTrackingNumber'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('format'))
        obj.format = ContainerLabelFormat.constructFromObject(data['format']);
    }
    return obj;
  }
}

/**
 * The container (pallet) tracking identifier from the shipping carrier.
 * @member {String} containerTrackingNumber
 */
ContainerLabel.prototype.containerTrackingNumber = undefined;

/**
 * The `Base64encoded` string of the container label content.
 * @member {String} content
 */
ContainerLabel.prototype.content = undefined;

/**
 * The format of the container label.
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/ContainerLabelFormat} format
 */
ContainerLabel.prototype.format = undefined;


