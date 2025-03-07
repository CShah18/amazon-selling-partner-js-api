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
import {CurrencyAmount} from './CurrencyAmount.js';
import {ItemList} from './ItemList.js';
import {Label} from './Label.js';
import {PackageDimensions} from './PackageDimensions.js';
import {SellerOrderId} from './SellerOrderId.js';
import {ShipmentId} from './ShipmentId.js';
import {ShipmentStatus} from './ShipmentStatus.js';
import {ShippingService} from './ShippingService.js';
import {Timestamp} from './Timestamp.js';
import {TrackingId} from './TrackingId.js';
import {Weight} from './Weight.js';

/**
 * The Shipment model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Shipment
 * @version v0
 */
export class Shipment {
  /**
   * Constructs a new <code>Shipment</code>.
   * The details of a shipment. Includes the shipment status.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Shipment
   * @class
   * @param shipmentId {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentId} 
   * @param amazonOrderId {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AmazonOrderId} 
   * @param itemList {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ItemList} 
   * @param shipFromAddress {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Address} The address of the sender.
   * @param shipToAddress {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Address} The destination address for the shipment.
   * @param packageDimensions {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/PackageDimensions} 
   * @param weight {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Weight} The package weight.
   * @param insurance {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CurrencyAmount} If you specify `DeclaredValue` in a previous call to the `createShipment` operation, then `Insurance` indicates the shipment insurance amount that the carrier uses. If `DeclaredValue` isn't with a previous call to the `createShipment` operation, then the shipment is insured for the carrier's minimum insurance amount, or the combined sale prices that the items are listed for in the shipment.
   * @param shippingService {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingService} 
   * @param label {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Label} Data for creating a shipping label and dimensions for printing the label. If the shipment is canceled, an empty label is returned.
   * @param status {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentStatus} The shipment status.
   * @param createdDate {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Timestamp} The date and time the shipment is created.
   */
  constructor(shipmentId, amazonOrderId, itemList, shipFromAddress, shipToAddress, packageDimensions, weight, insurance, shippingService, label, status, createdDate) {
    this.shipmentId = shipmentId;
    this.amazonOrderId = amazonOrderId;
    this.itemList = itemList;
    this.shipFromAddress = shipFromAddress;
    this.shipToAddress = shipToAddress;
    this.packageDimensions = packageDimensions;
    this.weight = weight;
    this.insurance = insurance;
    this.shippingService = shippingService;
    this.label = label;
    this.status = status;
    this.createdDate = createdDate;
  }

  /**
   * Constructs a <code>Shipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Shipment} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Shipment} The populated <code>Shipment</code> instance.
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
      obj = obj || new Shipment();
      if (data.hasOwnProperty('ShipmentId'))
        obj.shipmentId = ShipmentId.constructFromObject(data['ShipmentId']);
      if (data.hasOwnProperty('AmazonOrderId'))
        obj.amazonOrderId = AmazonOrderId.constructFromObject(data['AmazonOrderId']);
      if (data.hasOwnProperty('SellerOrderId'))
        obj.sellerOrderId = SellerOrderId.constructFromObject(data['SellerOrderId']);
      if (data.hasOwnProperty('ItemList'))
        obj.itemList = ItemList.constructFromObject(data['ItemList']);
      if (data.hasOwnProperty('ShipFromAddress'))
        obj.shipFromAddress = Address.constructFromObject(data['ShipFromAddress']);
      if (data.hasOwnProperty('ShipToAddress'))
        obj.shipToAddress = Address.constructFromObject(data['ShipToAddress']);
      if (data.hasOwnProperty('PackageDimensions'))
        obj.packageDimensions = PackageDimensions.constructFromObject(data['PackageDimensions']);
      if (data.hasOwnProperty('Weight'))
        obj.weight = Weight.constructFromObject(data['Weight']);
      if (data.hasOwnProperty('Insurance'))
        obj.insurance = CurrencyAmount.constructFromObject(data['Insurance']);
      if (data.hasOwnProperty('ShippingService'))
        obj.shippingService = ShippingService.constructFromObject(data['ShippingService']);
      if (data.hasOwnProperty('Label'))
        obj.label = Label.constructFromObject(data['Label']);
      if (data.hasOwnProperty('Status'))
        obj.status = ShipmentStatus.constructFromObject(data['Status']);
      if (data.hasOwnProperty('TrackingId'))
        obj.trackingId = TrackingId.constructFromObject(data['TrackingId']);
      if (data.hasOwnProperty('CreatedDate'))
        obj.createdDate = Timestamp.constructFromObject(data['CreatedDate']);
      if (data.hasOwnProperty('LastUpdatedDate'))
        obj.lastUpdatedDate = Timestamp.constructFromObject(data['LastUpdatedDate']);
    }
    return obj;
  }
}

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentId} shipmentId
 */
Shipment.prototype.shipmentId = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AmazonOrderId} amazonOrderId
 */
Shipment.prototype.amazonOrderId = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/SellerOrderId} sellerOrderId
 */
Shipment.prototype.sellerOrderId = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ItemList} itemList
 */
Shipment.prototype.itemList = undefined;

/**
 * The address of the sender.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Address} shipFromAddress
 */
Shipment.prototype.shipFromAddress = undefined;

/**
 * The destination address for the shipment.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Address} shipToAddress
 */
Shipment.prototype.shipToAddress = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/PackageDimensions} packageDimensions
 */
Shipment.prototype.packageDimensions = undefined;

/**
 * The package weight.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Weight} weight
 */
Shipment.prototype.weight = undefined;

/**
 * If you specify `DeclaredValue` in a previous call to the `createShipment` operation, then `Insurance` indicates the shipment insurance amount that the carrier uses. If `DeclaredValue` isn't with a previous call to the `createShipment` operation, then the shipment is insured for the carrier's minimum insurance amount, or the combined sale prices that the items are listed for in the shipment.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CurrencyAmount} insurance
 */
Shipment.prototype.insurance = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingService} shippingService
 */
Shipment.prototype.shippingService = undefined;

/**
 * Data for creating a shipping label and dimensions for printing the label. If the shipment is canceled, an empty label is returned.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Label} label
 */
Shipment.prototype.label = undefined;

/**
 * The shipment status.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentStatus} status
 */
Shipment.prototype.status = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TrackingId} trackingId
 */
Shipment.prototype.trackingId = undefined;

/**
 * The date and time the shipment is created.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Timestamp} createdDate
 */
Shipment.prototype.createdDate = undefined;

/**
 * The date and time of the last update.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Timestamp} lastUpdatedDate
 */
Shipment.prototype.lastUpdatedDate = undefined;


