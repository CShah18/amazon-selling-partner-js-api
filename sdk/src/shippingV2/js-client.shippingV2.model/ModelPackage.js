/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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
import {ChargeList} from './ChargeList.js';
import {Currency} from './Currency.js';
import {Dimensions} from './Dimensions.js';
import {ItemList} from './ItemList.js';
import {PackageClientReferenceId} from './PackageClientReferenceId.js';
import {Weight} from './Weight.js';

/**
 * The ModelPackage model module.
 * @module shippingV2/js-client.shippingV2.model/ModelPackage
 * @version v2
 */
export class ModelPackage {
  /**
   * Constructs a new <code>ModelPackage</code>.
   * A package to be shipped through a shipping service offering.
   * @alias module:shippingV2/js-client.shippingV2.model/ModelPackage
   * @class
   * @param dimensions {module:shippingV2/js-client.shippingV2.model/Dimensions} 
   * @param weight {module:shippingV2/js-client.shippingV2.model/Weight} 
   * @param insuredValue {module:shippingV2/js-client.shippingV2.model/Currency} 
   * @param packageClientReferenceId {module:shippingV2/js-client.shippingV2.model/PackageClientReferenceId} 
   * @param items {module:shippingV2/js-client.shippingV2.model/ItemList} 
   */
  constructor(dimensions, weight, insuredValue, packageClientReferenceId, items) {
    this.dimensions = dimensions;
    this.weight = weight;
    this.insuredValue = insuredValue;
    this.packageClientReferenceId = packageClientReferenceId;
    this.items = items;
  }

  /**
   * Constructs a <code>ModelPackage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/ModelPackage} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/ModelPackage} The populated <code>ModelPackage</code> instance.
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
      obj = obj || new ModelPackage();
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = Dimensions.constructFromObject(data['dimensions']);
      if (data.hasOwnProperty('weight'))
        obj.weight = Weight.constructFromObject(data['weight']);
      if (data.hasOwnProperty('insuredValue'))
        obj.insuredValue = Currency.constructFromObject(data['insuredValue']);
      if (data.hasOwnProperty('isHazmat'))
        obj.isHazmat = ApiClient.convertToType(data['isHazmat'], 'Boolean');
      if (data.hasOwnProperty('sellerDisplayName'))
        obj.sellerDisplayName = ApiClient.convertToType(data['sellerDisplayName'], 'String');
      if (data.hasOwnProperty('charges'))
        obj.charges = ChargeList.constructFromObject(data['charges']);
      if (data.hasOwnProperty('packageClientReferenceId'))
        obj.packageClientReferenceId = PackageClientReferenceId.constructFromObject(data['packageClientReferenceId']);
      if (data.hasOwnProperty('items'))
        obj.items = ItemList.constructFromObject(data['items']);
    }
    return obj;
  }
}

/**
 * @member {module:shippingV2/js-client.shippingV2.model/Dimensions} dimensions
 */
ModelPackage.prototype.dimensions = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/Weight} weight
 */
ModelPackage.prototype.weight = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/Currency} insuredValue
 */
ModelPackage.prototype.insuredValue = undefined;

/**
 * When true, the package contains hazardous materials. Defaults to false.
 * @member {Boolean} isHazmat
 */
ModelPackage.prototype.isHazmat = undefined;

/**
 * The seller name displayed on the label.
 * @member {String} sellerDisplayName
 */
ModelPackage.prototype.sellerDisplayName = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/ChargeList} charges
 */
ModelPackage.prototype.charges = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/PackageClientReferenceId} packageClientReferenceId
 */
ModelPackage.prototype.packageClientReferenceId = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/ItemList} items
 */
ModelPackage.prototype.items = undefined;


