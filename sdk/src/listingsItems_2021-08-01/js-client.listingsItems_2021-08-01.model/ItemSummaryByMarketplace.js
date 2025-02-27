/*
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
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
import {ItemImage} from './ItemImage.js';

/**
 * The ItemSummaryByMarketplace model module.
 * @module listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemSummaryByMarketplace
 * @version 2021-08-01
 */
export class ItemSummaryByMarketplace {
  /**
   * Constructs a new <code>ItemSummaryByMarketplace</code>.
   * Summary details of a listings item for an Amazon marketplace.
   * @alias module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemSummaryByMarketplace
   * @class
   * @param marketplaceId {String} A marketplace identifier. Identifies the Amazon marketplace for the listings item.
   * @param productType {String} The Amazon product type of the listings item.
   * @param status {Array.<module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemSummaryByMarketplace.StatusEnum>} Statuses that apply to the listings item.
   * @param createdDate {Date} The date the listings item was created in ISO 8601 format.
   * @param lastUpdatedDate {Date} The date the listings item was last updated in ISO 8601 format.
   */
  constructor(marketplaceId, productType, status, createdDate, lastUpdatedDate) {
    this.marketplaceId = marketplaceId;
    this.productType = productType;
    this.status = status;
    this.createdDate = createdDate;
    this.lastUpdatedDate = lastUpdatedDate;
  }

  /**
   * Constructs a <code>ItemSummaryByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemSummaryByMarketplace} obj Optional instance to populate.
   * @return {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemSummaryByMarketplace} The populated <code>ItemSummaryByMarketplace</code> instance.
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
      obj = obj || new ItemSummaryByMarketplace();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('asin'))
        obj.asin = ApiClient.convertToType(data['asin'], 'String');
      if (data.hasOwnProperty('productType'))
        obj.productType = ApiClient.convertToType(data['productType'], 'String');
      if (data.hasOwnProperty('conditionType'))
        obj.conditionType = ApiClient.convertToType(data['conditionType'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], ['String']);
      if (data.hasOwnProperty('fnSku'))
        obj.fnSku = ApiClient.convertToType(data['fnSku'], 'String');
      if (data.hasOwnProperty('itemName'))
        obj.itemName = ApiClient.convertToType(data['itemName'], 'String');
      if (data.hasOwnProperty('createdDate'))
        obj.createdDate = ApiClient.convertToType(data['createdDate'], 'Date');
      if (data.hasOwnProperty('lastUpdatedDate'))
        obj.lastUpdatedDate = ApiClient.convertToType(data['lastUpdatedDate'], 'Date');
      if (data.hasOwnProperty('mainImage'))
        obj.mainImage = ItemImage.constructFromObject(data['mainImage']);
    }
    return obj;
  }
}

/**
 * A marketplace identifier. Identifies the Amazon marketplace for the listings item.
 * @member {String} marketplaceId
 */
ItemSummaryByMarketplace.prototype.marketplaceId = undefined;

/**
 * Amazon Standard Identification Number (ASIN) of the listings item.
 * @member {String} asin
 */
ItemSummaryByMarketplace.prototype.asin = undefined;

/**
 * The Amazon product type of the listings item.
 * @member {String} productType
 */
ItemSummaryByMarketplace.prototype.productType = undefined;

/**
 * Allowed values for the <code>conditionType</code> property.
 * @enum {String}
 * @readonly
 */
ItemSummaryByMarketplace.ConditionTypeEnum = {
  /**
   * value: "new_new"
   * @const
   */
  newNew: "new_new",

  /**
   * value: "new_open_box"
   * @const
   */
  newOpenBox: "new_open_box",

  /**
   * value: "new_oem"
   * @const
   */
  newOem: "new_oem",

  /**
   * value: "refurbished_refurbished"
   * @const
   */
  refurbishedRefurbished: "refurbished_refurbished",

  /**
   * value: "used_like_new"
   * @const
   */
  usedLikeNew: "used_like_new",

  /**
   * value: "used_very_good"
   * @const
   */
  usedVeryGood: "used_very_good",

  /**
   * value: "used_good"
   * @const
   */
  usedGood: "used_good",

  /**
   * value: "used_acceptable"
   * @const
   */
  usedAcceptable: "used_acceptable",

  /**
   * value: "collectible_like_new"
   * @const
   */
  collectibleLikeNew: "collectible_like_new",

  /**
   * value: "collectible_very_good"
   * @const
   */
  collectibleVeryGood: "collectible_very_good",

  /**
   * value: "collectible_good"
   * @const
   */
  collectibleGood: "collectible_good",

  /**
   * value: "collectible_acceptable"
   * @const
   */
  collectibleAcceptable: "collectible_acceptable",

  /**
   * value: "club_club"
   * @const
   */
  clubClub: "club_club"
};

/**
 * Identifies the condition of the listings item.
 * @member {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemSummaryByMarketplace.ConditionTypeEnum} conditionType
 */
ItemSummaryByMarketplace.prototype.conditionType = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ItemSummaryByMarketplace.StatusEnum = {
  /**
   * value: "BUYABLE"
   * @const
   */
  BUYABLE: "BUYABLE",

  /**
   * value: "DISCOVERABLE"
   * @const
   */
  DISCOVERABLE: "DISCOVERABLE"
};

/**
 * Statuses that apply to the listings item.
 * @member {Array.<module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemSummaryByMarketplace.StatusEnum>} status
 */
ItemSummaryByMarketplace.prototype.status = undefined;

/**
 * The fulfillment network stock keeping unit is an identifier used by Amazon fulfillment centers to identify each unique item.
 * @member {String} fnSku
 */
ItemSummaryByMarketplace.prototype.fnSku = undefined;

/**
 * The name or title associated with an Amazon catalog item.
 * @member {String} itemName
 */
ItemSummaryByMarketplace.prototype.itemName = undefined;

/**
 * The date the listings item was created in ISO 8601 format.
 * @member {Date} createdDate
 */
ItemSummaryByMarketplace.prototype.createdDate = undefined;

/**
 * The date the listings item was last updated in ISO 8601 format.
 * @member {Date} lastUpdatedDate
 */
ItemSummaryByMarketplace.prototype.lastUpdatedDate = undefined;

/**
 * The main image for the listings item.
 * @member {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ItemImage} mainImage
 */
ItemSummaryByMarketplace.prototype.mainImage = undefined;


