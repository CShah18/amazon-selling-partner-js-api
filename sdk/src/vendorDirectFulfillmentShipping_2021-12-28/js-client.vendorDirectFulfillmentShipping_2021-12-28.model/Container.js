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
import {Dimensions} from './Dimensions.js';
import {PackedItem} from './PackedItem.js';
import {Weight} from './Weight.js';

/**
 * The Container model module.
 * @module vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Container
 * @version 2021-12-28
 */
export class Container {
  /**
   * Constructs a new <code>Container</code>.
   * A container used for shipping and packing items.
   * @alias module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Container
   * @class
   * @param containerType {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Container.ContainerTypeEnum} The type of container.
   * @param containerIdentifier {String} The container identifier.
   * @param weight {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Weight} 
   * @param packedItems {Array.<module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/PackedItem>} A list of packed items.
   */
  constructor(containerType, containerIdentifier, weight, packedItems) {
    this.containerType = containerType;
    this.containerIdentifier = containerIdentifier;
    this.weight = weight;
    this.packedItems = packedItems;
  }

  /**
   * Constructs a <code>Container</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Container} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Container} The populated <code>Container</code> instance.
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
      obj = obj || new Container();
      if (data.hasOwnProperty('containerType'))
        obj.containerType = ApiClient.convertToType(data['containerType'], 'String');
      if (data.hasOwnProperty('containerIdentifier'))
        obj.containerIdentifier = ApiClient.convertToType(data['containerIdentifier'], 'String');
      if (data.hasOwnProperty('trackingNumber'))
        obj.trackingNumber = ApiClient.convertToType(data['trackingNumber'], 'String');
      if (data.hasOwnProperty('manifestId'))
        obj.manifestId = ApiClient.convertToType(data['manifestId'], 'String');
      if (data.hasOwnProperty('manifestDate'))
        obj.manifestDate = ApiClient.convertToType(data['manifestDate'], 'String');
      if (data.hasOwnProperty('shipMethod'))
        obj.shipMethod = ApiClient.convertToType(data['shipMethod'], 'String');
      if (data.hasOwnProperty('scacCode'))
        obj.scacCode = ApiClient.convertToType(data['scacCode'], 'String');
      if (data.hasOwnProperty('carrier'))
        obj.carrier = ApiClient.convertToType(data['carrier'], 'String');
      if (data.hasOwnProperty('containerSequenceNumber'))
        obj.containerSequenceNumber = ApiClient.convertToType(data['containerSequenceNumber'], 'Number');
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = Dimensions.constructFromObject(data['dimensions']);
      if (data.hasOwnProperty('weight'))
        obj.weight = Weight.constructFromObject(data['weight']);
      if (data.hasOwnProperty('packedItems'))
        obj.packedItems = ApiClient.convertToType(data['packedItems'], [PackedItem]);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>containerType</code> property.
 * @enum {String}
 * @readonly
 */
Container.ContainerTypeEnum = {
  /**
   * value: "Carton"
   * @const
   */
  carton: "Carton",

  /**
   * value: "Pallet"
   * @const
   */
  pallet: "Pallet"
};

/**
 * The type of container.
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Container.ContainerTypeEnum} containerType
 */
Container.prototype.containerType = undefined;

/**
 * The container identifier.
 * @member {String} containerIdentifier
 */
Container.prototype.containerIdentifier = undefined;

/**
 * The tracking number.
 * @member {String} trackingNumber
 */
Container.prototype.trackingNumber = undefined;

/**
 * The manifest identifier.
 * @member {String} manifestId
 */
Container.prototype.manifestId = undefined;

/**
 * The date of the manifest.
 * @member {String} manifestDate
 */
Container.prototype.manifestDate = undefined;

/**
 * The shipment method. This property is required when calling the `submitShipmentConfirmations` operation, and optional otherwise.
 * @member {String} shipMethod
 */
Container.prototype.shipMethod = undefined;

/**
 * SCAC code required for NA VOC vendors only.
 * @member {String} scacCode
 */
Container.prototype.scacCode = undefined;

/**
 * Carrier required for EU VOC vendors only.
 * @member {String} carrier
 */
Container.prototype.carrier = undefined;

/**
 * An integer that must be submitted for multi-box shipments only, where one item may come in separate packages.
 * @member {Number} containerSequenceNumber
 */
Container.prototype.containerSequenceNumber = undefined;

/**
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Dimensions} dimensions
 */
Container.prototype.dimensions = undefined;

/**
 * @member {module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/Weight} weight
 */
Container.prototype.weight = undefined;

/**
 * A list of packed items.
 * @member {Array.<module:vendorDirectFulfillmentShipping_2021-12-28/js-client.vendorDirectFulfillmentShipping_2021-12-28.model/PackedItem>} packedItems
 */
Container.prototype.packedItems = undefined;


