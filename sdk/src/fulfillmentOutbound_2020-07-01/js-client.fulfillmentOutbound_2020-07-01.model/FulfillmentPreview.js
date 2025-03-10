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
import {FeatureSettings} from './FeatureSettings.js';
import {FeeList} from './FeeList.js';
import {FulfillmentPreviewShipmentList} from './FulfillmentPreviewShipmentList.js';
import {ScheduledDeliveryInfo} from './ScheduledDeliveryInfo.js';
import {ShippingSpeedCategory} from './ShippingSpeedCategory.js';
import {StringList} from './StringList.js';
import {UnfulfillablePreviewItemList} from './UnfulfillablePreviewItemList.js';
import {Weight} from './Weight.js';

/**
 * The FulfillmentPreview model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentPreview
 * @version 2020-07-01
 */
export class FulfillmentPreview {
  /**
   * Constructs a new <code>FulfillmentPreview</code>.
   * Information about a fulfillment order preview, including delivery and fee information based on shipping method.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentPreview
   * @class
   * @param shippingSpeedCategory {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ShippingSpeedCategory} 
   * @param isFulfillable {Boolean} When true, this fulfillment order preview is fulfillable.
   * @param isCODCapable {Boolean} When true, this fulfillment order preview is for COD (Cash On Delivery).
   * @param marketplaceId {String} The marketplace the fulfillment order is placed against.
   */
  constructor(shippingSpeedCategory, isFulfillable, isCODCapable, marketplaceId) {
    this.shippingSpeedCategory = shippingSpeedCategory;
    this.isFulfillable = isFulfillable;
    this.isCODCapable = isCODCapable;
    this.marketplaceId = marketplaceId;
  }

  /**
   * Constructs a <code>FulfillmentPreview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentPreview} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentPreview} The populated <code>FulfillmentPreview</code> instance.
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
      obj = obj || new FulfillmentPreview();
      if (data.hasOwnProperty('shippingSpeedCategory'))
        obj.shippingSpeedCategory = ShippingSpeedCategory.constructFromObject(data['shippingSpeedCategory']);
      if (data.hasOwnProperty('scheduledDeliveryInfo'))
        obj.scheduledDeliveryInfo = ScheduledDeliveryInfo.constructFromObject(data['scheduledDeliveryInfo']);
      if (data.hasOwnProperty('isFulfillable'))
        obj.isFulfillable = ApiClient.convertToType(data['isFulfillable'], 'Boolean');
      if (data.hasOwnProperty('isCODCapable'))
        obj.isCODCapable = ApiClient.convertToType(data['isCODCapable'], 'Boolean');
      if (data.hasOwnProperty('estimatedShippingWeight'))
        obj.estimatedShippingWeight = Weight.constructFromObject(data['estimatedShippingWeight']);
      if (data.hasOwnProperty('estimatedFees'))
        obj.estimatedFees = FeeList.constructFromObject(data['estimatedFees']);
      if (data.hasOwnProperty('fulfillmentPreviewShipments'))
        obj.fulfillmentPreviewShipments = FulfillmentPreviewShipmentList.constructFromObject(data['fulfillmentPreviewShipments']);
      if (data.hasOwnProperty('unfulfillablePreviewItems'))
        obj.unfulfillablePreviewItems = UnfulfillablePreviewItemList.constructFromObject(data['unfulfillablePreviewItems']);
      if (data.hasOwnProperty('orderUnfulfillableReasons'))
        obj.orderUnfulfillableReasons = StringList.constructFromObject(data['orderUnfulfillableReasons']);
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('featureConstraints'))
        obj.featureConstraints = ApiClient.convertToType(data['featureConstraints'], [FeatureSettings]);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ShippingSpeedCategory} shippingSpeedCategory
 */
FulfillmentPreview.prototype.shippingSpeedCategory = undefined;

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ScheduledDeliveryInfo} scheduledDeliveryInfo
 */
FulfillmentPreview.prototype.scheduledDeliveryInfo = undefined;

/**
 * When true, this fulfillment order preview is fulfillable.
 * @member {Boolean} isFulfillable
 */
FulfillmentPreview.prototype.isFulfillable = undefined;

/**
 * When true, this fulfillment order preview is for COD (Cash On Delivery).
 * @member {Boolean} isCODCapable
 */
FulfillmentPreview.prototype.isCODCapable = undefined;

/**
 * Estimated shipping weight for this fulfillment order preview.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Weight} estimatedShippingWeight
 */
FulfillmentPreview.prototype.estimatedShippingWeight = undefined;

/**
 * The estimated fulfillment fees for this fulfillment order preview, if applicable. The fees data will not be available for IN marketplace orders.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FeeList} estimatedFees
 */
FulfillmentPreview.prototype.estimatedFees = undefined;

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FulfillmentPreviewShipmentList} fulfillmentPreviewShipments
 */
FulfillmentPreview.prototype.fulfillmentPreviewShipments = undefined;

/**
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/UnfulfillablePreviewItemList} unfulfillablePreviewItems
 */
FulfillmentPreview.prototype.unfulfillablePreviewItems = undefined;

/**
 * Error codes associated with the fulfillment order preview that indicate why the order is not fulfillable.  Error code examples:  `DeliverySLAUnavailable` `InvalidDestinationAddress`
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/StringList} orderUnfulfillableReasons
 */
FulfillmentPreview.prototype.orderUnfulfillableReasons = undefined;

/**
 * The marketplace the fulfillment order is placed against.
 * @member {String} marketplaceId
 */
FulfillmentPreview.prototype.marketplaceId = undefined;

/**
 * A list of features and their fulfillment policies to apply to the order.
 * @member {Array.<module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FeatureSettings>} featureConstraints
 */
FulfillmentPreview.prototype.featureConstraints = undefined;


