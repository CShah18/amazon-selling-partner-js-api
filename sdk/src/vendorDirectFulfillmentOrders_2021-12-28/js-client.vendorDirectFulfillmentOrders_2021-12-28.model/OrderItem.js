/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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
import {BuyerCustomizedInfoDetail} from './BuyerCustomizedInfoDetail.js';
import {GiftDetails} from './GiftDetails.js';
import {ItemQuantity} from './ItemQuantity.js';
import {Money} from './Money.js';
import {ScheduledDeliveryShipment} from './ScheduledDeliveryShipment.js';
import {TaxItemDetails} from './TaxItemDetails.js';

/**
 * The OrderItem model module.
 * @module vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/OrderItem
 * @version 2021-12-28
 */
export class OrderItem {
  /**
   * Constructs a new <code>OrderItem</code>.
   * An item within an order
   * @alias module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/OrderItem
   * @class
   * @param itemSequenceNumber {String} Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
   * @param orderedQuantity {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/ItemQuantity} Item quantity ordered.
   * @param netPrice {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/Money} Net price (before tax) to vendor with currency details.
   */
  constructor(itemSequenceNumber, orderedQuantity, netPrice) {
    this.itemSequenceNumber = itemSequenceNumber;
    this.orderedQuantity = orderedQuantity;
    this.netPrice = netPrice;
  }

  /**
   * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/OrderItem} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/OrderItem} The populated <code>OrderItem</code> instance.
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
      obj = obj || new OrderItem();
      if (data.hasOwnProperty('itemSequenceNumber'))
        obj.itemSequenceNumber = ApiClient.convertToType(data['itemSequenceNumber'], 'String');
      if (data.hasOwnProperty('buyerProductIdentifier'))
        obj.buyerProductIdentifier = ApiClient.convertToType(data['buyerProductIdentifier'], 'String');
      if (data.hasOwnProperty('vendorProductIdentifier'))
        obj.vendorProductIdentifier = ApiClient.convertToType(data['vendorProductIdentifier'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('orderedQuantity'))
        obj.orderedQuantity = ItemQuantity.constructFromObject(data['orderedQuantity']);
      if (data.hasOwnProperty('scheduledDeliveryShipment'))
        obj.scheduledDeliveryShipment = ScheduledDeliveryShipment.constructFromObject(data['scheduledDeliveryShipment']);
      if (data.hasOwnProperty('giftDetails'))
        obj.giftDetails = GiftDetails.constructFromObject(data['giftDetails']);
      if (data.hasOwnProperty('netPrice'))
        obj.netPrice = Money.constructFromObject(data['netPrice']);
      if (data.hasOwnProperty('taxDetails'))
        obj.taxDetails = TaxItemDetails.constructFromObject(data['taxDetails']);
      if (data.hasOwnProperty('totalPrice'))
        obj.totalPrice = Money.constructFromObject(data['totalPrice']);
      if (data.hasOwnProperty('buyerCustomizedInfo'))
        obj.buyerCustomizedInfo = BuyerCustomizedInfoDetail.constructFromObject(data['buyerCustomizedInfo']);
    }
    return obj;
  }
}

/**
 * Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
 * @member {String} itemSequenceNumber
 */
OrderItem.prototype.itemSequenceNumber = undefined;

/**
 * Buyer's standard identification number (ASIN) of an item.
 * @member {String} buyerProductIdentifier
 */
OrderItem.prototype.buyerProductIdentifier = undefined;

/**
 * The vendor selected product identification of the item.
 * @member {String} vendorProductIdentifier
 */
OrderItem.prototype.vendorProductIdentifier = undefined;

/**
 * Title for the item.
 * @member {String} title
 */
OrderItem.prototype.title = undefined;

/**
 * Item quantity ordered.
 * @member {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/ItemQuantity} orderedQuantity
 */
OrderItem.prototype.orderedQuantity = undefined;

/**
 * Details for the scheduled delivery shipment.
 * @member {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/ScheduledDeliveryShipment} scheduledDeliveryShipment
 */
OrderItem.prototype.scheduledDeliveryShipment = undefined;

/**
 * Gift message and wrapId details.
 * @member {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/GiftDetails} giftDetails
 */
OrderItem.prototype.giftDetails = undefined;

/**
 * Net price (before tax) to vendor with currency details.
 * @member {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/Money} netPrice
 */
OrderItem.prototype.netPrice = undefined;

/**
 * Total tax details for the line item.
 * @member {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/TaxItemDetails} taxDetails
 */
OrderItem.prototype.taxDetails = undefined;

/**
 * The price to Amazon each (cost).
 * @member {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/Money} totalPrice
 */
OrderItem.prototype.totalPrice = undefined;

/**
 * The buyer information for products the vendor has configured as customizable, specifying the types of customizations or configurations along with types and ranges for their product. This provides the ability for buyers to customize multiple aspects of the products according to what the vendor allows.
 * @member {module:vendorDirectFulfillmentOrders_2021-12-28/js-client.vendorDirectFulfillmentOrders_2021-12-28.model/BuyerCustomizedInfoDetail} buyerCustomizedInfo
 */
OrderItem.prototype.buyerCustomizedInfo = undefined;


