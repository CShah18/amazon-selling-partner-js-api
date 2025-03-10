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
import {AvailableFormatOptionsForLabelList} from './AvailableFormatOptionsForLabelList.js';
import {AvailableShippingServiceOptions} from './AvailableShippingServiceOptions.js';
import {Benefits} from './Benefits.js';
import {CurrencyAmount} from './CurrencyAmount.js';
import {LabelFormatList} from './LabelFormatList.js';
import {ShippingServiceIdentifier} from './ShippingServiceIdentifier.js';
import {ShippingServiceOptions} from './ShippingServiceOptions.js';
import {Timestamp} from './Timestamp.js';

/**
 * The ShippingService model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingService
 * @version v0
 */
export class ShippingService {
  /**
   * Constructs a new <code>ShippingService</code>.
   * A shipping service offer made by a carrier.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingService
   * @class
   * @param shippingServiceName {String} A plain text representation of a carrier's shipping service. For example, \"UPS Ground\" or \"FedEx Standard Overnight\". 
   * @param carrierName {String} The name of the carrier.
   * @param shippingServiceId {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingServiceIdentifier} 
   * @param shippingServiceOfferId {String} An Amazon-defined shipping service offer identifier.
   * @param shipDate {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Timestamp} The date that the carrier will ship the package.
   * @param rate {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CurrencyAmount} The amount that the carrier will charge for the shipment.
   * @param shippingServiceOptions {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingServiceOptions} Extra services offered by the carrier.
   * @param requiresAdditionalSellerInputs {Boolean} When true, additional seller inputs are required.
   */
  constructor(shippingServiceName, carrierName, shippingServiceId, shippingServiceOfferId, shipDate, rate, shippingServiceOptions, requiresAdditionalSellerInputs) {
    this.shippingServiceName = shippingServiceName;
    this.carrierName = carrierName;
    this.shippingServiceId = shippingServiceId;
    this.shippingServiceOfferId = shippingServiceOfferId;
    this.shipDate = shipDate;
    this.rate = rate;
    this.shippingServiceOptions = shippingServiceOptions;
    this.requiresAdditionalSellerInputs = requiresAdditionalSellerInputs;
  }

  /**
   * Constructs a <code>ShippingService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingService} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingService} The populated <code>ShippingService</code> instance.
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
      obj = obj || new ShippingService();
      if (data.hasOwnProperty('ShippingServiceName'))
        obj.shippingServiceName = ApiClient.convertToType(data['ShippingServiceName'], 'String');
      if (data.hasOwnProperty('CarrierName'))
        obj.carrierName = ApiClient.convertToType(data['CarrierName'], 'String');
      if (data.hasOwnProperty('ShippingServiceId'))
        obj.shippingServiceId = ShippingServiceIdentifier.constructFromObject(data['ShippingServiceId']);
      if (data.hasOwnProperty('ShippingServiceOfferId'))
        obj.shippingServiceOfferId = ApiClient.convertToType(data['ShippingServiceOfferId'], 'String');
      if (data.hasOwnProperty('ShipDate'))
        obj.shipDate = Timestamp.constructFromObject(data['ShipDate']);
      if (data.hasOwnProperty('EarliestEstimatedDeliveryDate'))
        obj.earliestEstimatedDeliveryDate = Timestamp.constructFromObject(data['EarliestEstimatedDeliveryDate']);
      if (data.hasOwnProperty('LatestEstimatedDeliveryDate'))
        obj.latestEstimatedDeliveryDate = Timestamp.constructFromObject(data['LatestEstimatedDeliveryDate']);
      if (data.hasOwnProperty('Rate'))
        obj.rate = CurrencyAmount.constructFromObject(data['Rate']);
      if (data.hasOwnProperty('ShippingServiceOptions'))
        obj.shippingServiceOptions = ShippingServiceOptions.constructFromObject(data['ShippingServiceOptions']);
      if (data.hasOwnProperty('AvailableShippingServiceOptions'))
        obj.availableShippingServiceOptions = AvailableShippingServiceOptions.constructFromObject(data['AvailableShippingServiceOptions']);
      if (data.hasOwnProperty('AvailableLabelFormats'))
        obj.availableLabelFormats = LabelFormatList.constructFromObject(data['AvailableLabelFormats']);
      if (data.hasOwnProperty('AvailableFormatOptionsForLabel'))
        obj.availableFormatOptionsForLabel = AvailableFormatOptionsForLabelList.constructFromObject(data['AvailableFormatOptionsForLabel']);
      if (data.hasOwnProperty('RequiresAdditionalSellerInputs'))
        obj.requiresAdditionalSellerInputs = ApiClient.convertToType(data['RequiresAdditionalSellerInputs'], 'Boolean');
      if (data.hasOwnProperty('Benefits'))
        obj.benefits = Benefits.constructFromObject(data['Benefits']);
    }
    return obj;
  }
}

/**
 * A plain text representation of a carrier's shipping service. For example, \"UPS Ground\" or \"FedEx Standard Overnight\". 
 * @member {String} shippingServiceName
 */
ShippingService.prototype.shippingServiceName = undefined;

/**
 * The name of the carrier.
 * @member {String} carrierName
 */
ShippingService.prototype.carrierName = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingServiceIdentifier} shippingServiceId
 */
ShippingService.prototype.shippingServiceId = undefined;

/**
 * An Amazon-defined shipping service offer identifier.
 * @member {String} shippingServiceOfferId
 */
ShippingService.prototype.shippingServiceOfferId = undefined;

/**
 * The date that the carrier will ship the package.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Timestamp} shipDate
 */
ShippingService.prototype.shipDate = undefined;

/**
 * The earliest date by which the shipment will be delivered.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Timestamp} earliestEstimatedDeliveryDate
 */
ShippingService.prototype.earliestEstimatedDeliveryDate = undefined;

/**
 * The latest date by which the shipment will be delivered.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Timestamp} latestEstimatedDeliveryDate
 */
ShippingService.prototype.latestEstimatedDeliveryDate = undefined;

/**
 * The amount that the carrier will charge for the shipment.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CurrencyAmount} rate
 */
ShippingService.prototype.rate = undefined;

/**
 * Extra services offered by the carrier.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingServiceOptions} shippingServiceOptions
 */
ShippingService.prototype.shippingServiceOptions = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableShippingServiceOptions} availableShippingServiceOptions
 */
ShippingService.prototype.availableShippingServiceOptions = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelFormatList} availableLabelFormats
 */
ShippingService.prototype.availableLabelFormats = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableFormatOptionsForLabelList} availableFormatOptionsForLabel
 */
ShippingService.prototype.availableFormatOptionsForLabel = undefined;

/**
 * When true, additional seller inputs are required.
 * @member {Boolean} requiresAdditionalSellerInputs
 */
ShippingService.prototype.requiresAdditionalSellerInputs = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Benefits} benefits
 */
ShippingService.prototype.benefits = undefined;


