/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
import {OptionalFulfillmentProgram} from './OptionalFulfillmentProgram.js';
import {PriceToEstimateFees} from './PriceToEstimateFees.js';

/**
 * The FeesEstimateRequest model module.
 * @module productFeesV0/js-client.productFeesV0.model/FeesEstimateRequest
 * @version v0
 */
export class FeesEstimateRequest {
  /**
   * Constructs a new <code>FeesEstimateRequest</code>.
   * A product, marketplace, and proposed price used to request estimated fees.
   * @alias module:productFeesV0/js-client.productFeesV0.model/FeesEstimateRequest
   * @class
   * @param marketplaceId {String} A marketplace identifier.
   * @param priceToEstimateFees {module:productFeesV0/js-client.productFeesV0.model/PriceToEstimateFees} The product price that the fee estimate is based on.
   * @param identifier {String} A unique identifier provided by the caller to track this request.
   */
  constructor(marketplaceId, priceToEstimateFees, identifier) {
    this.marketplaceId = marketplaceId;
    this.priceToEstimateFees = priceToEstimateFees;
    this.identifier = identifier;
  }

  /**
   * Constructs a <code>FeesEstimateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateRequest} obj Optional instance to populate.
   * @return {module:productFeesV0/js-client.productFeesV0.model/FeesEstimateRequest} The populated <code>FeesEstimateRequest</code> instance.
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
      obj = obj || new FeesEstimateRequest();
      if (data.hasOwnProperty('MarketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['MarketplaceId'], 'String');
      if (data.hasOwnProperty('IsAmazonFulfilled'))
        obj.isAmazonFulfilled = ApiClient.convertToType(data['IsAmazonFulfilled'], 'Boolean');
      if (data.hasOwnProperty('PriceToEstimateFees'))
        obj.priceToEstimateFees = PriceToEstimateFees.constructFromObject(data['PriceToEstimateFees']);
      if (data.hasOwnProperty('Identifier'))
        obj.identifier = ApiClient.convertToType(data['Identifier'], 'String');
      if (data.hasOwnProperty('OptionalFulfillmentProgram'))
        obj.optionalFulfillmentProgram = OptionalFulfillmentProgram.constructFromObject(data['OptionalFulfillmentProgram']);
    }
    return obj;
  }
}

/**
 * A marketplace identifier.
 * @member {String} marketplaceId
 */
FeesEstimateRequest.prototype.marketplaceId = undefined;

/**
 * When true, the offer is fulfilled by Amazon.
 * @member {Boolean} isAmazonFulfilled
 */
FeesEstimateRequest.prototype.isAmazonFulfilled = undefined;

/**
 * The product price that the fee estimate is based on.
 * @member {module:productFeesV0/js-client.productFeesV0.model/PriceToEstimateFees} priceToEstimateFees
 */
FeesEstimateRequest.prototype.priceToEstimateFees = undefined;

/**
 * A unique identifier provided by the caller to track this request.
 * @member {String} identifier
 */
FeesEstimateRequest.prototype.identifier = undefined;

/**
 * @member {module:productFeesV0/js-client.productFeesV0.model/OptionalFulfillmentProgram} optionalFulfillmentProgram
 */
FeesEstimateRequest.prototype.optionalFulfillmentProgram = undefined;


